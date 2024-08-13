


	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
		let mode = localStorage.getItem('mode');
			if(mode == 'mode1'){
				document.body.classList.add('drak');
			}else{
				document.body.classList.remove('drak');
			}
		
	
	
	
	let boxIcons = document.querySelector('.iconsNavBar .boxIcons');
	boxIcons.addEventListener('click',()=>{
		boxIcons.classList.toggle('active');
			document.body.classList.toggle('drak');
		if(boxIcons.classList.contains('active')){
			localStorage.setItem('mode','mode1')
		}else{
				localStorage.setItem('mode','mode2')
		}
		
	});
	let iconsMune =document.querySelector('.iconsNavBar .iconsMune');
	iconsMune.addEventListener('click',()=>{
		iconsMune.classList.toggle('active');
		document.querySelector('.muneNavBar').classList.toggle('active');
	});
	let team = document.querySelector('.team');
	team.addEventListener('click',()=>{
		team.classList.toggle('active')
	});
	