const todo = document.querySelector('.new-todo input')
const addButton = document.querySelector('.add-link')
const checkbox = document.querySelector('.all-todos ul input')
const checkboxes = []
const ul = document.querySelector('ul')

addButton.addEventListener('click', addTodo)

function addTodo() {
    
    let li = document.createElement('li')
    let a = document.createElement('a')
    let input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    a.innerHTML += 'X'
    
    li.appendChild(a)
    li.appendChild(input)
    ul.appendChild(li)
    li.innerHTML += todo.value
    

    todo.value = ''

}




