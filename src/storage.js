import { todos } from './script';

// Salvar em localStorage
export default function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)) 
}
