let question = document.querySelectorAll('.question');
let btnMas = document.querySelectorAll('.question .more');
let answer = document.querySelectorAll('.answer');
let parrafo = document.querySelectorAll('.answer p');


for (let i = 0; i < btnMas.length; i++) {
	
	/*let altoParrafo=parrafo[i].clientHeight;*/
	let switchC=0;

	btnMas[i].addEventListener('click', ()=>{
		if (switchC == 0) {
				
				/*answer[i].style.height = altoParrafo + 'px';*/
				answer[i].style.height = 'auto';
				question[i].style.marginBottom='10px';
				btnMas[i].innerHTML = '<i>-</i>';
				switchC++;
		
		}else if (switchC==1) {
		
				answer[i].style.height = '0';
				question[i].style.marginBottom='0';
				btnMas[i].innerHTML = '<i>+</i>';
				switchC--;
		} 
	})
}