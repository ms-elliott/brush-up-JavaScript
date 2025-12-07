const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('inview');
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        } else {
            console.log('out view');
        }
    });

    // alert('intersecting');
}

// IntersectionObserverのオプション設定
const options = {
    root: null, // 交差対象としたい親要素を指定
    rootMargin: "-300px 0px 0px 0px",   // 先の場合は画面上部から子要素が入ってきて、300pxを通過する際に子要素が変化する (※0を指定する場合でもかならず "px＂を付ける)
    threshold: 1   // 1を指定すると、子要素の上部が交差する際に変化する。0の場合は子要素の下部との交差が変化基準。
                    // [0, 0.5, 1] のような配列でしていすることも可能。　この場合は、0,0.5,1のそれぞれが交差する際にコールバック関数が呼び出される
}

const io = new IntersectionObserver(cb);
io.observe(child);
