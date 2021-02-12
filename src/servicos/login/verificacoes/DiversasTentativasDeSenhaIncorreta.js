class DiversasTentativasDeSenhaIncorreta {

    registrar(usuario) {
        new Logger().logarEventoDeSeguranca(`tentativa de login com senha incorreta para o usuario ${usuario}`);
        // persistir informacao
    }

    verificar(usuario) {
        // recupera informacoes persistidas e toma a decisao
        return true;
    }

}