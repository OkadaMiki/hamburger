// .hamburger を押すと active というクラスを追加
// active がついた部分を transform で変形
//  ↓ hamburger に active が追加されると × に変形
//  ↓ slide-menu に active が追加されるとメニューを出す
//  ↓ hamburger & slide-menu の active が削除されると元に戻る
// ☓　になった .humburger を押すと active というクラスを削除

console.log("いえい");
const hamburger = document.querySelector(".hamburger");
const hambact = hamburger.classList;
const slideact = document.querySelector(".slide").classList;

hamburger.addEventListener("click", () => {
    hambact.toggle("active");
    slideact.toggle("active");
});
