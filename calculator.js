let display=document.getElementById("screen");

function displayScreen(num){
    display.value +=num;
}

function Calculate(){
    try {
        display.value=eval(display.value);
    } catch (error) {
        alert('Error');
    }
}
function Clear(){
    display.value ="";
}
