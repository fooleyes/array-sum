var ar = [1,2,3,4,10,11];

var n = 6;

function add(n, ar){
	var sum = 0;
	var i = 0;
	while(i < n) {
		sum += ar[i]
		i++
}
       return sum;
}

// or for custum array

function sumArray(arr){
	var total = 0
	arr.forEach(function(element){
		total += element;
		});
	return total
}
