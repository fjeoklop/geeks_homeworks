const input = document.getElementById('input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === ""){
        input.value = ''
        return false
    }

    else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const del = document.createElement("button")
        const edit = document.createElement("button")

        div.setAttribute('class', 'block_text')
        del.setAttribute('class', 'del_btn')
        edit.setAttribute('class', 'edit_btn')
        text.innerHTML = input.value
        del.innerText = 'delete'
        edit.innerText = 'edit'
        div.append(text, edit, del)

        del.onclick = () => div.remove()
        edit.onclick = () => {
            let edittxt = prompt(`ИЗМЕНИ ЭТО: ${text.innerText}`.trim())
            edittxt === '' ? text.innerText : text.innerText = edittxt
        }
        todoList.prepend(div)
    }
    input.value = ''
}
createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', e => e.keyCode === 13 ? createTodo() : false)
