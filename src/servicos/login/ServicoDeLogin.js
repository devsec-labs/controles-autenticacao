class ServicoDeLogin {

    logar(usuario, ip) {
        // implementar novas regras, combinar com controles de limiting etc

        if (senhaIncorreta) {
            new DiversasTentativasDeSenhaIncorreta.registrar(usuario);            
        }

        if (ipUltimoLogin != ip && dataUltimoLogin < tempoDefinido) {
            new LogouDeDiferentesIpsEmCurtoPeriodo.registrar(usuario);            
        }

        // execucao dos controles proativos de seguranca
        this.executarControlesDeSeguranca(usuario);
    }

    executarControlesDeSeguranca(usuario) {
        // tambem podem ser definidas acoes para cada verificacao separadamente
        if (new DiversasTentativasDeSenhaIncorreta.verificar(usuario)
            || new LogouDeDiferentesIpsEmCurtoPeriodo.verificar(usuario)) {

                new ReduzirONivelDeAcesso.executar(usuario);
                new EnviarEmailDeNotificacao.executar(usuario);
                new SolicitarCriacaoDeNovaSenha(usuario);                
        }
    }

}