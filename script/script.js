

window.onload = () => {

    let animation_star = [];
    for(let i = 0; i<=100;i++){
        var star = document.createElement("div");
        star.classList.add('star');    
        animation_star.push(star); 
        let width = Math.ceil(Math.random()*5);
        let top = Math.ceil(Math.random()*screen.height-140);
        let left = Math.ceil(Math.random()*screen.width-40);
        star.style.cssText = `width:${width}px;height:${width}px;top:${top}px;left:${left}px`;
        container.appendChild(star);
    }

}


