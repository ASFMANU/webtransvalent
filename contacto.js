const $form = document.querySelector('#formulario');
const $btnMail = document.querySelector('#Mimailto');	
$form.addEventListener('submit',enviar);

function enviar(event){
event.preventDefault();
const form = new FormData(this);
$btnMail.setAttribute('href',`mailto:operadorlogisticotransvalent@gmail.com?subject=${form.get('nombre')} ${form.get('apellido')} ${form.get('telefono')} ${form.get('correo')}&body=${form.get('msge')}`);
$btnMail.click();	
}