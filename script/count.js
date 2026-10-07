const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  const target = Number(counter.dataset.count);

  let num = 0;

  const timer = setInterval(() => {
    num += Math.ceil(target / 100);

    if (num >= target) {
      num = target;
      clearInterval(timer);
    }

    counter.textContent = num;
  }, 20);
});

/* 
chat GTP를 이용한 카운터 애니메이션

<span class="count" data-count="500"></span>
<span class="count" data-count="130"></span>
<span class="count" data-count="7"></span>
<span class="count" data-count="200"></span>

0부터  data-count 속성 값까지 증가하는 숫자가 span에 애니메이션으로 표시되게 javascript로 짜줘

*/