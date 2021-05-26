const orange = document.getElementById('orange');
const div = document.querySelector('nav .links');
const links = document.querySelectorAll('nav .links a');

function menu_slide (event) {
	event.preventDefault();

	if(orange.innerHTML == "Menu"){
		orange.innerHTML = "Close";
		links.forEach((link)=>{
			link.style.animation = 'link_from_left 1s forwards'; 
			link.style.animationDelay = '1s'; 
		})
			div.style.animation = 'div_to_down 1s forwards'; 	
			div.style.visibility = "visible";			
	} else {
		orange.innerHTML = "Menu";		
		links.forEach((link)=>{
			link.style.animation = 'link_to_right 1s forwards'; 
		})		
			div.style.animation = 'div_to_top 1s forwards';		
	}
}

menu.addEventListener('click', menu_slide , 'false');