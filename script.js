window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }
    document.getElementById("btn_op_percent").onclick = function(){
        if ( a === '') return
        selectedOperation = '%'
    }

    //уделение всего
    function AllClear() {
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }

    //удаление последней цифры
    function BackSpace() {
        if (!selectedOperation) {
            a = (a).toString()
            if (a.length > 0) {
                a = a.slice(0, -1)
                outputElement.innerHTML = a || 0
            }
        } else {
            b = (b).toString()
            if (b.length > 0) {
                b = b.slice(0, -1)
                outputElement.innerHTML = b || 0
            }
        }
    }

    document.getElementById("btn_op_clear").addEventListener('mousedown', function() {
        timer = setTimeout(function() {
            AllClear()
        }, 600)
    });

     //окончание нажатия
     document.getElementById("btn_op_clear").addEventListener('mouseup', function() {
        clearTimeout(timer)
    });

    //1 клик
    document.getElementById("btn_op_clear").addEventListener('click', function() {
        BackSpace()
    });

    document.getElementById("btn_op_sign").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = (-a).toString()
                outputElement.innerHTML = a
            }
        }
    }

    document.getElementById("btn_op_sqrt").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = Math.sqrt(a)
                outputElement.innerHTML = a
            }
        }
    }

    document.getElementById("btn_op_pow").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = a*a
                outputElement.innerHTML = a
            }
        }
    }

    const fact = n => {
        let res = 1;
        for (let i = 2; i <= n; i++) {
            res *= i;
        }
        return res;
    };

    document.getElementById("btn_op_fact").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = fact(a)
                outputElement.innerHTML = a
            }
        }
    }

    document.getElementById("btn_op_m3").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = a*1000
                outputElement.innerHTML = a
            }
        }
    }

    document.getElementById("btn_op_ln").onclick = function() {
        if (!selectedOperation) {
            if (a !== '') {
                a = Math.log(a)
                outputElement.innerHTML = a
            }
        }
    }

    //дополнительные кнопок
    document.getElementById("btn_advanced").onclick = function() {
        const advbtns = document.getElementById("adv_btns")
        if (advbtns.style.display === "none") {
            advbtns.style.display = "flex"
        } else {
            advbtns.style.display = "none"
        }
    }
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            case '%':
                expressionResult = (+a) / 100 * (+b)
                break;    
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
    }
    };