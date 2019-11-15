const { Service } = require("egg");

class AuthService extends Service {
    async login({ account, password, app }) {
        const { ctx } = this;
        const res = await this.app.authRPC.invoke('auth.login', [{ account, password, app }]);

        const { success, token, wtk } = res;
        if (success) {
            const cookieOptions = {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false
            };

            if (!/^(\d+\.\d+\.\d+\.\d+|localhost)$/.test(ctx.request.hostname)) {
                const parts = ctx.request.hostname.split('.');
                cookieOptions.domain = parts.slice(ctx.request.hostname.endsWith('.com.cn') ? -3 : -2).join('.');
            }

            ctx.cookies.set('tk', token, cookieOptions);
            ctx.cookies.set('aid', res.accountId, cookieOptions);
            ctx.cookies.set('wtk', wtk, cookieOptions);
            delete res.token;
        }

        return res;
    }
}

module.exports = AuthService;