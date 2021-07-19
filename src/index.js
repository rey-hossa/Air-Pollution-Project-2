
import './style.css';

import image from '../images/wallpaper.jpg';


const wallpaper = document.createElement('img');
wallpaper.id = "wallpaper";
wallpaper.src = image;
document.body.appendChild(wallpaper);


const hello = document.createElement('div');
hello.innerHTML = 'Hello WebPack';
hello.classList.add('hello');
document.body.appendChild(hello);
