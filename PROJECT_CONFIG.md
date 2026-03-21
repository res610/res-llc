# プロジェクト設定メモ

## 基本情報

- **プロジェクト名:** res-llc
- **会社名:** 合同会社RES
- **ドメイン:** res610.com
- **ブランドカラー:** 白(#FFFFFF) / 黒(#000000)
- **作成日:** 2026-03-15
- **テンプレートバージョン:** v1.0

## HPの目的

個人事業主・新規事業者をターゲットに、HP制作+IT経営サポートで信頼を獲得。
将来的に業務効率化ツール開発→基幹システム全般を担う50人規模のIT企業へ成長。

## ページ構成（6ページ）

1. **トップ** — ヒーロー → サービス概要 → 実績 → 代表紹介 → Instagram → 30分無料相談CTA
2. **サービス** (/services/) — HP制作 / IT経営サポートの詳細
3. **実績** (/works/) — 01-eyebrow-okinawa, perchamomo, yoshi-rentacar
4. **パートナー** (/partners/) — 税理士・ビジネスパートナー紹介
5. **会社概要** (/about/) — 会社情報・代表プロフィール・想い
6. **お問い合わせ** (/contact/) — 30分無料相談フォーム + LINE

## SNS連携

- **Instagram:** res_llc.info（Graph API連携）
- **LINE:** @018yvgzk（30分無料相談CTA）

## 変更済みチェックリスト

- [x] `next.config.js` — SITE_DOMAIN 設定
- [x] `tailwind.config.ts` — ブランドカラー設定
- [x] `src/constants.ts` — 会社情報設定
- [x] `package.json` — プロジェクト名変更
- [ ] `src/app/layout.tsx` — メタデータ・JSON-LD 編集
- [ ] `public/` — ファビコン・OG画像配置
- [ ] `.env.local` — GA ID 設定
- [ ] GitHub Pages 設定完了

## テンプレートからの追加変更

- 6ページ構成（テンプレ標準はトップ+FAQ）
- Instagram Graph API連携
- LINE 30分無料相談CTA
- 代表プロフィールセクション（写真は後日追加）
- パートナー紹介ページ
