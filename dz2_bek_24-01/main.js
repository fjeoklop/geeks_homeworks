// 1) первое задание
for (var i = 20; i > 0; i--) {
    console.log(i)
}

//2) второе задание
let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}

//третье задание
var color = prompt('светофор').toLowerCase().trim()
var green = ['вперед']
var yellow = ['приготовится']
var red = ['стоп']
switch (color) {
    case 'зеленый':
        console.log(green)
        break
    case 'желтый':
        console.log(yellow)
        break
    case 'красный':
        console.log(red)
        break
    default:
        alert('надо вводить цвета!!')
}









































