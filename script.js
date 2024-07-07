var variable = '';
document.querySelector('h2').innerHTML = variable;

function getValue() {
    // select 1
    var select1 = document.getElementById("select1");
    var select1Value = select1.value;

    // select2
    var select2 = document.getElementById("select2");
    var select2Value = select2.value; 
    
    if(select1Value == select2Value){
        variable = "Необходимо выбрать разные города";
        document.querySelector('h2').innerHTML = variable;
    }
    if(select1Value != select2Value){
        variable = "Теперь заполните свою фуру ниже";
        document.querySelector('h2').innerHTML = variable;
    }
    
}
