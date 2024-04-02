const dogImg = document.querySelector('#dog-img')
const paraVerification = document.querySelector('#verification-para')
const verificationButton = document.querySelector('#verification-btn')
const passButton = document.querySelector('#pass-btn')
const paraPass = document.querySelector('#pass-para')

//Ejercicio Imagen
const changeColor = () =>{
  dogImg.style.border = "2px solid red"
}

const removeColor = () =>{
  dogImg.style.border = "none"
}

let clickCount = 0

dogImg.addEventListener('click', ()=>{
  clickCount++
  if(clickCount == 1){
    changeColor()
  }else if(clickCount == 2){
    removeColor()
    clickCount = 0
  }
})

//Ejercicio Stickers
verificationButton.addEventListener('click', () =>{
  const stickerUno = document.querySelector('#stickerUno').valueAsNumber
  const stickerDos = document.querySelector('#stickerDos').valueAsNumber
  const stickerTres = document.querySelector('#stickerTres').valueAsNumber
  let totalSticker = stickerUno + stickerDos + stickerTres
  if(totalSticker <= 10 && totalSticker > 0){
    paraVerification.innerHTML = "Llevas "+ totalSticker +" sticker"
  } else if (totalSticker > 10){
    paraVerification.innerHTML = "No puedes llevar más de 10 stickers"
  } else{
    paraVerification.innerHTML = "No llevas ningún sticker"
  }
 })

//Ejercicio Password
function fillSelect(select){
  for(let i = 1; i < 10; i++){
    let option = document.createElement('option')
    option.value = i
    option.text = i
    select.appendChild(option)
  }
}

let selectUno = document.querySelector('#firstPass')
let selectDos = document.querySelector('#secondPass')
let selectTres = document.querySelector('#thirdPass')

fillSelect(selectUno)
fillSelect(selectDos)
fillSelect(selectTres)

passButton.addEventListener('click', () =>{
  selectUno = document.querySelector('#firstPass')
  selectDos = document.querySelector('#secondPass')
  selectTres = document.querySelector('#thirdPass')
  let password = selectUno.value + selectDos.value + selectTres.value
  if(password == "911"){
    paraPass.innerHTML = "La contraseña Nro 1 es correcta"
  } else if(password == "714"){
    paraPass.innerHTML = "La contraseña Nro 2 es correcta"
  } else{
    paraPass.innerHTML = "La contraseña es incorrecta"
  }
})

