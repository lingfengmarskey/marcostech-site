export const gridweaveDict = {
  en: {
    projectsBack: "← Projects",
    tagline: "A pixel-based design tool for craft and pattern making.",
    status: "Available on the App Store",
    heroTitle: "Turn pixels into patterns.",
    clipsMeta: "12s × 3",

    sectionWhat: "What it does",
    sectionWho: "Who it’s for",
    sectionPhilosophy: "Design philosophy",
    sectionLinks: "Links",

    highlights: [
      "Convert images into precise pixel grids",
      "Edit individual pixels and add annotations",
      "Export clean, print-ready PDFs",
    ],
    audience: [
      "Bead craft designers",
      "Pixel art & pattern makers",
      "Anyone who needs clean, printable grid designs",
    ],
    philosophy: [
      "Designed for clarity, not clutter",
      "Focused on real craft workflows",
      "Fast, offline-friendly, and private by default",
    ],

    appStore: "App Store",
    viewOnAppStore: "View on the App Store →",
    support: "Support",
    privacy: "Privacy Policy",
    viewPrivacy: "View privacy policy",

    footer:
      "GridWeave is built and maintained independently, with a focus on long-term usability and stability.",

    aria: {
      carousel: "GridWeave brand motion videos",
      prev: "Previous video",
      next: "Next video",
      clip1: "Video 1",
      clip2: "Video 2",
      clip3: "Video 3",
      dots: "Video position",
      goto1: "Go to video 1",
      goto2: "Go to video 2",
      goto3: "Go to video 3",
    },
  },

  ja: {
    projectsBack: "← プロジェクト",
    tagline: "クラフトやパターン作成のための、ピクセルベースのデザインツール。",
    status: "App Store で配信中",
    heroTitle: "ピクセルから、パターンへ。",
    clipsMeta: "12秒 × 3",

    sectionWhat: "できること",
    sectionWho: "こんな人におすすめ",
    sectionPhilosophy: "デザイン方針",
    sectionLinks: "リンク",

    highlights: [
      "画像を正確なピクセルグリッドに変換",
      "ピクセル編集と注釈（マーク）を追加",
      "印刷に適したPDFを書き出し",
    ],
    audience: [
      "ビーズ作品の図案づくり",
      "ピクセルアート／図案作成",
      "見やすいグリッド図を作って印刷したい方",
    ],
    philosophy: [
      "見やすさ重視、余計な要素は最小限",
      "実際の制作フローに沿った設計",
      "高速・オフライン寄り・プライバシー重視",
    ],

    appStore: "App Store",
    viewOnAppStore: "App Store で見る →",
    support: "サポート",
    privacy: "プライバシーポリシー",
    viewPrivacy: "プライバシーポリシーを見る",

    footer:
      "GridWeave は個人で開発・運用しており、安定性と長期的な使いやすさを大切にしています。",

    aria: {
      carousel: "GridWeave のブランドモーション動画",
      prev: "前の動画",
      next: "次の動画",
      clip1: "動画 1",
      clip2: "動画 2",
      clip3: "動画 3",
      dots: "動画の位置",
      goto1: "動画1へ",
      goto2: "動画2へ",
      goto3: "動画3へ",
    },
  },

  zh: {
    projectsBack: "← 项目",
    tagline: "面向手工与图案制作的像素网格设计工具。",
    status: "已上架 App Store",
    heroTitle: "把像素变成图案。",
    clipsMeta: "12秒 × 3",

    sectionWhat: "功能亮点",
    sectionWho: "适用人群",
    sectionPhilosophy: "设计理念",
    sectionLinks: "链接",

    highlights: [
      "将图片转换为精确的像素网格",
      "支持逐格编辑并添加标记/注释",
      "导出清晰、可打印的 PDF",
    ],
    audience: [
      "串珠/手工图案设计者",
      "像素画与图案制作",
      "需要清晰网格图并用于打印的人",
    ],
    philosophy: [
      "以清晰为先，克制不臃肿",
      "贴合真实的手作流程",
      "更快、更稳定、默认重视隐私",
    ],

    appStore: "App Store",
    viewOnAppStore: "在 App Store 查看 →",
    support: "支持",
    privacy: "隐私政策",
    viewPrivacy: "查看隐私政策",

    footer: "GridWeave 由独立开发维护，专注于长期的稳定性与易用性。",

    aria: {
      carousel: "GridWeave 品牌动效视频",
      prev: "上一条视频",
      next: "下一条视频",
      clip1: "视频 1",
      clip2: "视频 2",
      clip3: "视频 3",
      dots: "视频位置",
      goto1: "跳到视频1",
      goto2: "跳到视频2",
      goto3: "跳到视频3",
    },
  },
} as const;

export type Locale = keyof typeof gridweaveDict;
