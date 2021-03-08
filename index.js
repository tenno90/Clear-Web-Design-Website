//dropdown function for the navbar.
function hide() {
	var e = document.getElementById("dropDown");
	"none" === e.style.display ? e.style.display = "block" : e.style.display = "none"
}

//how to make a working clock.
// function clock(){
//   let e=new Date,t=e.getHours(),
//   c=e.getMinutes(),
//   n=e.getSeconds(),
//   l="AM";0==t&&(t=12),
//   t>12&&(t-=12,
//   l="PM");
//   let o=`${t=t<10?`0${t}`:t}:${c=c<10?`0${c}`:c}:${n=n<10?`0${n}`:n} ${l}`;
//   setInterval(clock,1e3),document.getElementById("clock").innerText=o
// }
//   clock();


//allows section to scroll onto screen. but only 
//for one section. will need to understand
//JS better to really make it work. 
// window.onload = function(){
// 	var effect = document.querySelector(".quote1");
		
// 		window.addEventListener('scroll', scrollEffect);
	
// 		function scrollEffect(){
// 			if(window.scrollY>=200){
// 				effect.style.opacity = '1';
// 				effect.style.transform = 'translatex(0px)';
// 				effect.style.transition = '1s ease-out';
// 			}else{
// 				effect.style.opacity ='0';
// 				effect.style.transform = 'translatex(600px)'
// 			}
// 		}
	  
// 		scrollEffect();
	
// 	};
