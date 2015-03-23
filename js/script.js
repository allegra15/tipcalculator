function tipCalculate () 
{
	var totalBill = document.getElementById("bill").value;
	var percBtns = document.getElementsByClassName("tip-btn");
	
	for(var i=0; i<percBtns.length; i++) 
	{
		if(percBtns[i].checked)
		var tipPerc = percBtns[i].value;
	}

//! means if false

	if(!isNaN(totalBill))
	{
		var tipTotal = Math.floor(totalBill * tipPerc);
		var tipBox = document.getElementById("tipamount");
		tipBox.innerHTML = "$"+tipTotal;
	} 
	else {
		alert("Please enter numbers only");
		resetCalc();
	}
}

//set bill amount to 0
function resetCalc(){
  document.getElementById('bill').value = '';

//reset tip pct buttons
  var percBtns = document.getElementsByClassName('tip-btn');
  for(var i=0; i < percBtns.length; i++){
    percBtns[i].checked = false;
  }
//reset tip amount
  var tipBox = document.getElementById('tipamount');
  tipBox.innerHTML = '$0.00';
}

