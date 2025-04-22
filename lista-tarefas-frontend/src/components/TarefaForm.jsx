import { useState } from 'react';
import API from '../api';

const TarefaForm = ({ onAdd }) => {
    const [descricao, setdescricao] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!descricao.trim()) return;

        const novaTarefa = {
            descricao,
            prioridade: 'normal',
            dataLimite: null,
            concluida: false
        };

        const res = await API.post('/', novaTarefa);
        onAdd(res.data);
        setdescricao('');
    };

    return (
        <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
            <input
        className="border rounded p-2 w-full"
        type="text"
        placeholder="Nova tarefa"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-4 rounded">adicionar</button>
        </form>
    );
};

export default TarefaForm;
