class EnviarEmailDeNotificacao {

    executar(usuario) {
        // encaminha email informando que comportamento estranho foi identificado
        new Logger().logarEventoDeSeguranca('email de notificacao enviado devido a comportamento suspeito');
    }

}