const { Service } = require("egg");

class AuthService extends Service {
    login({ account, password, role }) {
        const { ctx } = this;
        return ctx.rpc.invoke('auth.login', [{ account, password, role }]);
    }

    verifyToken(accountId, token) {
        const { ctx } = this;
        return ctx.rpc.invoke('auth.verifyToken', [accountId, token]);
    }
}

module.exports = AuthService;