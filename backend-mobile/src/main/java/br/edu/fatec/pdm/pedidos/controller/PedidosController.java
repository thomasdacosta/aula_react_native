package br.edu.fatec.pdm.pedidos.controller;


import br.edu.fatec.pdm.pedidos.dto.Pedido;
import br.edu.fatec.pdm.produtos.dto.Produto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PedidosController {

    @PostMapping("/pedidos")
    public ResponseEntity<Pedido> criarPedido() {
        Pedido pedido = new Pedido();
        pedido.setId(10);
        return ResponseEntity.ok(pedido);
    }

    @GetMapping("/pedidos")
    public ResponseEntity<List<Pedido>> listarPedidos() {
        Pedido pedido = new Pedido();
        pedido.setId(10);
        return ResponseEntity.ok(List.of(pedido));
    }

    @GetMapping("/pedidos/{id}")
    public ResponseEntity<Pedido> pedido(@PathVariable String id) {
        Pedido pedido = new Pedido();
        pedido.setId(10);
        return ResponseEntity.ok(pedido);
    }

}
