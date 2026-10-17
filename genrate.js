let inputSlider=document.getElementById("inputSlider");
let SliderVlaue=document.getElementById("SliderVlaue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genbtn=document.getElementById("genbtn");  
let copyicon =document.getElementById("copyicon");


SliderVlaue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    SliderVlaue.textContent=inputSlider.value;
});
genbtn.addEventListener('click',()=>{
    passBox.value=generatepassword();

});
let loweChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers="0123456789";
let allSumbols="~!@#$%^&*";
function generatepassword(){
    let genpassword="";
    let allChar="";

    allChar +=lowercase.checked ? loweChars: "";
    allChar +=uppercase.checked ?upperChars:"";
    allChar +=numbers.checked ? allNumbers:"";
    allChar +=symbols.checked ?allSumbols:"";

    let i=1;
    while(i<=inputSlider.value){

   
    genpassword +=allChar.charAt (Math.floor(Math.random()*allChar.length));
    i++;
     }
    return genpassword; 
}
copyicon.addEventListener('click',()=>{
    if(passBox.value !="" || passBox.value.length >=1){
navigator.clipboard.writeText(passBox.value);
copyicon.innerText="check";
copyicon.title="Password Copied";
setTimeout(()=>{
    copyicon.innerHTML="content_copy";
    copyicon.title="";
}, 2000)
  }
});
