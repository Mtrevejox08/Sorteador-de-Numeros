const button = document.querySelector("#raffleButton")
const aleatoryNumber = document.querySelector("#numberAleatory")

button.addEventListener("click" , numberConverter)

function numberConverter () {
const aleatoryNumber = document.querySelector("#numberAleatory")
const min = Math.ceil(document.querySelector("#inputMin").value)
const max = Math.floor(document.querySelector("#inputMax").value)
const result = Math.floor(Math.random() * (max - min + 1) + min);

aleatoryNumber.innerHTML = result

}