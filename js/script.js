let btn = document.querySelector('.send')
let input = document.querySelector('#task')
let res = document.querySelector('.res')
let task = document.createElement('ul')


const adctask = () => {

    let p = document.createElement('p')
    let del = document.createElement('button')
    del.classList.add('btn-del')
    let done = document.createElement('button')
    done.classList.add('btn-done')
    let item = document.createElement('li')
    let buttons = document.createElement('div')
    buttons.classList.add('btn-box')

    if(input.value.length != 0){
        res.appendChild(task)
        task.appendChild(p)
        p.appendChild(item)
        p.appendChild(buttons)
        buttons.appendChild(done)
        buttons.appendChild(del)
        item.textContent = input.value
        del.textContent = "X"
        done.textContent = "O"
        input.value = ''
        input.focus()

        
        done.addEventListener('click', function(){
            p.classList.toggle('task-complete')
            del.classList.toggle('merge-del')
            done.classList.toggle('merge-done')
        })
        
        del.addEventListener('click', function(){
            task.removeChild(p)
        })
    }
}

document.addEventListener('keypress', (key) => {
    
    if(key.key == 'Enter' && input.value.length != 0){
        key.preventDefault()
        adctask()
    }
})

btn.addEventListener('click', adctask)


