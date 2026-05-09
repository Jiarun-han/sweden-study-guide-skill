# 瑞典KTH留学指南 Skill

BY KTH2024 and KTH2025

一个 Claude Code Skill，涵盖：申请流程、签证居留、住宿、学费、生活、交通、银行、手机卡、人口号等全部留学信息。

## 安装方法

### 方式一：一行命令安装（推荐）

```bash
npx skills add https://github.com/Jiarun-han/sweden-study-guide-skill --skill sweden-study-guide
```

### 方式二：发给 AI 安装

> 帮我安装 `sweden-study-guide` 这个 Claude Code skill。请按下面步骤做：
>
> 1. 确保 `~/.claude/skills/` 目录存在（不存在就创建）
> 2. 执行 `git clone https://github.com/Jiarun-han/sweden-study-guide-skill.git ~/.claude/skills/sweden-study-guide`
> 3. 验证：`ls ~/.claude/skills/sweden-study-guide/` 应该看到 `SKILL.md`、`references/` 两项
> 4. 告诉我安装好了

### 方式三：手动命令行

```bash
git clone https://github.com/Jiarun-han/sweden-study-guide-skill.git ~/.claude/skills/sweden-study-guide
```

## 触发方式

装好后，Claude Code 会在对话里自动发现并调用这个 skill。触发关键词：

- "如何申请KTH？"
- "学费怎么交？"
- "居留卡怎么办？"
- "SSSB怎么排队？"
- "怎么办瑞典银行卡？"
- "手机卡推荐哪个？"
- "人口号怎么申请？"
- 任何关于瑞典留学的问题

## 目录结构

```
sweden-study-guide/
├── SKILL.md              ← Skill 主文件：触发条件与工作流
├── README.md             ← 本文件
└── references/
    └── knowledge.md      ← 完整知识库
```

## 知识库涵盖章节

| 章节 | 内容 |
|------|------|
| 申请 | UA网站、志愿选择、材料准备、奖学金 |
| 录取与学费 | 录取通知、交学费、退款 |
| 居留许可 | 签证申请、银行存款证明、录指纹、取卡 |
| 住宿 | KTH Housing、SSSB、其他租房 |
| 人口号 | 申请流程、Freja eID、ID卡 |
| 银行 | 开户、BankID、Swish、FinTech银行 |
| 手机卡 | Lyca、Comviq、Telenor、Vimla |
| 公交 | SL购票、学生折扣、交通方式 |
| 学生卡 | Mecenat、Studentkortet |
| 学习生活 | 选课、考试、Canvas、自习室 |
| 日常生活 | 超市、医疗、健身、服装 |
| 旅游 | 签证、交通、明信片 |
| 其他 | 驾照、二手交易、瑞典语、找工作 |

## License

MIT
