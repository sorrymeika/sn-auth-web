const { Controller } = require("egg");

class AuthController extends Controller {
    async login() {
        const { ctx } = this;
        const payloadRule = {
            account: { type: 'string', required: true },
            password: { type: 'string', required: true },
            app: { type: 'number', required: true },
        };
        // 校验参数
        ctx.validate(payloadRule);

        const { account, password, app } = ctx.request.body;

        const res = await ctx.service.auth.login({
            account,
            password,
            app
        });
        ctx.body = res;
    }
}

module.exports = AuthController;