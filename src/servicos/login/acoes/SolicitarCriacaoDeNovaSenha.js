class SolicitarCriacaoDeNovaSenha {

    executar(usuario) {
        // reduz o nivel de acesso do usuario tornando acoes criticas indisponiveis,
        // de forma temporaria ou permanente (ate que a acao seja desfeita por alguem)
        new Logger().logarEventoDeSeguranca('foi solicitado ao usuario que uma nova senha seja criada');
    }

}