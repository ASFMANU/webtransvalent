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

/*let headerSup = document.querySelectorAll('#headerSup');*/
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
	let ubicacion_Actual = window.pageYOffset;
	if (ubicacionPrincipal<=116){//412
		document.getElementById('headerSup').style.display = 'block';
		document.getElementById('imgMenu').style.display = 'none';
		/*headerSup.style.top = '0';*/
	}else{
		/*headerSup.style.top = '-100px';*/
		document.getElementById('headerSup').style.display = 'none';
		document.getElementById('imgMenu').style.display = 'block';
		document.getElementById('imgMenu').style.margin = '15px';
	}
	ubicacionPrincipal=ubicacion_Actual;

}