
window.addEventListener('mousedown', () => {
     var x=  document.getElementById("songs");
         x.play();
         
});
function start(){
    var cl = document.getElementsByClassName("btn");
    cl[0].classList.remove("btn");
    var im = document.getElementsByTagName("img");
    im[0].parentNode.removeChild(im[0]);
    
    var mn = document.getElementsByClassName("container");
    mn[0].classList.add("cont");
    mn[0].classList.remove("container");
}







     /*const music = new Audio('1899.mp3');*/
     
     
 
    /*   var x=  document.getElementById("songs");
       x.autoplay = true;
       x.load(); */

 /*     let more = document.querySelector('.cont');
      let adi = document.getElementsByTagName('audio');
      more.addEventListener('click', () =>{
          ad[0].play();
      })
       

*/