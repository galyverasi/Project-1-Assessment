let display = document.querySelector(".display")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let numInput = document.querySelector("input[type='number']")
let count = 0

updateDisplay()
// add and keep color to black
plus.addEventListener("click",()=>{
    count++
    updateDisplay()
    if (count>0) {
        display.style.color = "black"
    }
}) 
// subtract and keep color to red
minus.addEventListener("click",()=>{
    count--
    updateDisplay()
    let newNum = numInput.value
    let minus = document.querySelector(".minus")
    if (minus) {
        let updateDisplay = -(newNum-1)
        display.style.color = "red"
        display.innerHTML = updateDisplay
    }

})
function updateDisplay(){
    display.innerHTML = count;
}
