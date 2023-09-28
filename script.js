let isEliminated = true;
let imageInterval;

function main() {
    const imgWrapper = document.getElementById('intruder');
    const img = document.getElementById('intruder-img');

    setInterval(() => {
        if (isEliminated) {
            runInvasion(imgWrapper, img);
        }
    }, 5000);
}

function runInvasion(imgWrapper, img) {
    spawn(imgWrapper, img);
    let scale = 1;

    imgWrapper.addEventListener('click', () => {
        imgWrapper.style.display = 'none';
        isEliminated = true;
        clearInterval(imageInterval);
    })

   imageInterval = setInterval(() => {
        scale += 0.3;
        img.style.transform = 'scale(' + scale + ')';
    }, 300);
}

function spawn(imgWrapper, img) {
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;

    const elemW = imgWrapper.clientWidth;
    const elemH = imgWrapper.clientHeight;

    // keep upper left corner in sight
    const posX = Math.random() * (windowW - elemW);
    const posY = Math.random() * (windowH - elemH);

    // spawn wrapper
    img.style.height = '20px'
    img.style.transform = 'scale(1)';
    imgWrapper.style.left = posX + 'px';
    imgWrapper.style.top = posY + 'px';
    imgWrapper.style.display = 'block';
    isEliminated = false;
}