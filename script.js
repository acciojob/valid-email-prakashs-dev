function validEmail(str) {
  //your JS code here.
let validRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(str.match(validRegex)){
		return true;
	}else{
		return false;
	}
}
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
