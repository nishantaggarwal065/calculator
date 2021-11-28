var buttons = document.getElementsByClassName("button");
var display = document.getElementById("screen");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i=0; i< buttons.length; i++)
{
	buttons[i].addEventListener('click', function(){
			var value= this.getAttribute('data-value');
			if(value == '+')
			{
				operator = "+";
				operand1 = parseFloat(display.textContent);
				display.innerText = " ";
			}
			else if(value == '-')
			{
				operator = "-";
				operand1 = parseFloat(display.textContent);
				display.innerText = " ";
			}
			else if(value == '*')
			{
				operator = "*";
				operand1 = parseFloat(display.textContent);
				display.innerText = " ";
			}
			else if(value == '/')
			{
				operator = "/";
				operand1 = parseFloat(display.textContent);
				display.innerText = " ";
			}
			else if(value == '%')
			{
				display.innerText /= 100;
			}
			else if(value == '=')
			{
				operand2 = parseFloat(display.textContent);
				var result = eval( operand1*1.0 + " " + operator + " " + operand2  );
				
				if(result!=Infinity)
				display.innerText = result;
				else
					display.innerText = "Error";
			}
			else if(value == '!')
			{
				display.innerText = " ";
			}
			else if(value == '@')
			{
				display.innerText -= (display.innerText*2) ;
			}
			else{
				display.innerText += value;
			}

	});
}