const btn = document.querySelector("button");
const h1el = document.querySelector("h1");
const background = document.querySelector("section");

btn.addEventListener("click", ()=>{
 let color = "#";
 color += Math.random().toString(16).slice(2,8);
 background.style.backgroundColor= color;
 h1el.innerText ="Code color: " + color;
})