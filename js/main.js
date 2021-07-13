// BT1
 {
    var sum = 0;
    for (var i = 1;; i++) {
        sum+=i;
        if (sum > 10000) {
            break;
        }
    }
    document.getElementById('showKQ1').innerHTML = "Số nguyên dương nhỏ nhất là: " + i;
}

// BT2

function BT2() {
    var BT2n = parseFloat(document.getElementById("BT2n").value);
    var BT2x = parseFloat(document.getElementById("BT2x").value);
    var sum = 0;

    for (var i = 1; i < BT2n + 1; i++) {
      sum += Math.pow(BT2x,i);    
    }
    document.getElementById("showKQ2").style.height  = "40px";
    return KQ2.innerHTML = sum;

}

// BT3

function BT3() {
    var BT3 = parseFloat(document.getElementById("BT3n").value);
    var fact = 1;

    for (var i = 1; i < BT3 + 1; i++) {
        fact *= i;
    }

    document.getElementById("showKQ3").style.height  = "40px";
    return KQ3.innerHTML = fact;
}

function BT4() {
    var BT4n =parseFloat(document.getElementById('BT4n').value);
    var div = document.createElement('div');

    for (var i = 1; i < BT4n + 1; i++) {
        if (i % 2 == 0) {
            var div = document.createElement('div');
            div.style.backgroundColor = 'red';
            div.style.height = '30px';
            div.innerHTML = 'Div chẵn';
            document.getElementById('KQ4').appendChild(div);    
                  
        }else{
            var div = document.createElement('div');
            div.style.height = '30px';
            div.style.backgroundColor = 'blue';
            div.innerHTML = 'Div lẻ';
            document.getElementById('KQ4').appendChild(div);              
        }   
    }
}