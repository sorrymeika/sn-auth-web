const { Service } = require("egg");

class AuthService extends Service {
    login({ account, password, role }) {
        const { ctx } = this;
        return ctx.rpc.invoke('auth.login', [{ account, password, role }]);
    }
}

module.exports = AuthService;