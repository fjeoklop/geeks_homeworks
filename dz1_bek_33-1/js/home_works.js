1.1

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /[a-zA-Z]@gmail\.com$/i //todo мог бы использовать \w но если его использовать почта может состоять только из цифр

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'Ok'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'Not Ok'
        gmailResult.style.color = 'red'
    }
})

//1.2
const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let currentPosition = 0
const step = 5

const moveRight = () => {
    currentPosition += step
    childBlock.style.left = `${currentPosition}px`

    if (currentPosition < parentBlock.clientWidth - childBlock.clientWidth) {
      requestAnimationFrame(moveRight);
    }
  }
moveRight()
