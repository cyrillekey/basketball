$(document).ready(function () {
	var menu=$('.hamburger_menu')
	var menuactive=false;
	var hamburgerClose=$('.hamburger_close');
	var fsOverlay=$('.fs_menu_overlay');
	var hamburger=$('.hamburger_container')
	initMenu();

	function initMenu(){
		if(hamburger.length){
			hamburger.on('click',function(){
				if(!menuactive){
					openMenu();
				}
			});
		}
		if(fsOverlay.length){
			fsOverlay.on('click',function(){
				if(menuactive){
					closeMenu();
				}
			});
		}
		if(hamburgerClose.length){
			hamburgerClose.on('click',function(e){
				e.preventDefault();
				if(!menuactive){
					closeMenu();
				}
			});
		}
		if($('.menu_item').length){
			var items=document.getElementsByClassName('menu_item');
			var i;
			for(i=0;i<items.length;i++){
				if(items[i].classList.contains("has-children")){
					items[i].onclick =function () {
						this.classList.toggle("active");
						var panel=this.children[1];
						if(panel.style.maxHeight){
							panel.style.maxHeight=null;
						}else{
							panel.style.maxHeight=panel.scrollHeight+"px"
						}
					}
				}
			}
		}
	}
	function openMenu() {
		menu.addClass("active");
		fsOverlay.css("pointer-events","auto")
		menuactive=true;

	  }
	  function closeMenu() {
		menu.removeClass("active");
		fsOverlay.css("pointer-events","none")
		menuactive=false;

	  }
});
