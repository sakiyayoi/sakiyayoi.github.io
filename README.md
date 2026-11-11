# 八乙女さきや 公式サイト v1

GitHub Pages での公開をゴールにした、ビルドステップなしの静的サイトです。
このフォルダの中身がそのままサイト本体です（公開作業はまだ行っていません）。

## ファイル構成

```
official-site/
├─ index.html            トップページ（1ページ構成）
├─ guidelines.html       ガイドライン（ファンアート／切り抜き／生成AI）
├─ 404.html              ページが見つからないときの表示
├─ README.md             このファイル
└─ assets/
   ├─ css/style.css      全ページ共通のスタイル
   ├─ js/main.js         小さな遊び「カニタッチ」だけのスクリプト
   ├─ img/
   │  ├─ kv-sp.webp      ファーストビュー用キービジュアル（スマホ・縦）
   │  ├─ kv-wide.webp    ファーストビュー用キービジュアル（PC・横）
   │  ├─ og.jpg          OGP／SNS共有カード用（1200×630）
   │  ├─ crab.webp       カニのイラスト（小さな遊び・404用）
   │  ├─ favicon-512.png / favicon-192.png / apple-touch-icon.png
   └─ audio/
      └─ sobaniite-chorus.mp3  楽曲サンプル「そばにいて」サビ抜粋（Suno音源）
```

- パスはすべて相対パスです。ユーザーサイト直下でも、プロジェクトページのサブパスでも動きます。
  - 例外：OGP の `og:url` と `og:image` だけは、共有カードの仕様上、公開先の絶対URL（`https://sakiyayoi.github.io/`）で書いてあります。別のURLで公開する場合は、この2か所を公開先に合わせて書き換えてください（index.html と guidelines.html の `<head>` 内）。
- スマホ幅（390px）で崩れない構成にし、見出し・本文はすべてテキストで置いてあります（画像だけに情報を載せていません）。
- 動画は埋め込まず、YouTube へのリンクだけにしています（ページを軽く保つため）。

## 公開手順（GitHub Pages）

前提：GitHub アカウント `sakiyayoi` は既に GitHub Pages を運用中です（カニ飛ばし試遊版）。

1. **公開リポジトリを作成する**
   - ユーザーサイトとして公開する場合：リポジトリ名 `sakiyayoi.github.io`（公開／Public）を作成します。これが `https://sakiyayoi.github.io/` になります。
   - プロジェクトサイトとして先に試す場合：任意の名前（例 `sakiya-official`）の公開リポジトリを作成します。URL は `https://sakiyayoi.github.io/sakiya-official/` の形になります（相対パスなのでそのまま動きます。ただし OGP の絶対URL 2か所の書き換えが必要です）。
2. **このフォルダの中身を push する**（README.md も含めてよい）
   ```
   git init
   git add .
   git commit -m "公式サイト v1"
   git branch -M main
   git remote add origin https://github.com/sakiyayoi/<リポジトリ名>.git
   git push -u origin main
   ```
3. **Pages を有効化する**
   - リポジトリの Settings → Pages → Build and deployment → Source: 「Deploy from a branch」、Branch: `main` / `/ (root)` を選んで保存します。
4. **URL を確認する**
   - 数分後に `https://sakiyayoi.github.io/`（またはプロジェクトURL）を開き、表示・リンク・スマホ幅の見え方を確認します。
   - X や Discord に URL を貼って、共有カードに本人の絵（og.jpg）が出るかも確認します。

## 未確認・申し送り

- ローカル環境にヘッドレスブラウザがなく、**スクリーンショットでの目視確認は未実施**です。公開前にスマホ実機（またはブラウザのデバイス表示）で第一画面を確認してください。
- お仕事のご相談の窓口URLは未確定のため、フッターは「準備中」の文案になっています。Google フォーム等のURLが決まったら、index.html のフッターを差し替えてください。
- ガイドラインの「生成AIについて」の条項文は v1 の文案です。禁止／許可の最終判断は本人の確認を取ってから確定してください。
- 原声ボイスは「準備中」表示のみです。本人の実声クリップが用意できたら、assets/audio に置いて index.html のボイス欄にプレイヤーを追加してください（楽曲サンプルとは分離表示を維持）。
