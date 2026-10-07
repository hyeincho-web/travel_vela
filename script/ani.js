/*
const s2 = document.querySelector('.sec02')

let test1 = new IntersectionObserver((eee)=>{   // 받아온 매개변수를 배열로 인식함
  if(eee[0].isIntersecting){  //인식했을때
    s2.classList.add('active')
  } else {
    s2.classList.remove('active')
  }
}, {
  rootMargin: '-30% 0px -30% 0px' 
})

test1.observe(s2) 
*/

//let test1 = new IntersectionObserver(콜백함수,옵션)

const section = document.querySelectorAll('section')

let io = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{
    
    if(entry.isIntersecting){
      console.log(entry.target)
      entry.target.classList.add('active')
    }
    else {
      entry.target.classList.remove('active')
    }
  })  
},{
  rootMargin: '-30% 0px -30% 0px'  
})

section.forEach((se)=>{
  io.observe(se)
})
