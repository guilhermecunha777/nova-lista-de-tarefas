import API from '../api';

const TarefaLista = ({ tarefas, setTarefas }) => {
    const concluir = async (id) => {
        const res = await API.put(`/${id}/concluir`);
        setTarefas((prev) => prev.map(t => t.id === id ? res.data : t));
    };

    const remover = async (id) => {
        await API.delete('/${id}');
        setTarefas((prev) => prev.filter(t => t.id !== id));
    };

    return (
        <ul>
        {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="flex justify-between items-center p-2 border-b">
            <span className={tarefa.concluida ? "line-through text-gray-500" : ""}>
                {tarefa.descricao}
            </span>
            <div className="flex gap-2">
                {!tarefa.concluida && (
                <button onClick={() => concluir(tarefa.id)} className="text-green-600">✔️</button>
                )}
                <button onClick={() => remover(tarefa.id)} className="text-red-600">🗑️</button>
            </div>
            </li>
        ))}
        </ul>
    );
};

export default TarefaLista;