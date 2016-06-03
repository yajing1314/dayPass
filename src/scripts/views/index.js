var indexTpl=require('../tpl/index.string');
document.body.innerHTML += indexTpl;
var Swiper=require('../lib/swiper-3.3.1.min.js');
	console.log(Swiper);
	var body=document.getElementsByTagName('body')[0]
	body.onload=function(){
		var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    // direction: 'vertical',
	    loop: true,    
	    autoplay:2000,
	    autoplayDisableOnInteraction:false,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
  })
	}
document.body.innerHTML += indexTpl;