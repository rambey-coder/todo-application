

// add todo
const addTodo = document.querySelector('.add-todo')
const container = document.querySelector('.content')
addTodo.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = addTodo.querySelector('input').value
    let output = `
    <div class="todo">
    <span>
      <span class="circle">
        <img src="/images/icon-check.svg" alt="" class="check">
      </span>
      <p class='todo-content'>${value}</p>
    </span>

    <img src="/images/icon-cross.svg" alt="" class="cross">
  </div>
    `

    container.innerHTML += output
})

// mark todo
const radioBtn = document.querySelectorAll('.circle')
const todos = document.querySelectorAll('.todo')
const todoContent = document.querySelectorAll('.todo-content')
const checkMark = document.querySelectorAll('.check')

container.addEventListener('click', e => {
    if(e.target.className =='circle') {
        todos.forEach(() => {
            radioBtn.forEach(() => {
                e.target.style.background = 'red'
                e.target.style.border = '0'
                
            })
            checkMark.forEach(() => {
                let view = e.target.children
                view.style.display = 'block'
                console.log(e.target.children);
            })
        })
        
    }    
})

// radioBtn.forEach((radio, i) => {
//     radio.addEventListener('click', (e) => {
        // e.target.style.background = 'red'
        // e.target.style.border = '0'

        // checkMark[i].style.display = 'block'
        // todoContent[i].style.textDecoration = 'line-through'
//         console.log('clicked');
//     })
//     console.log(radio);
// })

// delete todo
// const todoContainer = document.querySelector('.card')
const deleteBtn = document.querySelectorAll('.cross')

container.addEventListener('click', (e) => {
    if(e.target.className == 'cross') {
        const todo = e.target.parentElement
        container.removeChild(todo)
    }
})

// items left 
const item = document.querySelector(".remain-item")
const val = radioBtn.length
item.textContent = `${val} item left`

// clear completed 
const clearTodo = document.querySelector('.clear')

clearTodo.addEventListener('click', () => {
    todos.forEach(todo => todo.remove())
})