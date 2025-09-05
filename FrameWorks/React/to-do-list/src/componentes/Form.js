//componente para criar formulário para inserir uma nova tarefa
//função para adicionar tarefa (arrow function)

import"./Form.css"; //import o css
import { useState } from "react"

const Form = ({addTarefa}) => {

    //vetor para armazenar o valor do input com o useState
        //useState: usa a memória local do navegador
        //  para armazenar as mudanças de estado
        //1° elemento do [] armazena as tarefas
        // 2° elemento armazena as mudanças de estado
    const [tarefa, setTarefa] = useState("");

    //função para atualizar o estado com o valor do input
    //função vai criar uma nova tarefa
    // ao ser clicado no botão de enviar do form
    const handleSubmit = (e) =>{ //arrowFunction
        //impedir o function padrão do botão enviar
        e.preventDefault();//não permite o recarregamento da página
        // verificar se o campo não está vazio
        if(tarefa.trim() !== ""){
            //adicionar a tarefa ao vetor de tarefa
            addTarefa(tarefa);
            //lmpo o campo de input
            setTarefa("");
        }
    };
    //lógica por trás do design
    

    //VIEW
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Inserir Nova Tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
            />
            <button className="btnEnviar" type="submit">
                Adicionar
            </button>
        </form>
    );
};

export default Form;
//componente cria formulário das tarefas
// pode ser reutilizado em outros componentes da aplicação (export)