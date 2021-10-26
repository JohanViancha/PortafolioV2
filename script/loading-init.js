window.onload = () => {
    animaStar();


}

const animaStar = ()=>{

    let animation_star = [];
    for(let i = 0; i<=400;i++){
        var star = document.createElement("div");
        star.classList.add('star');    
        animation_star.push(star); 
        let width = Math.ceil(Math.random()*5);
        let top = 0;
        let left = 0;

        top = Math.ceil(Math.random()*screen.height-120);
        left = Math.ceil(Math.random()*screen.width-10);
        
        star.style.cssText = `width:${width}px;height:${width}px;top:${top}px;left:${left}px; z-index:0`;
        content_heaven.appendChild(star);
    }

    for(let i = 0; i<=50;i++){  
        animation_star[i].classList.add('shines-star');  
 
    }
}