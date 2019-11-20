const { Service } = require("egg");

class AccountService extends Service {
    async getMyAccount() {
        const { ctx } = this;

        return {
            success: true,
            data: ctx.account
        };
    }
}

module.exports = AccountService;