document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('zip').addEventListener('blur', validateZip);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName() {
	const name = document.getElementById('name');
	const reg = /^[a-zA-Z]{2,10}$/;

	if (!reg.test(name.value)) {
		name.classList.add('is-invalid');
	} else {
		name.classList.remove('is-invalid');
	}
}

function validateZip() {
	const zip = document.getElementById('zip');
	const reg = /^[0-9]{5}(-[0-9]{4})?$/;

	if (!reg.test(zip.value)) {
		zip.classList.add('is-invalid');
	} else {
		zip.classList.remove('is-invalid');
	}
}

function validateEmail() {
	const email = document.getElementById('email');
	const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if (!reg.test(email.value)) {
		email.classList.add('is-invalid');
	} else {
		email.classList.remove('is-invalid');
	}
}

function validatePhone() {
	const phone = document.getElementById('phone');
	const reg = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

	if (!reg.test(phone.value)) {
		phone.classList.add('is-invalid');
	} else {
		phone.classList.remove('is-invalid');
	}
}