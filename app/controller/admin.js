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
        ctx.body = res;
    }
}

module.exports = AdminController;