
var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var num3 = document.getElementById('num3')
var num4 = document.getElementById('num4')
var num5 = document.getElementById('num5')
var num6 = document.getElementById('num6')

var spans = document.querySelectorAll('span')

var btns = document.querySelectorAll('.numBtn')

btns.forEach((btn)=>{

    btn.addEventListener('click',function(){
        if(num1.innerHTML == '-'){

            num1.innerHTML = btn.innerHTML;
           
        }else if(num2.innerHTML == '-'){

            num2.innerHTML = btn.innerHTML;

        }else if(num3.innerHTML == '-'){

            num3.innerHTML = btn.innerHTML;

        }else if(num4.innerHTML == '-'){

            num4.innerHTML = btn.innerHTML;

        }else if(num5.innerHTML == '-'){

            num5.innerHTML = btn.innerHTML;

        }else if(num6.innerHTML == '-'){

            num6.innerHTML = btn.innerHTML;

        }
    })
})

function clr(){
    num1.innerHTML = "-"
    num2.innerHTML = "-"
    num3.innerHTML = "-"
    num4.innerHTML = "-"
    num5.innerHTML = "-"
    num6.innerHTML = "-"
}
    function del(){
        if(num6.innerHTML != '-'){
            num6.innerHTML = "-"
        }
        else if(num5.innerHTML != '-'){
            num5.innerHTML = "-"
        }
        else if(num4.innerHTML != '-'){
            num4.innerHTML = "-"
        }
        else if(num3.innerHTML != '-'){
            num3.innerHTML = "-"
        }
        else if(num2.innerHTML != '-'){
            num2.innerHTML = "-"
        }
        else if(num1.innerHTML != '-'){
            num1.innerHTML = "-"
        }
    }
    
   


