const content = document.querySelector('.content');
let currentPos = window.pageYOffset;

const callDistort = () => {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.35;

    content.style.transform = "skewY(" + sp + "deg)";
    currentPos = newPos;

    requestAnimationFrame(callDistort);
}
callDistort();