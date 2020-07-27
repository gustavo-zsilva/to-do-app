const input = document.querySelector('.new-todo input')
const addBtn = document.querySelector('.new-todo .add-link')
const clear = document.querySelector('.all-todos .clear')

let ul = document.querySelector('.all-todos ul')

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

    ul.innerHTML = ''

    todos.forEach(todo => {

        // Criar as novas variáveis
        let li = document.createElement('li')
        let a = document.createElement('a')
        let newInput = document.createElement('input')
        let span = document.createElement('span')

        // Setar propriedades das variáveis
        a.href = '#'
        a.textContent = 'X'
        newInput.type = 'checkbox'

        // Adicionar Event Listeners
        newInput.addEventListener('click', () => {
            span.classList.toggle('checked')

            saveToStorage()
        })

        a.addEventListener('click', () => {
            let index = todos.indexOf(span.textContent)
            localStorage.removeItem(span.textContent)
            todos.splice(index, 1)
            li.parentNode.removeChild(li)

            saveToStorage()
        })

        // Adicionar os componentes á tela
        li.appendChild(a)
        li.appendChild(newInput)
        span.textContent = todo
        li.appendChild(span)

        ul.appendChild(li)

        saveToStorage()
    })
    
}


addBtn.addEventListener('click', () => {
    
    if (input.value.length <= 0) {
        alert('Digite um to-do válido.')

    } else {
        todos.push(input.value)

        // Resetar o campo do input
        input.value = ''
        input.focus()

        renderTodos()
    }

})

// Limpa todos to-dos
clear.addEventListener('click', () => {
    todos = []
    localStorage.clear()
    renderTodos()
})

// Salvar em localStorage
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)) 
}

renderTodos()

// localStorage.setItem("name", "domenic")
// localStorage.clear()
// localStorage.removeItem("name")
// localStorage.setItem("age", "30")
// localStorage.setItem("name", "domenic")
// console.log(localStorage.key(0));