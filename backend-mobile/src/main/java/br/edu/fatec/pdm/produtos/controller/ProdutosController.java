package br.edu.fatec.pdm.produtos.controller;

import br.edu.fatec.pdm.produtos.dto.Produto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProdutosController {

    @GetMapping("/produtos")
    public ResponseEntity<List<Produto>> listarProdutos() {
        Produto produto = new Produto();
        produto.setNome("produto");
        return ResponseEntity.ok(List.of(produto));
    }

    @GetMapping("/produtos/{id}")
    public ResponseEntity<Produto> produto(@PathVariable String id) {
        Produto produto = new Produto();
        produto.setNome("produto");
        return ResponseEntity.ok(produto);
    }

}
