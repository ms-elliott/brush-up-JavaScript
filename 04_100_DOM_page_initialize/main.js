const dcl = document.querySelector('.dcl');
const load = document.querySelector('.load');

// コンテンツが表示される前でも、実行される
// HTMLで対象のオブジェクトより先に記述(JSファイルの呼び出し)があっても、エラーにならない
// document or windowに対して登録できる
document.addEventListener("DOMContentLoaded", function() {
    dcl.classList.add('done');
});

// コンテンツが表示されるまで、実行されない
// HTMLで対象のオブジェクトより先に記述(JSファイルの呼び出し)があると、エラーになる
// windowに対して登録できる
window.addEventListener("load", function() {
    load.classList.add('done');
})