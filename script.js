let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window.onscroll=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

    if(window.scrollY>250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

    if(window.scrollY>250){
      scrollTop.style.display='initial';
  }else{
    scrollTop.style.display='none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.home-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
    });
});


let countDate = new Date('july 27, 2024 00:00:00').getTime();

  function countDown() {
    let now = new Date().getTime();
    gap = countDate-now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute *60;
    let day = hour *24;

    let d =Math.floor(gap/(day));
    let h =Math.floor((gap%(day)) / (hour));
    let m =Math.floor((gap%(hour)) / (minute));
    let s =Math.floor((gap%(minute)) / (second));

    document.getElementById('days').innerText=d;
    document.getElementById('hour').innerText=h;
    document.getElementById('minute').innerText=m;
    document.getElementById('seconds').innerText=s;

}
setInterval(function() {
    countDown();
},1000)