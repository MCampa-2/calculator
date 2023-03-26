const output = document.querySelector('.output');
const buttons = document.querySelectorAll("button");



buttons.forEach((btn) =>{
    if(btn.classList.contains("operator")){
        btn.addEventListener("click", function(){
            output.textContent += btn.value;
        })
    }else if(btn.classList.contains("operand")){
        btn.addEventListener("click", function(){
            output.textContent += btn.value;
        })
    }else if(btn.classList.contains("decimal")){
        btn.addEventListener("click", function(){
            decimal();
        })
    }else if(btn.classList.contains("clear")){
        btn.addEventListener("click", function(){
            clear();
        })
    }else if(btn.classList.contains("equals")){
        btn.addEventListener("click", function(){
            let result = eval(output.textContent);
            output.textContent = result;
        })
    }
}
)


function decimal(){
    if(!output.textContent.includes(".")){
        output.textContent += ".";
    }
}


function clear(){
    output.textContent = "";
}

