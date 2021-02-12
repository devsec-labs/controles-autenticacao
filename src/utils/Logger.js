class Logger {

    logarEventoDeSeguranca(mensagem, informacoesExtras) {
        // exemplo puramente hipotetico, fazer uso de frameworks e de log melhor estruturado
        console.log(`[Security] - ${new Date()}: ${mensagem}`, informacoesExtras);
    }
    
}