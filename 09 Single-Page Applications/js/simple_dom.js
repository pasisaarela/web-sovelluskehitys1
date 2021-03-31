//console.log('page loaded');

console.log(document);

document.querySelector('#userForm').onkeyup = function() {

	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);

	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var pass = document.querySelector('#userForm input[type="password"]');
	var email= document.querySelector('#userForm input[type="email"]');

	document.querySelector('#summary h1').innerHTML = ' nimi: ' + name.value + ' - password: ' + pass.value + ' - email: ' + email.value;

	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = ' nimi: ' + name.value + '<br> password: ' + pass.value + '<br> email: ' + email.value;

}



