/* 八乙女さきや 公式サイト v1
   小さな遊び「カニタッチ」だけを担当する。
   このスクリプトがなくても、主導線と全情報はそのまま使える。 */
(function () {
  "use strict";

  var button = document.getElementById("crabButton");
  if (!button) return;

  var countEl = document.getElementById("crabCount");
  var metersEl = document.getElementById("crabMeters");
  var messageEl = document.getElementById("crabMessage");

  var count = 0;
  var meters = 0;

  var messages = [
    "とんだ！",
    "まだまだ、これから。",
    "カニ、加速中。",
    "いい飛びっぷり。",
    "がっしゃーん！",
    "園児さんたちが見ている。",
    "その調子で本番へ。"
  ];

  button.addEventListener("click", function () {
    count += 1;
    meters += 1.2 + Math.random() * 8.7;

    countEl.textContent = String(count);
    metersEl.textContent = meters.toFixed(1);
    messageEl.textContent = messages[(count - 1) % messages.length];

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      button.classList.remove("hop");
      /* アニメーションを再発火させるための再フロー */
      void button.offsetWidth;
      button.classList.add("hop");
    }
  });
})();
