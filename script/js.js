const $body = document.querySelector('body')
const mob_btn = document.querySelector('.mob_btn')


// 스크롤이 되면 헤더에 배경색이 들어감
window.addEventListener('scroll',()=>{
  let scroll = window.scrollY
  // console.log(scroll)
  /* 
  if(scroll > 100){
    $body.classList.add('scrolling')
  } else { 
    $body.classList.remove('scrolling')
  } 
  */
  $body.classList.toggle('scrolling', scroll > 100)  
})

// 햄버거 버튼을 클릭
mob_btn.addEventListener('click', (e)=>{
  e.preventDefault()
  $body.classList.toggle('mOpen')
})


// sec2 슬라이더
const swiper_card = new Swiper('.swiper_cards', {  
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,

  breakpoints: {
    0: {
      enabled: true
    },
    1440: {
      enabled: false
    }
  }

  // Navigation arrows
  /* navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, */

});


// review 슬라이더
const swiper_review = new Swiper('.swiper_reviews', {  
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }  
});