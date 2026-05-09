# 瑞典KTH留学指南 MCP Server

BY KTH2024 and KTH2025

涵盖：申请流程、签证居留、住宿、学费、生活、交通、银行、手机卡、人口号等全部留学信息。

## 安装方法

### Claude Code (cc)

在项目根目录或 `~/.claude.json` 里加入：

```json
{
  "mcpServers": {
    "sweden-study": {
      "command": "npx",
      "args": ["-y", "sweden-study-mcp"]
    }
  }
}
```

### Cursor

打开 Cursor Settings → MCP → Add Server，填入：

```json
{
  "sweden-study": {
    "command": "npx",
    "args": ["-y", "sweden-study-mcp"]
  }
}
```

### 本地运行（开发调试）

```bash
git clone <this-repo>
cd 瑞典留学SKILL
npm install
node index.js
```

## 可用工具

| 工具名 | 说明 |
|--------|------|
| `query_sweden_study` | 输入问题，搜索相关章节内容 |
| `list_topics` | 列出所有章节目录 |

## 示例问题

- 如何申请KTH？
- 学费怎么交？
- 居留卡怎么办？
- SSSB怎么排队？
- 怎么办瑞典银行卡？
- 手机卡推荐哪个？
