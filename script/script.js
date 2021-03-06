const html = 90;
const css3 = 86;
const bootstrap = 86;
const javascript = 88;
const jquery = 80;
const angular = 82;

window.sr = ScrollReveal();

sr.reveal('.container__home',{
    duration: 2000,
});

sr.reveal('.description-ability',{
    duration: 2000,
    origin:'right',
    distance:'-40%',
    delay:1000
});

sr.reveal('.img-ability',{
    duration: 2000,
    origin:'left',
    distance:'-40%',
    delay:1000

});

sr.reveal('.icon-ability',{
    duration: 2000,
    origin:'top',
    distance:'-40%',
    delay:300
});


sr.reveal('.experience',{
    duration: 2000,
    delay:1000
});




window.onload = () => {

    animaStar();
    if(window.screen.availWidth <= 1226){      
        description_about.innerHTML = "Me encanta la programación, actualmente trabajo como desarrollador web y estoy aprendiendo constantemente nuevas tecnologías. Tengo experiencia en pruebas funcionales.";
    }

    
}

    icon_burger.addEventListener("click",()=>{
        
        menu_alter.style.cssText = `left:0px`;
    
    }, false);


    close_menu.addEventListener("click",()=>{
        menu_alter.style.cssText = `left:-50%`;
    }, false);




const animaStar = ()=>{


    let animation_star = [];
    for(let i = 0; i<=400;i++){
        var star = document.createElement("div");
        star.classList.add('star');    
        animation_star.push(star); 
        let width =0;
        if(window.screen.availWidth <= 700){  
            width = Math.ceil(Math.random()*2);
        }else{
            width = Math.ceil(Math.random()*5);
        }
       
        let top = 0;
        let left = 0;
        top = Math.ceil(Math.random()*100);
        left = Math.ceil(Math.random()*96);        
        star.style.cssText = `width:${width}px;height:${width}px;top:${top}vh;left:${left}vw; z-index:0`;
        container.appendChild(star);
    }

    for(let i = 0; i<=50;i++){  
        animation_star[i].classList.add('shines-star');  
 
    }

    setInterval(()=>{
        const positionTop = Math.ceil(Math.random()*50);
        leaks.style.cssText = `top:${positionTop}%;transform: rotate(20deg); animation: leaksStar 1.5s linear 1 normal;`;
        
        setTimeout(()=>{
            leaks.style.cssText = `animation: none`;
        },2000)
    },7000);
}