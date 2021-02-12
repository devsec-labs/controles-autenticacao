class LoginController {

    post(req, res) {
        const user = {};

        new ServicoDeLogin().logar(user);
    }

}