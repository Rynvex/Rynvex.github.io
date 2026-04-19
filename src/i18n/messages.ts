export type Locale = "en" | "zh" | "ja";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中" },
  { code: "ja", label: "日" },
];

type Msg = {
  nav: { about: string; experience: string; projects: string; skills: string; contact: string };
  hero: {
    label: string;
    name: string;
    tagline: string;
    bio: string;
    status: string;
    ctaProjects: string;
    ctaResume: string;
    ctaContact: string;
  };
  about: { label: string; title: string; body: string[] };
  experience: {
    label: string;
    title: string;
    items: { role: string; period: string; company: string; bullets: string[] }[];
  };
  projects: {
    label: string;
    title: string;
    items: {
      id: string;
      title: string;
      role: string;
      pitch: string;
      stack: string[];
      tag?: string;
      confidential?: boolean;
      company?: string;
      news?: { label: string; url: string }[];
      image?: string;
    }[];
  };
  skills: {
    label: string;
    title: string;
    categories: { name: string; items: string[] }[];
    radarTitle: string;
    radarAxes: string[];
    langTitle: string;
    languages: { name: string; level: string; value: number }[];
  };
  education: {
    label: string;
    title: string;
    degree: string;
    school: string;
    period: string;
    thesisLabel: string;
    thesis: string;
    thesisDesc: string;
  };
  contact: {
    label: string;
    title: string;
    body: string;
    email: string;
  };
  footer: { built: string };
  design: { label: string };
  designLab: {
    label: string;
    intro: string;
    current: string;
    more: string;
    trigger: string;
  };
};

