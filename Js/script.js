const nameForm = document.querySelector("#name")
const cardName = document.querySelector(".card-front-name")

nameForm.addEventListener("keyup", function(event){
    const key = nameForm.value
    cardName.textContent = key
})

const numberForm = document.querySelector("#card-number")
const cardNumber = document.querySelector(".card-front-number")

numberForm.addEventListener("keyup", function(){
    const key = numberForm.value
    cardNumber.textContent = key
})

const month = document.querySelector("#month")
const year = document.querySelector("#year")
const cvc = document.querySelector("#cvc")

month.addEventListener("keyup", function(){
    const cardMonth = document.querySelector(".card-front-month")
    const key = month.value
    cardMonth.textContent = key + "/"
})

year.addEventListener("keyup", function(){
    const cardYear = document.querySelector(".card-front-year")
    const key = year.value
    cardYear.textContent = key
})

cvc.addEventListener("keyup", function(){
    const cardCvc = document.querySelector(".card-back-cvc")
    const key = cvc.value
    cardCvc.textContent = key
})

const confirmBtn = document.querySelector(".form")
const container = document.querySelector("#container")
const thanks = document.querySelector(".thanks")

confirmBtn.addEventListener("submit", (e)=>{
    e.preventDefault()
    container.classList.toggle("hide")
    thanks.classList.toggle("hide")
})

const refresh = document.querySelector(".continue-btn")

refresh.addEventListener("click", ()=>{
    location.reload()
})