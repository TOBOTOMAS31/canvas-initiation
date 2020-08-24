let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
// let img = new Image();
// img.src = 'https://source.unsplash.com/random';

/** Function dégradée couleur */
// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6; j++) {
//         ctx.fillStyle = `rgb(${255 - 46.5 * i}, ${255 - 46.5 * j}, ${42.5 * i})`
//         ctx.fillRect(j * 25, i * 25, 25, 25)
//     }
// }

/** Changement dimensions canvas fixe (non responsive) */
// canvas.setAttribute('width', '500');
// canvas.setAttribute('height', '300');

/** Changement dimensions canvas responsive */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    // ctx.drawImage(img, 50, 50);
})

/** Rectangle */
// ctx.fillRect(50, 50, 100, 50);

/** Carré */
// ctx.fillRect(50, 50, 50, 50);

/** Triangle */
// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.lineTo(100, 25);
// ctx.closePath();
// ctx.stroke();

/** Cercle */
// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, 2 * Math.PI);
// ctx.fillStyle = 'red'
// ctx.fill();

/** Text */
// ctx.font = '40px serif';
// ctx.strokeText('Hello world', 40, 80);
// ctx.fillText('Hello world', 40, 80);

/** variables pour RAF & click */
// let x = 200;
// let y = 200;
// let v = 5;

/** variables pour Système solaire */
let sun = new Image();
let moon = new Image();
let earth = new Image();
sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';

const init = () => {
    /** save & restore */
    // ctx.fillRect(0, 0, 150, 150);
    // ctx.save()

    // ctx.fillStyle = 'red';
    // ctx.fillRect(15, 15, 120, 120);
    // ctx.save();

    // ctx.fillStyle = 'blue';
    // ctx.fillRect(30, 30, 90, 90);

    // ctx.restore();
    // ctx.fillRect(45, 45, 60, 60);

    /** Translate */
    // ctx.translate(50, 50);
    // ctx.fillRect(0, 0, 100, 150);
    // ctx.fillRect(100, 100, 100, 150);

    /** Rotate */
    // ctx.beginPath();
    // ctx.arc(150, 150, 1, 0, 2 * Math.PI);
    // ctx.stroke();

    // ctx.translate(150, 150);
    // ctx.rotate(10 * Math.PI / 180);
    // ctx.fillRect(50, 50, 100, 50);

    /** Image */
    // img.addEventListener('load', () => {
    //     ctx.drawImage(img, 50, 50);
    // })

    /** RequestAnimationFrame & click event */
    // requestAnimationFrame(init);
    // ctx.clearRect(0, 0, innerWidth, innerHeight);
    // ctx.beginPath();
    // ctx.arc(x, y, 60, 0, Math.PI * 2);
    // ctx.strokeStyle = 'crimson';
    // ctx.stroke();

    // canvas.addEventListener('click', e => {
    //     x = e.clientX;
    //     y = e.clientY;
    // })

    /** Système solaire */
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300);

    //dessin orbite terre
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    ctx.arc(150, 150, 105, 0, Math.PI * 2);
    ctx.stroke();
    ctx.save();
    ctx.translate(150,150);

    let time = new Date();
    ctx.rotate(((2 * Math.PI / 60) * time.getSeconds()) + ((2 * Math.PI/60000 * time.getMilliseconds())));

    //mettre la terre sur orbite 
    ctx.translate(105,0);
    ctx.drawImage(earth, -12, -12);

    //lune
    ctx.rotate(((2 * Math.PI / 6) * time.getSeconds()) + ((2 * Math.PI/6000 * time.getMilliseconds())));
    ctx.translate(0,28);
    ctx.drawImage(moon, -3.5, -3.5);

    //restore valeur defaut
    ctx.restore();

    //dessin du soleil
    ctx.drawImage(sun, 0, 0);
    requestAnimationFrame(init);

}
init();