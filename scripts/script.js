const input = document.querySelector('.new-todo input')
const addBtn = document.querySelector('.new-todo .add-link')
const clear = document.querySelector('.all-todos .clear')

const spanEl = document.querySelector('span')

const rm = document.querySelector('li a')
const initialLi = document.querySelector('li')

let ul = document.querySelector('.all-todos ul')
let allInputs = document.querySelectorAll('input[type=checkbox]')

const todos = []

// var todos = localStorage.getItem('list_todos');

// for (let i = 0; i <= localStorage.length; i++) {
//     localStorage.getItem(localStorage[i])
// }



// Configurações para os to-dos que já carregam na página
rm.addEventListener('click', () => {
    initialLi.classList.add('hide')

})

allInputs.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        spanEl.classList.toggle('checked')
    })
})


addBtn.addEventListener('click', () => {
    
    if (input.value.length <= 0) {
        alert('Digite um to-do válido.')

    } else {

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
        })

        a.addEventListener('click', () => {
            li.parentNode.removeChild(li)
        })
      

        // Adicionar os componentes á tela
        li.appendChild(a)
        li.appendChild(newInput)
        span.textContent = input.value
        todos.push(span.textContent)
        li.appendChild(span)

        ul.appendChild(li)

        // saveToStorage()

        // Resetar o campo do input
        input.value = ''
        input.focus()
    }

})

// Limpa todos to-dos
clear.addEventListener('click', () => {
    let lis = document.querySelectorAll('li')

    lis.forEach(li => {
        li.parentNode.removeChild(li)
    })
})

// Salvar em localStorage
// function saveToStorage() {

//     localStorage.setItem(JSON.stringify(index), JSON.stringify(todos[index]))

// }

// localStorage.setItem("name", "domenic")
// localStorage.clear()
// localStorage.removeItem("name")
// localStorage.setItem("age", "30")
// localStorage.setItem("name", "domenic")
// console.log(localStorage.key(0));





