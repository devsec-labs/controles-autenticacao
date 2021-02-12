class LogouDeDiferentesIpsEmCurtoPeriodo {

    registrar(usuario) {
        new Logger().logarEventoDeSeguranca(`usuario ${usuario} autenticando de ip diferente num curto periodo de tempo`);
        // persistir informacao 
    }

    verificar(usuario) {
        // recupera informacoes persistidas e toma a decisao
        return true;
    }

}