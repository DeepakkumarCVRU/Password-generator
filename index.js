let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copybtn = document.getElementById("copy-button")


slidervalue.innerHTML = inputslider.value;

inputslider.addEventListener("input", ()=>{
  slidervalue.innerHTML = inputslider.value;
})



genbtn.addEventListener("click" , ()=>{
  passbox.value =generatePassword()
})


let lowerChar = "abcdefghijklmnopqrstuvwxyz"
let upperChars = " ABCDEFGHIJKLMNOPQSTUVWXYZ"
let allNumber = "0123456789"
let allsymbols = "!@#$%^&*"


// function to generate password
function generatePassword(){
  let genPassword = "";
  let allchar ="";


  allchar += lowercase.checked ? lowerChar : "";
  allchar += uppercase.checked ? upperChars : "";
  allchar += numbers.checked ? allNumber : "";
  allchar += symbols.checked ? allsymbols : "";



    let i;
    for(i=1; i<=inputslider.value; i++)
    {
      genPassword += allchar.charAt(Math.floor(Math.random() * allchar.length));
      
    }
    return genPassword;
}


function copybutton (){
  if(passbox.value !== "" || passbox.value.length >=4){
    navigator.clipboard.writeText(passbox.value);
    
    copybtn.innerHTML = "succes"

    setTimeout(()=>{
      copybtn.innerHTML = "copy"
    }, 3000)
  }
  else{
   alert("please generate password first")
  }
}

