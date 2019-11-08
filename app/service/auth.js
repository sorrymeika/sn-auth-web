const { Service } = require("egg");

class AuthService extends Service {
    async login({ account, password, app }) {
        const { ctx } = this;
        const res = await this.app.authRPC.invoke('auth.login', [{ account, password, app }]);

        const { success, token, wtk } = res;
        console.log('login result:', res);
        if (success) {
            ctx.cookies.set('tk', token, {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false
            });
            ctx.cookies.set('aid', res.accountId, {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false
            });
            ctx.cookies.set('wtk', wtk, {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: false,
                signed: false
            });
            delete res.token;
        }

        return res;
    }
}

module.exports = AuthService;