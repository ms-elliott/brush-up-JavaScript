const btn = document.querySelector('#btn');

function hello() {
    this.style.color = 'red';
    console.log(this);
    btn.style.color = 'blue';
};

function changeBgColor() {
    h1.style.background.color = 'green';
}

// 複数登録可
btn.addEventListener('click', hello);
btn.addEventListener('click', changeBgColor);
btn.removeEventListener('click', hello);

// 複数登録不可
btn.onclick = changeBgColor;

// HTML内のbuttonタグ内で onclick="changeBgColor()"を記述し呼び出すこともできるが非推奨。（規模が大きくなるにつれてソース把握しづらくなる為）
