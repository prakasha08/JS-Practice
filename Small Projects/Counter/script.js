
const countLabel = document.getElementById("countLabel");
let count = 0;
document.getElementById("increaseBtn").onclick=function(){
count++;
countLabel.textContent = count;
}
document.getElementById("decreaseBtn").onclick=function(){
count--;
countLabel.textContent = count;
}
document.getElementById("resetBtn").onclick=function(){
count=0;
countLabel.textContent = count;
}