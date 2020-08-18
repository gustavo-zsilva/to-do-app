import { ul } from './variables';
import { todos } from './script';
import saveToStorage from './storage';

export default function renderTodos() {

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