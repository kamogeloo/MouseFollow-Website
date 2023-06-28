
let circle = document.getElementById("circleFollow");

const onMousemove = (e) =>{
    
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';

}
 
    

document.addEventListener('mousemove', onMousemove);

const hover = (e) =>{
    
}

document.addEventListener('mouseover', hover);