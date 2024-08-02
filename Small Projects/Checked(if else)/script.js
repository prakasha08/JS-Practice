const myCheckbox=document.getElementById("myCheckbox");
const visabtn=document.getElementById("visabtn");
const masterCardbtn=document.getElementById("masterCardbtn");
const payPalbtn=document.getElementById("payPalbtn");
const mySubmit=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick=function(){
    if(myCheckbox.checked){
        subResult.textContent="You are subscribed";
    }
    else{
        subResult.textContent="You are NOT subscribed";

    }
    if(visabtn.checked){
        paymentResult.textContent="You are paying with visa";
    }
    else if(masterCardbtn.checked){
        paymentResult.textContent="You are paying with master";
    }
    else if(payPalbtn.checked){
        paymentResult.textContent="You are paying with payPal";
    }
    else{
        paymentResult.textContent="You must select Payment method";
    }
}
