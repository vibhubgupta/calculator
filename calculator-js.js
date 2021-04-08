var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator =null;

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value =='()'){
            operator="()";
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        } else if(value == '%'){
            operator="%";
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        } else if(value == '/'){
            operator="/";
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        } else if(value == '*'){
            operator="*";
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        } else if(value == '+'){
            operator="+";
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        } else if(value == '-'){
            operator="-";
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        } else if(value == '='){
            operand2=parseFloat(display.textContent);
            display.innerText = eval(operand1 +" "+ operator +" "+ operand2);
        } else if(value == 'AC'){
            display.innerText=null;
        } else if(value == 'C'){
            var newdisplay=display.textContent;
            var temp=newdisplay.substring(0, newdisplay.length-1);
            display.textContent=temp;
        } else{
            display.innerText += value;
        }


    });
}