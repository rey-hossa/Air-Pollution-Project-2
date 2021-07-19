
import './style.css';

/*
const wallpaper = document.createElement('img');
wallpaper.id = "wallpaper";
wallpaper.src = "../images/wallpaper.jpg";
document.body.appendChild(wallpaper);
*/

const hello = document.createElement('div');
hello.innerHTML = 'Hello Dist';
hello.classList.add('hello');
document.body.appendChild(hello);
