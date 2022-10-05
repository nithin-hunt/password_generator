const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passwordLengthRange = document.getElementById("password-length-range");
let passwordLength = document.getElementById("password-length");
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
passwordLength.innerHTML = passwordLengthRange.value;

passwordLengthRange.oninput = function() {
  passwordLength.innerHTML = this.value;
}
function passwordGenerator(){
    let password=[]
    for (let i=0; i<passwordLengthRange.value; i++)
    {
        let j= Math.floor(Math.random() * 4)
            if (j=== 0 && document.getElementById("upper-case").checked) {
                k = Math.floor(Math.random() * uppercase.length)
                password += uppercase[k]
            } else if (j=== 1 && document.getElementById("lower-case").checked)  {
                k = Math.floor(Math.random() * lowercase.length)
                password += lowercase[k]
            } else if (j=== 2 && document.getElementById("numbers").checked) {
                k = Math.floor(Math.random() * numbers.length)
                password += numbers[k]
            } else if (j=== 3 && document.getElementById("symbols").checked) {
                k = Math.floor(Math.random() * symbols.length)
                password += symbols[k]
            } else {
                if (document.getElementById("upper-case").checked) {
                    k = Math.floor(Math.random() * uppercase.length)
                    password += uppercase[k]
                } else if (document.getElementById("lower-case").checked)  {
                    k = Math.floor(Math.random() * lowercase.length)
                    password += lowercase[k]
                } else if (document.getElementById("numbers").checked) {
                    k = Math.floor(Math.random() * numbers.length)
                    password += numbers[k]
                } else if (document.getElementById("symbols").checked) {
                    k = Math.floor(Math.random() * symbols.length)
                    password += symbols[k]
                }
            }
    }
    return password
}
function generatePassword() {
    password1.textContent = passwordGenerator()
    password2.textContent = passwordGenerator()
}