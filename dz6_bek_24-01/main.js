// if (true) {
//     var a = 12
//     let a = 12
//     const a = 12
// }
// console.log(a)
// function hoisted() {
//     age = 20
// }
// let age
// hoisted()
// console.log(age)
// const button = document.querySelector('#btn')
//
// const clicked = (message = prompt()) => {
//     return console.log('you clicked the button' + message)
// }
// function handleClick (clickFunc) {
//     return clicked
// }
//
//
// button.addEventListener('click', () => handleClick(clicked) )
// context
// person.logger()
//стрелочной функции есть свой обьект
// у обычной нету
// форич возвращает андифайнд


// function logger () {
//     console.log(this)
// }
// const arrowLogger = () => {
//     console.log(this)
// }
//
// const person = {
//     name: 'John Wick',
//     age: 40,
//     logger: logger,
//     arrow:arrowLogger,
//     delay:function () {
//         console.log(this.name)
//     },
//     delayLog:() => {
//     }
// }
// // person.arrow()
// person.delay()

// const str = 'Hello World'
// console.log(str.startsWith('H'))

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// console.log(str.repeat(100))
// console.log(str.includes('o W'))

// let str = 'POP'
// console.log(str.padStart(5, str,))
// console.log(str.padEnd(100, '#'))



//dz
const input = document.getElementById('reverseWord')
const list = document.getElementById('list')

const reverseWord = () => {
    let arr = []
    arr.push(input.value)
    arr.forEach(word => {
        const text = document.createElement('p')
        text.append(word.split('').reverse().join(''))
        list.prepend(text)
    })
}
input.onkeydown = e => {e.keyCode === 13 ? reverseWord() : false}
