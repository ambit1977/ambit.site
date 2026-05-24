export const content = {
  hero: {
    tagline: 'Marketing,\nrewritten by AI.',
    taglineHighlight: 'by AI.',
    subheading: 'AIを、事業の意思決定とオペレーションの軸にする。',
    body: [
      '個人事業主・秋山大志が、AI時代のマーケティング・データ活用を上流の戦略から実装まで一人称で伴走します。',
      'データガバナンス・WEBアナリティクス・アドテク・MA/CRM、その全領域をAIで自動化・自律化し、人が判断すべき意思決定だけを残します。',
    ],
    pillarsLabel: 'なぜ秋山大志を指名するのか',
    pillars: [
      {
        number: '01',
        title: 'AI活用の第一人者',
        description: '生成AIブーム以前から、大手事業会社のAI/MLプロジェクトに関わってきた経験。「PoCで終わるAI」と「事業に効くAI」の境目を、両側から見てきた。',
      },
      {
        number: '02',
        title: '5領域を貫く実装力',
        description: 'ガバナンス・アナリティクス・アドテク・MA/CRMの全領域を一人で触れる。だからこそ、AIで「どこに何を自動化するか」を一気通貫で設計できる。',
      },
      {
        number: '03',
        title: '個人だからこその密度と独立性',
        description: '代理店でもベンダーでもない。媒体・ツールに忖度せず、「いつでも相談できるAI参謀」として、月次・週次で深く関わります。',
      },
    ],
    cta: { primary: '相談する', secondary: 'サービスを見る' },
  },

  about: {
    label: 'About',
    name: '秋山 大志',
    nameEn: 'Taishi Akiyama',
    role: 'AMBIT 代表 / AI活用コンサルタント',
    catchphrase: 'AI時代のAI活用、その第一人者として。',
    // プロフィール写真。実写を /public/profile.jpg に置けば自動でそちらが使われる
    photo: '/profile-placeholder.svg',
    bio: [
      'データガバナンス、WEBアナリティクス、アドテク、MA/CRM ── マーケティング・データ活用の上流から実装までを横断してきた、ハンズオン型の独立コンサルタント。',
      '生成AIが事業を書き換え始めた今、これら全領域を「AIでどう再設計するか」を起点に、戦略立案からツール選定、実装、運用までを一人称で伴走します。',
      '代理店でもツールベンダーでもない第三者として、媒体・製品に忖度しない判断を提供します。',
    ],
    credentials: [
      { label: '専門領域', value: 'AI活用 / データガバナンス / WEBアナリティクス / アドテク / MA・CRM' },
      { label: 'スタイル', value: '戦略設計と実装の両方を一人称で / 顧問・プロジェクト・フラクショナル' },
      { label: '対応規模', value: '年商10億〜500億円規模の事業会社を中心に' },
    ],
    // 経歴ハイライト。空配列ならセクション非表示
    // 形式: { period, role, org, note? }
    experience: [
      { period: '2022 ─', role: 'AMBIT 代表', org: '独立 / 個人事業主', note: 'AI活用を軸に、データ・マーケ全領域のコンサルティング' },
      { period: '〜2022', role: 'Head of Data / 事業会社', org: '事業会社・データ部門', note: 'GA4移行・CDP導入・MA運用・AI/ML PoCをリード' },
      { period: '〜2018', role: 'Marketing & AdTech', org: 'マーケティング領域', note: '広告運用・アドテク導入・計測設計' },
    ],
  },

  // 実績ロゴ。空配列ならセクション非表示。
  // logo を指定すると画像表示、無ければ社名テキストのみ表示。
  // (実データに更新してください)
  trust: {
    label: 'Clients',
    heading: 'こんな組織とご一緒してきました',
    subheading: '(具体名は契約上の都合により非公開のものも含みます。NDA下での個別ご相談を歓迎します。)',
    clients: [
      // 例: { name: '株式会社サンプル', logo: '/clients/sample.svg' },
      // 例: { name: 'Sample Inc.' },
    ],
  },

  // メディア出演・寄稿・登壇。空配列ならセクション非表示。
  // 形式: { date, type ('article'|'talk'|'press'), title, outlet, url? }
  insights: {
    label: 'Insights & Press',
    heading: '発信・登壇・メディア出演',
    subheading: '記事・カンファレンス登壇・メディア取材などの情報です。',
    items: [
      // 例:
      // { date: '2026-03', type: 'article', title: 'GA4移行で見落とされがちな5つの落とし穴', outlet: 'MarkeZine', url: 'https://...' },
      // { date: '2026-01', type: 'talk',    title: 'AI時代のデータ基盤再設計', outlet: 'Data Engineering Conference 2026' },
      // { date: '2025-11', type: 'press',   title: 'AIで広告運用はどう変わるか', outlet: '日経クロストレンド' },
    ],
  },

  services: {
    title: 'AIを軸に、\n5つの領域を再設計する。',
    intro: '中心は「01 AI活用」。残り4領域は、AIで自動化・自律化する対象として位置づけます。',
    items: [
      {
        id: '01',
        slug: 'ai-ml',
        label: 'AI Consulting',
        title: 'AI活用 & 自動化・自律化の設計',
        isCore: true,
        summary: '各事業領域における「人が判断すべきこと」と「AIに委ねるべきこと」を切り分け、生成AI・予測モデル・エージェントを業務に組み込みます。中心は「使う側」と「作る側」の両方を理解した設計。',
        problems: [
          '生成AIを業務に入れたいが、何から始めるかが定まらない',
          'PoCはやったが、本番運用・横展開で止まっている',
          '需要予測・LTV予測・解約予測・異常検知などを内製したい',
          'AIエージェントで日次オペレーションを自律化したい',
          'AIベンダー提案の良し悪しを判断できる人が社内にいない',
        ],
        deliverables: [
          'AI活用ロードマップ(半年〜2年、領域別の自動化マップ付き)',
          '生成AIの業務組込み設計(Slack / 社内ツール / 業務SOP連携)',
          'PoC実装(LTV予測 / 解約予測 / 需要予測 / 異常検知 等)',
          'BigQuery ML / Vertex AI / OpenAI API / Claude API 実装',
          'AIエージェント設計(マーケ・データ運用のオペレーション自律化)',
          'ベンダーRFP作成 & 提案評価支援',
        ],
        process: [
          { step: '01', title: 'ユースケース棚卸し', desc: '事業課題から、AIで解くべき問題と人が握り続けるべき問題を切り分け(2週間)' },
          { step: '02', title: '小さくPoC', desc: '1ユースケースを4〜6週間で実装、定量で効果検証' },
          { step: '03', title: '本番運用化', desc: '監視・再学習・例外処理を含む運用設計、SOP化(4〜8週間)' },
          { step: '04', title: '横展開 & 内製化', desc: '他領域(ガバナンス・アナリティクス・アドテク・MA)に展開、社内チームに知見移転' },
        ],
        forWho: [
          'AIを「触ったことがある」から「事業に効かせる」に進めたい組織',
          'PoCで終わらせず本番運用したい組織',
          'AI内製チームを育てたい組織',
          'AIで意思決定とオペレーションを根本から再設計したい組織',
        ],
      },
      {
        id: '02',
        slug: 'governance',
        label: 'Governance',
        title: 'データガバナンス & 基盤設計',
        summary: 'AIに正しいデータを食わせるための、定義・責任・品質・ライフサイクルの設計。AI時代のガバナンスは「人のため」だけでなく「モデルのため」に設計する必要があります。',
        problems: [
          '部署ごとに数値の定義がバラバラで、AIに渡せるデータがない',
          'GA4・広告レポート・社内DWHでKPIが一致せず、生成AIに集計を任せられない',
          '個人情報・同意管理(CMP / 改正電通法)への対応が止まっている',
          'データ基盤を作ったが、AIで活用する設計が抜けている',
        ],
        deliverables: [
          'AI時代のデータ定義書(メトリック・ディメンション・粒度・LLM向け説明)',
          'データガバナンス規程(責任分担・承認フロー・AI入力可否)',
          '同意管理・プライバシー対応設計(CMP / Consent Mode v2)',
          'データ品質モニタリング設計(dbt / BigQuery)',
          'AI入力前提のメタデータ整備(セマンティックレイヤー設計)',
        ],
        process: [
          { step: '01', title: '現状ヒアリング', desc: '関係部署 5〜10名へのインタビューと既存ドキュメント精査(2週間)' },
          { step: '02', title: 'AI活用想定での課題整理', desc: 'どこにAIを入れるかを起点に、ガバナンス課題の優先順位付け(1週間)' },
          { step: '03', title: '規程・設計書の作成', desc: '定義書・規程・運用フローを起案、関係者レビュー(3〜6週間)' },
          { step: '04', title: '実装支援 & 浸透', desc: 'GA4 / GTM / dbt / セマンティックレイヤー 実装を伴走(4〜12週間)' },
        ],
        forWho: ['年商10億〜500億規模の事業会社', 'CDP・DWH 導入検討中の組織', 'AI活用に向けデータ基盤を整備したい組織'],
      },
      {
        id: '03',
        slug: 'analytics',
        label: 'Analytics',
        title: 'WEBアナリティクス & GA4移行',
        summary: 'GA4・GTM・sGTM・BigQuery・Looker Studio を「人が読む」だけでなく「AIが読み、AIが提案する」前提で設計します。',
        problems: [
          'GA4に移行したが、UA時代のレポートが再現できない',
          'イベント設計が場当たり的で、AIに渡せる構造データになっていない',
          'sGTM(サーバーサイドGTM)に興味があるが、判断材料がない',
          'Looker Studioダッシュボードが「眺めるだけ」で、AIに洞察を語らせていない',
        ],
        deliverables: [
          'GA4計測設計書(カスタムイベント・ディメンション設計)',
          'GTMコンテナ実装(クライアント / サーバーサイド)',
          'BigQueryエクスポート設計 & SQLクエリ集',
          'Looker Studioダッシュボード + 生成AIによる定期レポート自動化',
          'AI入力前提のイベント命名規則 / データレイヤー仕様書',
        ],
        process: [
          { step: '01', title: '事業KPIとユーザー行動の整理', desc: '何を測ると意思決定に効くかから逆算(1〜2週間)' },
          { step: '02', title: '計測設計', desc: 'イベント・パラメータ・コンバージョン設計(2〜3週間)' },
          { step: '03', title: 'GTM / sGTM 実装', desc: 'タグ・トリガー・変数の構築、QAテスト(3〜6週間)' },
          { step: '04', title: '可視化 & AI連携', desc: 'BigQuery / Looker Studio 構築、生成AIによる週次レポート自動化(2〜4週間)' },
        ],
        forWho: ['UA → GA4 移行を完遂したい組織', 'sGTM 採用を検討中のEC・SaaS', 'BigQuery + AIで自由分析したい組織'],
      },
      {
        id: '04',
        slug: 'adtech',
        label: 'AdTech',
        title: '広告運用 & アドテク戦略',
        summary: 'Cookieless時代の計測アーキテクチャをAI前提で設計し、入札・クリエイティブ・効果検証をAIで回します。',
        problems: [
          'Cookie規制下で広告効果が読めなくなってきた',
          '代理店レポートを鵜呑みにせず、自社で検証したい',
          'Conversion API / Enhanced Conversions の実装が止まっている',
          'MMM(マーケミックスモデリング)やIncrementality計測をAIで回したい',
          '生成AIでクリエイティブ・コピーを大量生成→検証する仕組みを作りたい',
        ],
        deliverables: [
          '広告計測アーキテクチャ設計(Cookieless 前提)',
          'Conversion API / Enhanced Conversions 実装',
          '代理店レポート監査 & 媒体直接データとの突合',
          'MMM / Incrementality のAI実装',
          '生成AIクリエイティブパイプライン(コピー・画像・動画)',
        ],
        process: [
          { step: '01', title: '現状計測の監査', desc: '媒体・GTM・サーバー側の計測経路を可視化(2週間)' },
          { step: '02', title: 'Cookieless設計', desc: 'sGTM / CAPI / Consent Mode の組み合わせを設計(2〜3週間)' },
          { step: '03', title: '実装 & 検証', desc: '段階的に実装、AIで効果検証を自動化(4〜8週間)' },
          { step: '04', title: '運用知見の社内化', desc: '代理店との分担再設計、AI生成クリエイティブの内製化支援(継続)' },
        ],
        forWho: ['月間広告費500万〜1億規模の事業会社', '代理店をセカンドオピニオン的に使いたい組織', 'AIで広告クリエイティブを内製したい組織'],
      },
      {
        id: '05',
        slug: 'lifecycle',
        label: 'MA・CRM',
        title: 'ライフサイクル & グロース',
        summary: '獲得後の顧客行動を継続的に計測し、AIで配信タイミング・コンテンツ・チャネルを自律的に最適化します。',
        problems: [
          'MA・CRMツールは導入したが、配信シナリオが固定化している',
          '顧客セグメントが「アクティブ / 非アクティブ」程度しかない',
          'LTVを計算しているが、施策に紐づけられていない',
          'AIで「次に誰に・何を・いつ送るか」を自動最適化したい',
          'プロダクト・マーケ・CSのデータが分断されている',
        ],
        deliverables: [
          'カスタマージャーニー & イベントマップ',
          'セグメンテーション設計(行動 × 属性 × 価値 × 予測スコア)',
          'AI最適化シナリオ設計(Next Best Action / Send Time Optimization)',
          'LTV / 解約予測モデル + ダッシュボード',
          'プロダクト × マーケ統合計測 + AIインサイト配信',
        ],
        process: [
          { step: '01', title: '現状顧客理解', desc: '既存データから顧客フェーズを定義、ボトルネック特定(2〜3週間)' },
          { step: '02', title: 'AI最適化シナリオ設計', desc: '優先3〜5シナリオを予測モデルとセットで設計(2週間)' },
          { step: '03', title: 'MA / CDP / AI実装', desc: 'シナリオ実装・配信テスト・AI判定の組込み(4〜8週間)' },
          { step: '04', title: '改善ループ確立', desc: 'AIモニタリングと月次改善会議の運用化(継続)' },
        ],
        forWho: ['SaaS / EC / サブスク事業者', 'MAを導入済みだが効果が頭打ちの組織', 'AI予測ベースの経営に切り替えたい組織'],
      },
    ],
  },

  engagements: {
    title: '4つの契約形態から、\n選べます。',
    items: [
      {
        title: 'AI Audit',
        description: '2〜4週間で「AI活用の現在地」と「優先すべきAI施策」を診断し、レポートとして納品します。',
        price: '¥40万〜¥100万',
      },
      {
        title: 'Project',
        description: '課題が特定済みのチームに、AI活用の設計から実装・運用化まで踏み込んで伴走します。',
        price: '¥100万〜¥600万',
      },
      {
        title: 'AI Advisor',
        description: '月額固定で「いつでも相談できるAI参謀」として、戦略判断・ツール選定・実装レビューを担います。',
        price: '¥25万〜¥50万/月',
        highlight: true,
      },
      {
        title: 'Fractional',
        description: 'Head of AI / Data / Marketing として、期間限定で週1〜2日コミットします。',
        price: '個別見積もり',
      },
    ],
  },

  contact: {
    title: 'Contact',
    heading: 'まずは、AI活用の課題を\n聞かせてください。',
    intro: '初回30分の壁打ちは無料です。\n「AIで何かやりたいが、何から始めるか分からない」段階のご相談も歓迎します。',
    email: 'info@ambit.go2020.tokyo',
    responseTime: '原則 2 営業日以内に返信します。',
    hubspot: {
      portalId: '246287741',
      formGuid: '52f5a49b-261d-4ea8-bf75-9fe685b414eb',
    },
    methods: [
      {
        label: 'Email',
        value: 'info@ambit.go2020.tokyo',
        href: 'mailto:info@ambit.go2020.tokyo',
        note: '最も確実な連絡手段です',
      },
    ],
    fields: [
      { name: 'company', label: '会社名・組織名', required: true, type: 'text' },
      { name: 'name', label: 'お名前', required: true, type: 'text' },
      { name: 'email', label: 'メールアドレス', required: true, type: 'email' },
      { name: 'role', label: 'ご担当領域', required: false, type: 'text', placeholder: '例：マーケティング責任者 / データ基盤担当 / AI推進担当' },
      { name: 'budget', label: 'ご予算感(任意)', required: false, type: 'select', options: ['AI Audit(〜¥100万)', 'Project(¥100万〜¥600万)', 'AI Advisor(¥25万〜¥50万/月)', 'Fractional(要相談)', 'まだ決まっていない'] },
      { name: 'message', label: 'ご相談内容', required: true, type: 'textarea', placeholder: '現状のAI活用状況、聞きたいこと、検討しているサービスなど' },
    ],
  },
};
