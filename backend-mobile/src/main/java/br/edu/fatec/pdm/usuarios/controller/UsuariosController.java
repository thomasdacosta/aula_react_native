package br.edu.fatec.pdm.usuarios.controller;

import br.edu.fatec.pdm.usuarios.dto.Usuario;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UsuariosController {

    @PostMapping("/usuarios/login")
    public ResponseEntity<Usuario> login() {
        Usuario usuario = new Usuario();
        usuario.setEmail("email@email.com");
        usuario.setSenha("senha");
        return ResponseEntity.ok(usuario);
    }

    @PostMapping("/usuarios/cadastro")
    public ResponseEntity<Usuario> cadastrarUsuario() {
        Usuario usuario = new Usuario();
        usuario.setEmail("email@email.com");
        usuario.setSenha("senha");
        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuario>> listaUsuarios() {
        Usuario usuario = new Usuario();
        usuario.setEmail("email@email.com");
        usuario.setSenha("senha");
        return ResponseEntity.ok(List.of(usuario));
    }

}
