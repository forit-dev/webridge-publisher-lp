const mix = require("laravel-mix");
const glob = require("glob");

// リソースルートの設定（空文字で相対パス指定）
mix.setResourceRoot("");

// JavaScriptのコンパイル設定
mix.js("src/js/app.js", "assets/js/app.js") // src/js/app.js をコンパイルし、assets/js/app.js に出力
  .sourceMaps(false) // ソースマップをオフ
  .autoload({ // 自動ロード設定: jQuery を '$' として利用可能にする
    "jquery": ['$', 'window.jQuery']
  });

// Sassファイルの一括処理
glob.sync("src/sass/**/*.scss").map(function(file) {
  // Sassの部分テンプレート（先頭にアンダースコアがあるファイル）はスキップ
  if (file.match("/_")) return;

  // Sassファイルのコンパイルと出力先設定
  const outputPath = 'assets/css'; // CSS出力先をassets/cssディレクトリに設定
  mix.sass(file, outputPath) // Sassファイルをコンパイルして assets/css に出力
    .options({
      processCssUrls: false, // CSS内のURLを処理しない（画像やフォントなどのパスをそのままにする）
      postCss: [
        require("css-mqpacker")(), // メディアクエリをまとめる
        require("css-declaration-sorter")({
          order: "smacss", // CSSプロパティをSMACSSルールに従って並べ替える
        }),
      ],
    });

  // 開発環境での設定（ソースマップ有効化）
  if (!mix.inProduction()) {
    mix
      .webpackConfig({
        devtool: "inline-source-map", // ソースマップの種類を設定（インラインソースマップ）
      })
      .sourceMaps();
  }
});

// ブラウザ同期（ライブリロード）の設定
mix.browserSync({
  server: {
    baseDir: './' // 静的ファイルを提供するディレクトリ
  },
  files: [
    'assets/css/**/*.css', // 監視対象の CSS ファイル
    'assets/js/**/*.js',   // 監視対象の JS ファイル
    '*.html'               // 必要に応じて HTML ファイルも監視
  ]
});