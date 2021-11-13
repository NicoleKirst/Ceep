const BotaoConclui = () => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button') //Adicionando uma classe ao botão
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui

}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done') //Insere o evento tachado na li
}

export default BotaoConclui

