var left = document.querySelector('.left');
var right = document.querySelector('.right');
var banner = document.querySelector('.banner');

left.addEventListener('mouseenter', ()=>banner.classList.add('hover-left'));
left.addEventListener('mouseleave', ()=>banner.classList.remove('hover-left'));

right.addEventListener('mouseenter', ()=>banner.classList.add('hover-right'));
right.addEventListener('mouseleave', ()=>banner.classList.remove('hover-right'));