class ReduzirONivelDeAcesso {

    executar(usuario) {
        // reduz o nivel de acesso do usuario tornando acoes criticas indisponiveis,
        // de forma temporaria ou permanente (ate que a acao seja desfeita por alguem)
        new Logger().logarEventoDeSeguranca('o nivel de acesso do usuario foi alterado devido a comportamento estranho identificado');
    }

}