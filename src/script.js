import { input, addBtn, clear } from './variables';
import renderTodos from './render';

export let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

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
export default clear.addEventListener('click', () => {
    todos = []
    localStorage.clear()
    renderTodos()
})

renderTodos()

// localStorage.setItem("name", "domenic")
// localStorage.clear()
// localStorage.removeItem("name")
// localStorage.setItem("age", "30")
// localStorage.setItem("name", "domenic")
// console.log(localStorage.key(0));