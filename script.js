const elementList = document.getElementById('taskList')
const elementInput = document.getElementById('inputList')
const elementButton = document.getElementById('button')

const tasks = []

function showTask() {
  elementList.innerHTML = ''

  for (task of tasks) {
    const elementtask = document.createElement('li')
    const textTask = document.createTextNode(task)
    const elementLink = document.createElement('a')
    const pos = tasks.indexOf(task)
    const linkText = document.createTextNode('x')

    elementLink.setAttribute('onclick', `deleteTask(${pos})`)
    elementLink.setAttribute('href', '#')
    elementtask.appendChild(textTask)
    elementList.appendChild(elementtask)
    elementtask.appendChild(elementLink)
    elementLink.appendChild(linkText)
  }
}

showTask()

function addTask() {
  const textTask = elementInput.value
  if (elementInput.value === '') {
    alert('Campo Vazio')
  } else {
    tasks.push(textTask)
    elementInput.value = ''
    showTask()
  }
}

elementButton.setAttribute('onclick', 'addTask()')

function deleteTask(pos) {
  tasks.splice(pos, 1)
  showTask()
}
