document.addEventListener("DOMContentLoaded", function(event) {
    var toggleNavStatus = false; 
    const topMenu = document.querySelector(".top-menu").getElementsByTagName("li");

	document.getElementById("toggleNav").addEventListener("click", () => {
		const getMenu = document.querySelector(".nav-menu");
		const getMenuUl = document.querySelector(".nav-menu ul");
		const getMenuLink = document.querySelectorAll(".nav-menu a");
		const getMenuButton = document.querySelector(".toggle");

			if (toggleNavStatus){
		    	getMenuUl.style.display = "none";
				toggleNavStatus = false;
			}else{
				getMenuUl.style.display = "flex";
		    	toggleNavStatus = true;
			}
		
	});

	const scrollToBlock = (fromClick, toBlock) => {
		document.getElementById(fromClick).addEventListener("click", () => {
			document.getElementById(toBlock).scrollIntoView({block: "center", behavior: "smooth"});
		})
 	}

 	scrollToBlock("contact", "contact-me");
 	scrollToBlock("scroll-top", "top");

 	for(let i = 0; i < topMenu.length; i++){
 		let targetId = topMenu[i].innerText.toLowerCase();
 		topMenu[i].addEventListener("click", () => {
			document.getElementById(targetId).scrollIntoView({block: "center", behavior: "smooth"});
		})
	}

	const chooseCat = document.querySelectorAll(".choose-cat");
	const work = document.querySelectorAll(".work");

	for(let i = 0; i < chooseCat.length; i++){
	    chooseCat[i].addEventListener('click', () => {
	       var attrOf = chooseCat[i].getAttribute("href");
	       attrOf = attrOf.substr(1, attrOf.length); 
	       for(let j = 0; j < work.length; j++){
	       		if(work[j].getAttribute("data-cat") == attrOf || attrOf.length == 3){
	       			work[j].style.display = "block";
	       		}else{
	       			work[j].style.display = "none";
	       		}
	       }
	    }, false);
	}
});

window.addEventListener("resize", () => {
	document.querySelector(".top-menu").style = ""
});

window.addEventListener("scroll", () => {
	const colorHead = document.getElementById("header");

	if(window.pageYOffset > 600) {
		colorHead.classList.add("scroll-nav");
	}else{
		colorHead.classList.remove("scroll-nav");
	}
})