let display = document.querySelector(".display")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")

let count = 0

updateDisplay()

plus.addEventListener("click",()=>{
    count++;
    updateDisplay()
}) 

minus.addEventListener("click",()=>{
    count--
    updateDisplay()
})

function updateDisplay(){
    display.innerHTML = count;
    
}
