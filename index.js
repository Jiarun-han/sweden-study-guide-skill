#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const knowledge = readFileSync(join(__dirname, "k.md"), "utf-8");

// 按章节分块
const sections = knowledge.split(/\n## /).map((s, i) => (i === 0 ? s : "## " + s));

function search(query) {
  const q = query.toLowerCase();
  const keywords = q.split(/\s+/);

  const scored = sections.map((section) => {
    const text = section.toLowerCase();
    const score = keywords.reduce((acc, kw) => {
      const matches = (text.match(new RegExp(kw, "g")) || []).length;
      return acc + matches;
    }, 0);
    return { section, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.section)
    .join("\n\n---\n\n");
}

const server = new Server(
  { name: "sweden-study-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "query_sweden_study",
      description:
        "查询瑞典KTH留学指南，涵盖申请、签证、住宿、学费、生活、交通、银行、手机卡等所有留学相关信息。BY KTH2024 and KTH2025。",
      inputSchema: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "你的问题，例如：如何申请KTH？学费怎么交？怎么办居留卡？",
          },
        },
        required: ["question"],
      },
    },
    {
      name: "list_topics",
      description: "列出瑞典KTH留学指南的所有章节目录",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "query_sweden_study") {
    const result = search(args.question);
    if (!result) {
      return {
        content: [
          {
            type: "text",
            text: "未找到相关内容，请尝试换个关键词，或使用 list_topics 查看所有章节。",
          },
        ],
      };
    }
    return { content: [{ type: "text", text: result }] };
  }

  if (name === "list_topics") {
    const topics = knowledge
      .split("\n")
      .filter((line) => line.startsWith("## ") || line.startsWith("### "))
      .join("\n");
    return { content: [{ type: "text", text: topics }] };
  }

  throw new Error(`Unknown tool: ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);
