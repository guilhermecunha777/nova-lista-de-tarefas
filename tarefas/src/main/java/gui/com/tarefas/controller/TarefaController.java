package gui.com.tarefas.controller;

import gui.com.tarefas.model.Tarefa;
import gui.com.tarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    @Autowired
    private TarefaRepository repo;

    @GetMapping
    public List<Tarefa> listar() {
        return repo.findAll();
    }

    @PostMapping
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        return repo.save(tarefa);
    }

    @PutMapping("/{id}/concluir")
    public Tarefa concluir(@PathVariable Long id) {
        Tarefa tarefa = repo.findById(id).orElseThrow();
        tarefa.setConcluida(true);
        return repo.save(tarefa);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
