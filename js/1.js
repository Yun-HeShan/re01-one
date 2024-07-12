// JavaScript Document
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // 滚动时透明度变为50%
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // 滚动回到顶部时恢复为纯黑色
    }
  });