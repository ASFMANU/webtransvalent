window.onload = function(){
	$('#onload').fadeOut();
	$('body').removeClass('hidden');
}

function quienes_somos(){
	location.href="quienes_somos.html";
}

function servicios(){
	location.href="servicios.html";
}

function contactos(){
	location.href="contactos.html";
}

let ulList = document.querySelectorAll('#cMenu >ul');
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
	let ubicacion_Actual = window.pageYOffset;
	if (ubicacionPrincipal<=116){
		document.getElementById('headerSup').style.display = 'block';
		document.getElementById('imgMenu').style.display = 'none';
		ulList[0].style.top = '149px';
		
	}else{
		
		document.getElementById('headerSup').style.display = 'none';
		ulList[0].style.top = '63px';
		document.getElementById('imgMenu').style.display = 'block';
		document.getElementById('imgMenu').style.margin = '15px';
	}
	ubicacionPrincipal=ubicacion_Actual;

}