export const messages: Record<Locale, Msg> = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      label: "Portfolio · 2026",
      name: "Chang Li-Wei",
      tagline: "DevPM. Still writing code.",
      bio:
        "I lead computer vision and LLM projects at Asilla in Tokyo — from requirement to production. Previously Software & R&D Engineer. NTHU MS in Computer Science.",
      status: "Open to Work — DevPM / AI Engineer roles in Japan",
      ctaProjects: "View projects",
      ctaResume: "Download resume",
      ctaContact: "Contact me",
    },
    about: {
      label: "01 / About",
      title: "A DevPM who still writes code.",
      body: [
        "I'm a DevPM at Asilla in Tokyo, working on computer vision and LLM products. My day-to-day is taking projects from requirement to production — scoping, design, client comms, and sometimes writing code myself.",
        "Before DevPM, I worked at the same company as an R&D engineer (mostly training CV models) and before that as a software engineer (backend services and data pipelines). M.S. in Computer Science from NTHU; my thesis was on Audio Super Resolution using a Zero-Shot Neural Network.",
        "In my spare time I build LLM + RAG side projects — currently a stock-market RAG agent and an NLP paper recommendation system.",
        "Outside of that, I'm usually playing drums, listening to rock, or gaming — pretty much anything with good rhythm.",
      ],
    },
    experience: {
      label: "02 / Experience",
      title: "Where I've been.",
      items: [
        {
          role: "DevPM",
          period: "Jul 2025 — Present",
          company: "Asilla, Inc. · Remote",
          bullets: [
            "Lead multiple AI projects end-to-end: requirements, scope, cross-functional delivery, JP/EN client communication.",
            "Manage roadmaps across research, MLOps, and edge deployment.",
            "Coordinate research engineers and customer stakeholders — turning business constraints into model specs.",
          ],
        },
        {
          role: "Ad Account Data Analysis",
          period: "Feb 2026 — Present",
          company: "Freelance · Remote",
          bullets: [
            "Analyze Meta ad account data for an agency's clients.",
            "Design and optimize BigQuery queries to improve extraction efficiency.",
            "Build lightweight dashboards to help clients read ad performance.",
          ],
        },
        {
          role: "R&D Engineer",
          period: "Dec 2022 — Jun 2025",
          company: "Asilla, Inc. · Remote",
          bullets: [
            "Designed and trained CV models for anomaly, action, and emotion recognition.",
            "Worked on edge inference optimization for on-device deployment.",
            "Liaised with overseas client (Chicony) on product development.",
          ],
        },
        {
          role: "Software Engineer",
          period: "Feb 2022 — Nov 2022",
          company: "Asilla, Inc. · Remote",
          bullets: [
            "Built a garbage-truck safety app (person detection near the shredding mechanism) in partnership with Intel (NUC), Morita, and ITD LAB (3D cameras).",
            "Ran on-site demos and customer feedback loops to drive improvements.",
          ],
        },
      ],
    },
    projects: {
      label: "03 / Projects",
      title: "Selected work.",
      items: [
        {
          id: "01",
          title: "Robot Dog Behavior Anomaly Detection",
          role: "Asilla · Client project",
          pitch:
            "Integrated Asilla's core CV algorithm onto a quadruped robot to spot abnormal behaviors (falls, fights), mitigating motion noise from the moving platform.",
          stack: ["PyTorch", "YOLO", "Edge AI", "Jetson", "Docker"],
          confidential: true,
          company: "Asilla, Inc.",
          news: [],
        },
        {
          id: "02",
          title: "Shipboard Crew Safety Monitoring",
          role: "Asilla · Client project",
          pitch:
            "Monitoring crew PPE compliance and hazardous actions on moving vessels — handling motion, low-light, and rolling-sea conditions.",
          stack: ["PyTorch", "Pose Estimation", "Action Recognition", "Linux"],
          confidential: true,
          company: "Asilla, Inc.",
          news: [
            { label: "Press release · JMD", url: "https://www.jmd.co.jp/article.php?no=310689" },
          ],
        },
        {
          id: "03",
          title: "Factory Operation Violation Detection",
          role: "Asilla · Client project",
          pitch:
            "WorkPose — a video work-analysis system deployed at a major textile manufacturer's overseas sewing factories. Quantifies worker motion against standard time to shorten sewing cycles and accelerate skill transfer.",
          stack: ["YOLO", "Tracking", "BigQuery", "Docker"],
          confidential: true,
          company: "Asilla, Inc.",
          news: [
            { label: "Press release · Mapion", url: "https://www.mapion.co.jp/news/release/vp366461-all/" },
          ],
        },
        {
          id: "04",
          title: "Cloud Video Platform Partnership",
          role: "Asilla · Partner project",
          pitch:
            "Customized and containerized Asilla's core product for a cloud video platform partner. Ran QA and cross-team coordination during parallel development.",
          stack: ["Docker", "Linux", "QA", "Python"],
          confidential: true,
          company: "Asilla, Inc.",
          news: [],
        },
        {
          id: "05",
          title: "LLM × RAG Stock Market Analyst",
          role: "Solo build",
          pitch:
            "Agent that ingests filings, news, and earnings transcripts, and answers open-ended investment questions with citations.",
          stack: ["Python", "LangChain", "Vector DB", "LLM", "RAG"],
          tag: "side project",
          confidential: false,
          image: "/projects/05.svg",
        },
        {
          id: "06",
          title: "NLP Paper Recommendation System",
          role: "Solo build",
          pitch:
            "Semantic recommendation over arXiv embeddings with user-feedback re-ranking. Cut paper review time ~50% for the R&D team.",
          stack: ["Python", "Sentence-BERT", "FAISS", "NLP"],
          tag: "side project",
          confidential: false,
          image: "/projects/06.svg",
        },
      ],
    },
    skills: {
      label: "04 / Skills",
      title: "Toolbelt.",
      categories: [
        {
          name: "AI / ML",
          items: ["PyTorch", "Deep Learning", "NLP", "LLM", "RAG", "Computer Vision"],
        },
        { name: "Languages", items: ["Python", "C / C++", "SQL"] },
        {
          name: "Infra / Ops",
          items: ["Docker", "Linux", "Git", "BigQuery", "Edge Deployment"],
        },
        {
          name: "Leadership",
          items: ["Project Management", "JP / EN / ZH", "Client Comms", "Agile"],
        },
      ],
      radarTitle: "Strength map",
      radarAxes: [
        "ML Modeling",
        "LLM / RAG",
        "System Design",
        "Project Mgmt",
        "Client Comms",
        "MLOps",
      ],
      langTitle: "Spoken languages",
      languages: [
        { name: "Chinese", level: "Native", value: 100 },
        { name: "English", level: "Professional", value: 85 },
        { name: "Japanese", level: "JLPT N2", value: 70 },
      ],
    },
    education: {
      label: "05 / Education",
      title: "Where I trained.",
      degree: "M.S. in Computer Science",
      school: "National Tsing Hua University (NTHU), Taiwan",
      period: "2017 — 2020",
      thesisLabel: "Thesis",
      thesis: "Audio Super Resolution using Zero-Shot Neural Network",
      thesisDesc:
        "A model that upsamples audio without paired training data, leveraging zero-shot learning on the signal itself.",
    },
    contact: {
      label: "06 / Contact",
      title: "Drop me a line.",
      body:
        "Looking for DevPM / AI Engineer roles in Japan. Also take freelance work and keep building my own things. Happy to chat about CV, LLMs, or PM.",
      email: "zx8733520@hotmail.com",
    },
    footer: { built: "Built with Next.js · Tailwind · DESIGN.md" },
    design: { label: "Design" },
    designLab: {
      label: "Design Lab",
      intro:
        "This site ships in multiple design systems, each rebuilt from a public DESIGN.md spec as CSS variable sets. Click a card (or ⌘K) to swap the whole site live.",
      current: "Current",
      more: "More designs coming",
      trigger: "Design",
    },
  },

  zh: {
    nav: { about: "關於", experience: "經歷", projects: "專案", skills: "技能", contact: "聯絡" },
    hero: {
      label: "作品集 · 2026",
      name: "張力偉",
      tagline: "DevPM，還在寫 code。",
      bio:
        "我在東京 Asilla 領導多個電腦視覺與 LLM 專案，負責從需求定義到上線部署的全流程。曾任軟體工程師與研發工程師。清華大學資工所碩士。",
      status: "正在尋找機會 — 日本 DevPM / AI Engineer",
      ctaProjects: "查看專案",
      ctaResume: "下載履歷",
      ctaContact: "聯絡我",
    },
    about: {
      label: "01 / 關於",
      title: "一位仍然寫程式的 DevPM。",
      body: [
        "我在東京 Asilla 擔任 DevPM，主要做電腦視覺與 LLM 產品。日常工作是把專案從需求跑到上線——需求定義、系統設計、客戶溝通，偶爾還是會自己寫 code。",
        "在當 DevPM 之前，我在同公司做過 R&D engineer（主要做 CV 模型訓練）和 software engineer（後端服務與資料 pipeline）。清大資工碩士，碩士論文做 Zero-Shot Neural Network 的 Audio Super Resolution。",
        "下班時間會做 LLM 和 RAG 的個人專案，最近在寫股票市場 RAG agent 和 NLP 論文推薦系統。",
        "其他時候大多在打鼓、聽搖滾、玩遊戲——有節奏感的事情都喜歡。",
      ],
    },
    experience: {
      label: "02 / 經歷",
      title: "我走過的路。",
      items: [
        {
          role: "DevPM",
          period: "2025.7 — 至今",
          company: "Asilla, Inc. · 遠端",
          bullets: [
            "同時領導多個 AI 專案的全生命週期：需求、範圍、跨職能交付、日英雙語客戶溝通。",
            "負責研究、MLOps、邊緣部署的完整路線圖。",
            "協調研究工程師與客戶，將商業限制轉譯為模型規格。",
          ],
        },
        {
          role: "廣告帳戶資料分析",
          period: "2026.2 — 至今",
          company: "Freelance · 遠端",
          bullets: [
            "為代理商客戶分析 Meta 廣告帳戶資料。",
            "設計與最佳化 BigQuery 查詢，提升資料抽取效率。",
            "建立輕量視覺化儀表板，協助客戶解讀廣告成效。",
          ],
        },
        {
          role: "R&D Engineer",
          period: "2022.12 — 2025.6",
          company: "Asilla, Inc. · 遠端",
          bullets: [
            "設計並訓練異常、行為、情緒辨識的電腦視覺模型。",
            "投入邊緣裝置推論優化相關工作。",
            "擔任海外客戶（Chicony）產品開發的對接窗口。",
          ],
        },
        {
          role: "Software Engineer",
          period: "2022.2 — 2022.11",
          company: "Asilla, Inc. · 遠端",
          bullets: [
            "開發垃圾收集車的人員偵測與防捲入安全應用，與 Intel（NUC）、Morita、ITD LAB（3D 攝影機）協作。",
            "透過現場 demo 與客戶回饋循環推動改進。",
          ],
        },
      ],
    },
    projects: {
      label: "03 / 專案",
      title: "精選作品。",
      items: [
        {
          id: "01",
          title: "機器犬異常行為偵測",
          role: "Asilla · 客戶專案",
          pitch:
            "把公司核心電腦視覺演算法整合到四足機器犬上，辨識跌倒、打架等異常行為，並處理移動平台帶來的震動雜訊。",
          stack: ["PyTorch", "YOLO", "Edge AI", "Jetson", "Docker"],
          confidential: true,
          company: "Asilla, Inc.",
          news: [],
        },
        {
          id: "02",
          title: "船上乘組員安全監控",
          role: "Asilla · 客戶專案",
          pitch: "於航行中船隻監控乘組員防護裝備合規與危險動作，適應晃動、低光、海上移動等嚴苛條件。",
          stack: ["PyTorch", "Pose Estimation", "Action Recognition", "Linux"],
          confidential: true,
          company: "Asilla, Inc.",
          news: [
            { label: "新聞稿 · JMD", url: "https://www.jmd.co.jp/article.php?no=310689" },
          ],
        },
        {
          id: "03",
          title: "工廠作業違規偵測",
          role: "Asilla · 客戶專案",
          pitch: "影像動作分析系統『WorkPose』導入某大型紡織集團海外縫製工廠，解析作業者動作、對照標準工時，協助縮短作業時間與加速技能傳承。",
          stack: ["YOLO", "Tracking", "BigQuery", "Docker"],
          confidential: true,
          company: "Asilla, Inc.",
          news: [
            { label: "新聞稿 · Mapion", url: "https://www.mapion.co.jp/news/release/vp366461-all/" },
          ],
        },
        {
          id: "04",
          title: "雲端影像平台合作",
          role: "Asilla · 夥伴專案",
          pitch: "將公司核心產品客製化並容器化，部署到雲端影像平台夥伴環境。管理 QA 流程與跨團隊並行開發溝通。",
          stack: ["Docker", "Linux", "QA", "Python"],
          confidential: true,
          company: "Asilla, Inc.",
          news: [],
        },
        {
          id: "05",
          title: "LLM × RAG 股票市場分析代理",
          role: "個人開發",
          pitch: "整合財報、新聞、法說會逐字稿的 RAG 代理，能針對開放式投資問題生成附引用的分析。",
          stack: ["Python", "LangChain", "Vector DB", "LLM", "RAG"],
          tag: "個人專案",
          confidential: false,
          image: "/projects/05.svg",
        },
        {
          id: "06",
          title: "NLP 論文推薦系統",
          role: "個人開發",
          pitch: "基於 arXiv 嵌入向量的語意推薦，支援使用者回饋重排序，為 R&D 團隊節省約 50% 論文篩選時間。",
          stack: ["Python", "Sentence-BERT", "FAISS", "NLP"],
          tag: "個人專案",
          confidential: false,
          image: "/projects/06.svg",
        },
      ],
    },
    skills: {
      label: "04 / 技能",
      title: "工具箱。",
      categories: [
        {
          name: "AI / ML",
          items: ["PyTorch", "Deep Learning", "NLP", "LLM", "RAG", "Computer Vision"],
        },
        { name: "程式語言", items: ["Python", "C / C++", "SQL"] },
        {
          name: "Infra / Ops",
          items: ["Docker", "Linux", "Git", "BigQuery", "Edge Deployment"],
        },
        {
          name: "領導力",
          items: ["專案管理", "日 / 英 / 中", "客戶溝通", "Agile"],
        },
      ],
      radarTitle: "能力分布",
      radarAxes: ["ML 建模", "LLM / RAG", "系統設計", "專案管理", "客戶溝通", "MLOps"],
      langTitle: "語言能力",
      languages: [
        { name: "中文", level: "母語", value: 100 },
        { name: "英文", level: "專業", value: 85 },
        { name: "日文", level: "JLPT N2", value: 70 },
      ],
    },
    education: {
      label: "05 / 學歷",
      title: "我受訓的地方。",
      degree: "資訊工程研究所 碩士",
      school: "國立清華大學",
      period: "2017 — 2020",
      thesisLabel: "碩士論文",
      thesis: "Audio Super Resolution using Zero-Shot Neural Network",
      thesisDesc:
        "無需配對訓練資料的音訊超解析模型，透過訊號自身進行零樣本學習。",
    },
    contact: {
      label: "06 / 聯絡",
      title: "想聊就寄信。",
      body: "在日本找 DevPM / AI Engineer 工作，也接 freelance、做自己的專案。CV、LLM、PM 的事情都可以聊。",
      email: "zx8733520@hotmail.com",
    },
    footer: { built: "以 Next.js · Tailwind · DESIGN.md 打造" },
    design: { label: "設計" },
    designLab: {
      label: "Design Lab",
      intro:
        "這個網站內建多種設計系統，每一套都是讀了原公司公開的 DESIGN.md 後用 CSS 變數重實作的。點卡片（或按 ⌘K）即時切換整站。",
      current: "目前",
      more: "更多設計陸續加入",
      trigger: "設計",
    },
  },

  ja: {
    nav: {
      about: "概要",
      experience: "経歴",
      projects: "プロジェクト",
      skills: "スキル",
      contact: "連絡先",
    },
    hero: {
      label: "ポートフォリオ · 2026",
      name: "Chang Li-Wei",
      tagline: "DevPM、まだコード書いてます。",
      bio:
        "東京のAsillaにてコンピュータビジョン・LLMプロジェクトを要件定義から本番運用までリード。元ソフトウェア／R&Dエンジニア。国立清華大学 情報工学修士。",
      status: "求職中 — 日本のDevPM / AIエンジニア職",
      ctaProjects: "プロジェクトを見る",
      ctaResume: "履歴書をダウンロード",
      ctaContact: "お問い合わせ",
    },
    about: {
      label: "01 / 概要",
      title: "今もコードを書き続けるDevPM。",
      body: [
        "東京のAsillaでDevPMをしており、コンピュータビジョンとLLMプロダクトを担当しています。普段は要件定義・設計・クライアント対応など、プロジェクトを要件から本番運用まで進める仕事。今でもたまに自分でコードを書きます。",
        "DevPMの前は同じ会社でR&Dエンジニア（主にCVモデルの学習）、その前はソフトウェアエンジニア（バックエンドとデータパイプライン）として働いていました。国立清華大学 情報工学修士。修士論文はゼロショットニューラルネットを用いたAudio Super Resolutionです。",
        "仕事以外ではLLMとRAGの個人プロジェクトを作っていて、最近は株式市場のRAGエージェントとNLP論文推薦システムを書いています。",
        "あとはだいたいドラムを叩いたり、ロックを聴いたり、ゲームをしたり。リズム感のあるものはだいたい好きです。",
      ],
    },
    experience: {
      label: "02 / 経歴",
      title: "歩んできた道。",
      items: [
        {
          role: "DevPM",
          period: "2025.7 — 現在",
          company: "株式会社アジラ · リモート",
          bullets: [
            "複数のAIプロジェクトを並行してリード：要件定義、スコープ、クロスファンクショナル納品、日英クライアント対応。",
            "研究・MLOps・エッジ展開を横断するロードマップを策定。",
            "研究エンジニアとクライアントを調整し、ビジネス制約をモデル仕様へ翻訳。",
          ],
        },
        {
          role: "広告アカウントデータ分析",
          period: "2026.2 — 現在",
          company: "フリーランス · リモート",
          bullets: [
            "代理店のクライアント向けにMeta広告アカウントデータを分析。",
            "BigQueryクエリを設計・最適化し、抽出効率を改善。",
            "軽量な可視化レポートで広告配信パフォーマンスの把握を支援。",
          ],
        },
        {
          role: "R&Dエンジニア",
          period: "2022.12 — 2025.6",
          company: "株式会社アジラ · リモート",
          bullets: [
            "異常・行動・感情認識のCVモデルを設計・学習。",
            "エッジ推論の最適化に取り組む。",
            "海外クライアント（Chicony）との製品開発連携を担当。",
          ],
        },
        {
          role: "ソフトウェアエンジニア",
          period: "2022.2 — 2022.11",
          company: "株式会社アジラ · リモート",
          bullets: [
            "ゴミ収集車向けの巻き込み防止・人物検知アプリケーションを開発。Intel（NUC）、モリタ、ITD LAB（3Dカメラ）と協業。",
            "オンサイトデモと顧客フィードバックで改善サイクルを回した。",
          ],
        },
      ],
    },
    projects: {
      label: "03 / プロジェクト",
      title: "代表作。",
      items: [
        {
          id: "01",
          title: "ロボット犬の異常行動検出",
          role: "Asilla · クライアントプロジェクト",
          pitch: "自社のコアCVアルゴリズムを四足歩行ロボットに統合し、転倒・喧嘩などの異常行動を検出。移動体特有の振動ノイズに対応。",
          stack: ["PyTorch", "YOLO", "Edge AI", "Jetson", "Docker"],
          confidential: true,
          company: "株式会社アジラ",
          news: [],
        },
        {
          id: "02",
          title: "船上乗組員の安全監視",
          role: "Asilla · クライアントプロジェクト",
          pitch: "航行中の船上で乗組員のPPE着用と危険行動を監視。揺れ・暗所・動揺する海上環境に対応。",
          stack: ["PyTorch", "Pose Estimation", "Action Recognition", "Linux"],
          confidential: true,
          company: "株式会社アジラ",
          news: [
            { label: "プレスリリース · JMD", url: "https://www.jmd.co.jp/article.php?no=310689" },
          ],
        },
        {
          id: "03",
          title: "工場作業違反検出",
          role: "Asilla · クライアントプロジェクト",
          pitch: "映像作業解析システム『WorkPose』を大手繊維メーカーの海外縫製工場に導入。作業者の動きを解析し標準時間との差を定量化、作業時間短縮と技能伝承を支援。",
          stack: ["YOLO", "Tracking", "BigQuery", "Docker"],
          confidential: true,
          company: "株式会社アジラ",
          news: [
            { label: "プレスリリース · Mapion", url: "https://www.mapion.co.jp/news/release/vp366461-all/" },
          ],
        },
        {
          id: "04",
          title: "クラウド映像プラットフォーム連携",
          role: "Asilla · パートナー連携",
          pitch: "自社製品をパートナー企業のクラウド環境向けにコンテナ化・カスタマイズ。QAプロセスと並行開発の技術コミュニケーションを管理。",
          stack: ["Docker", "Linux", "QA", "Python"],
          confidential: true,
          company: "株式会社アジラ",
          news: [],
        },
        {
          id: "05",
          title: "LLM × RAG 株式市場アナリスト",
          role: "個人開発",
          pitch: "有価証券報告書、ニュース、決算説明会テキストを統合するRAGエージェント。投資質問に引用付きで回答。",
          stack: ["Python", "LangChain", "Vector DB", "LLM", "RAG"],
          tag: "個人プロジェクト",
          confidential: false,
          image: "/projects/05.svg",
        },
        {
          id: "06",
          title: "NLP 論文推薦システム",
          role: "個人開発",
          pitch: "arXiv論文の埋め込みベクトルを使った意味ベース推薦と、ユーザーフィードバックによる再ランキング。R&Dチームの論文選定時間を約50%削減。",
          stack: ["Python", "Sentence-BERT", "FAISS", "NLP"],
          tag: "個人プロジェクト",
          confidential: false,
          image: "/projects/06.svg",
        },
      ],
    },
    skills: {
      label: "04 / スキル",
      title: "ツールベルト。",
      categories: [
        {
          name: "AI / ML",
          items: ["PyTorch", "Deep Learning", "NLP", "LLM", "RAG", "Computer Vision"],
        },
        { name: "言語", items: ["Python", "C / C++", "SQL"] },
        {
          name: "Infra / Ops",
          items: ["Docker", "Linux", "Git", "BigQuery", "Edge Deployment"],
        },
        {
          name: "リーダーシップ",
          items: ["プロジェクト管理", "日 / 英 / 中", "クライアント対応", "Agile"],
        },
      ],
      radarTitle: "強みマップ",
      radarAxes: [
        "MLモデリング",
        "LLM / RAG",
        "システム設計",
        "PM",
        "クライアント対応",
        "MLOps",
      ],
      langTitle: "言語",
      languages: [
        { name: "中国語", level: "ネイティブ", value: 100 },
        { name: "英語", level: "ビジネス", value: 85 },
        { name: "日本語", level: "JLPT N2", value: 70 },
      ],
    },
    education: {
      label: "05 / 学歴",
      title: "学んだ場所。",
      degree: "情報工学 修士",
      school: "国立清華大学（台湾）",
      period: "2017 — 2020",
      thesisLabel: "修士論文",
      thesis: "Audio Super Resolution using Zero-Shot Neural Network",
      thesisDesc:
        "ペアデータ不要のオーディオ超解像モデル。信号自体を用いたゼロショット学習を活用。",
    },
    contact: {
      label: "06 / 連絡先",
      title: "気軽にメールで。",
      body:
        "日本でDevPM / AIエンジニアの仕事を探しています。フリーランス案件も受けていますし、自分のプロジェクトも続けています。CV、LLM、PMの話もお気軽に。",
      email: "zx8733520@hotmail.com",
    },
    footer: { built: "Next.js · Tailwind · DESIGN.md で構築" },
    design: { label: "デザイン" },
    designLab: {
      label: "Design Lab",
      intro:
        "このサイトは複数のデザインシステムに対応しています。各デザインは、企業が公開するDESIGN.mdを読み込み、CSS変数で再実装したものです。カードをクリック（または⌘K）でサイト全体を即時に切り替えます。",
      current: "現在",
      more: "デザインは順次追加",
      trigger: "デザイン",
    },
  },
};
