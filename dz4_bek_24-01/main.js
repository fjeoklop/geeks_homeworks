

//задание 1
const increment = document.getElementById('inc')
const decrement = document.getElementById('dec')
const counter = document.getElementById('count')

let num = 0

function minus(){
    if (num <= 0) {
        return false
    }else {
        num--
        counter.innerHTML = num
        counter.style.color = 'red'
    }
}
function plus() {
    num++
    counter.innerHTML = num
    counter.style.color = 'green'
}
decrement.onclick = () => minus()
increment.onclick = () => plus()

//задание 2
const posX = document.querySelector('#posX')
const posY = document.querySelector('#posY')
const box = document.querySelector('.box')

box.onmousemove = e => {
    posX.innerHTML = e.x
    posY.innerHTML = e.y

}

//задание 3
const color = prompt('Введите цвет \nКрасный, \nЖелтый, \nЗеленый :').trim().toLowerCase()
const Red = document.getElementsByClassName('red')
const Yellow = document.getElementsByClassName('yellow')
const Green = document.getElementsByClassName('green')


switch (color) {
    case 'красный':
    case 'red':
        Red[0].style.background = 'red'
        Red[0].innerHTML = 'Stop'
        break;
    case 'желтый':
    case 'yellow':
        Yellow[0].style.background = 'yellow'
        Yellow[0].innerHTML = 'Wait'
        break;
    case 'зеленый':
    case 'green':
        Green[0].style.background = 'green'
        Green[0].innerHTML = 'GO'
        break;
    default:
        Red[0].style.background = 'red'
        Yellow[0].style.background = 'yellow'
        Green[0].style.background = 'green'
        Red[0].innerHTML = "пиши "
        Yellow[0].innerHTML = "Цвета"
        Green[0].innerHTML = "светофора"
}