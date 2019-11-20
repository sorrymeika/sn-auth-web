const { Controller } = require("egg");

class AccountController extends Controller {
    async getMyAccount() {
        const { ctx } = this;
        const res = await ctx.service.admin.account.getMyAccount();
        ctx.body = res;
    }
}

module.exports = AccountController;