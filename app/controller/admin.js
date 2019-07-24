const { Controller } = require("egg");

class AdminController extends Controller {
    async login() {
        const { ctx } = this;
        const payloadRule = {
            account: { type: 'string', required: true },
            password: { type: 'string', required: true },
        };
        // 校验参数
        ctx.validate(payloadRule);

        const { account, password } = ctx.request.body;

        const res = await ctx.service.auth.login({
            account,
            password,
            role: 1
        });
        const { success, token } = res;
        console.log('login result:', res);
        if (success) {
            ctx.cookies.set('atk', token, {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false
            });
            ctx.cookies.set('aid', res.accountId, {
                maxAge: 24 * 365 * 60 * 60 * 1000,
                httpOnly: true,
                signed: false
            });
            delete res.token;
        }
        ctx.body = res;
    }

    async verifyToken() {
        const { ctx } = this;
        const atk = ctx.cookies.get('atk', {
            signed: false
        });
        const aid = ctx.cookies.get('aid', {
            signed: false
        });
        const res = await ctx.service.auth.verifyToken(aid, atk);

        if (res.success && res.role === 1) {
            ctx.body = { success: true, code: 1 };
        } else if (res.success) {
            ctx.body = { success: false, code: 10002, message: '账号无权限' };
        } else {
            ctx.body = res;
        }
    }
}

module.exports = AdminController;