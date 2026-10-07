const leftBtn = document.querySelector('.sec04 .left')
const rightBtn = document.querySelector('.sec04 .right')
const imgs = document.querySelectorAll('.sec04 .row_inner img')

//console.log(imgs)

rightBtn.addEventListener('click', function(e){
  e.preventDefault()
  rightFunc()
})

leftBtn.addEventListener('click', function(e){
  e.preventDefault()
  leftFunc()
})

function rightFunc(){
  // alert('오른쪽 버튼 눌렀어요!!!')
  const activeImg = document.querySelector('.row_inner img.active')
  activeImg.classList.remove('active')

  if(activeImg.nextElementSibling){
    activeImg.nextElementSibling.classList.add('active')
  } else {
    imgs[0].classList.add('active')
  }
}

function leftFunc(){
  const activeImg = document.querySelector('.row_inner img.active')
  activeImg.classList.remove('active')

  if(activeImg.previousElementSibling){
    activeImg.previousElementSibling.classList.add('active')
  } else {
    imgs[imgs.length-1].classList.add('active')
  }
}