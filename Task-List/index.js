const inputBtn = document.getElementById('inputBtn')
var inputTask = document.getElementById('inputList')
var inputDate = document.getElementById('inputDate')

const arr = []

//Função que insere tarefas na lista usando DOM
const btnClick = () =>{
    if(inputBtn.onclick){
      if(inputTask.value != ''){
          arr.push([inputTask.value, inputDate.value])
    
      //Cria paragrafo a ser listado
      const paragraph = document.createElement("p")
      paragraph.classList.add("paragraph")
      paragraph.innerHTML = `${inputTask.value} (${inputDate.value})`
      //Adiciona o paragrafo delete ao nó pai body
      document.body.appendChild(paragraph)
      
      //Cria botão para remover tarefa
      const deleteBtn = document.createElement("button")
      deleteBtn.classList.add("deleteBtn")
      deleteBtn.innerHTML = "X"
      //Adiciona o botão delete ao nó pai body
      document.body.appendChild(deleteBtn)
      //função que remove tarefa da lista (paragrafo, data e botão) e também remove o item do array 
      deleteBtn.onclick = function(){
        if(deleteBtn.onclick){
          paragraph.parentNode.removeChild(paragraph)
          deleteBtn.parentNode.removeChild(deleteBtn)
          divParagraph.parentNode.removeChild(divParagraph)
          let index = arr.indexOf(paragraph)
          arr.splice(index, 1)
        }
      }
      
      //insere paragrafo e botão delete dentro de uma div
      const divParagraph = document.createElement("div")
      divParagraph.classList.add("divparagraph")
      divParagraph.innerHTML
      document.body.appendChild(divParagraph)
      divParagraph.append(paragraph)
      divParagraph.append(deleteBtn)

      }else{
        //retorna erro caso não satifaça a condição acima
        //cria uma mensagem informando onde está o erro e a mesma some depois de 2s
        const erroMessage = document.createElement("span")
        erroMessage.classList.add("erroMessage")
        erroMessage.innerHTML = "INFORME UMA TAREFA!!"
        //Adiciona o span delete ao nó pai body
        document.body.appendChild(erroMessage)
        
        //função que remove mensagem após 2s
        const removeMessage = () =>{
          //instrução que executa remoção
          setTimeout(function(){
            //usa seletor CLASS para remover a tag
            let msg = document.querySelector(".erroMessage")
            //parentNode remove elemento sem especificar pai, usa apenas o seletor para remover usando removeChild
            if(msg.parentNode){
              msg.parentNode.removeChild(msg)
            }
          }, 1500)
        }
        removeMessage();
      }
    }
  }




btnClick;

