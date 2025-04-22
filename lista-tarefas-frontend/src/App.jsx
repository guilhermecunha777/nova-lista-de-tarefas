import {useState, useEffect } from 'react';
import API from './api';
import TarefaForm from './components/TarefaForm';
import TarefaLista from './components/TarefaLista';

const App = () => {
    const [tarefas, setTarefas] = useState([]);

    const carregarTarefas = async () => {
        const res = await API.get('/');
        setTarefas(res.data);
    };

    useEffect(() => {
        carregarTarefas();
    }), [];

    const adicionarTarefa = (tarefa) => {
        setTarefas((prev) => [...prev, tarefa]);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
        <TarefaForm onAdd={adicionarTarefa} />
        <TarefaLista tarefas={tarefas} setTarefas={setTarefas} />
    </div>
    );
};

export default App;
