var reverseThis = prompt('Enter a word');
var reverseword = '';
for (var i = reverseThis.length - 1; i >= 0; i--) {
	reverseword += reverseThis[i];
}

//true is Palindrome otherwise false
console.log(reverseword === reverseThis);