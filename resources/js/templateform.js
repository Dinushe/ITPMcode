const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const channel = document.getElementById('channel');
const submit = document.querySelector('.submit');
const url = document.getElementById('url');
const cat = document.getElementById('cat');
const own = document.getElementById('own');
const gvt = document.getElementById('gvt');
const region = document.getElementById('region');
const cntry = document.getElementById('cntry');
const res = document.getElementById('res');
const check = document.getElementsByClassName('check');

submit.addEventListener('click', e => {
	e.preventDefault();
	checkInputs();
	
	
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
	const channelValue = channel.value.trim();
	const urlValue = url.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	}else if (!isName(usernameValue)) {
		setErrorFor(username, 'Keep spaces between initials and avoid using numerics');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
    }
    
    if(channelValue === ''){
        setErrorFor(channel, 'Channel cannot be blank');
    }else if(channelValue >= 25){
        setErrorFor(channel,'Channel name limited to 25 characters');
    } else {
        setSuccessFor(channel);
	}
	
	if(urlValue === ''){
        setErrorFor(url, 'Url cannot be blank');
    }else if (!isURL(urlValue)) {
        setErrorFor(url,'Url is not valid');
    } else {
        setSuccessFor(url);
    }
	
	if (cat.value === '0') {
		setErrorFor(cat,'Choose a category');
	}else{
		setSuccessFor(cat);
	}

	if (own.value === '0') {
		setErrorFor(own,'Choose ownership');
	}else{
		setSuccessFor(own);
	}

	if (gvt.value === '') {
		setErrorFor(gvt,'Enter government number');
	}else{
		setSuccessFor(gvt);
	}

	if (region.value === '0') {
		setErrorFor(region,'Choose region');
	}else{
		setSuccessFor(region);
	}

	if (cntry.value === '0') {
		setErrorFor(cntry,'Choose country');
	}else{
		setSuccessFor(cntry);
	}

	if (res.value === '0') {
		setErrorFor(res,'Choose resolution');
	}else{
		setSuccessFor(res);
	}

	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isURL(url) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return pattern.test(url);
  }

  function isName(username){
  return /^[A-Za-z ]+$/.test(username);
  }

  


// SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });


