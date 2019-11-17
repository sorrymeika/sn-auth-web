const { Controller } = require("egg");

class TestController extends Controller {
    async info() {
        const { ctx } = this;
        const res = await ctx.service.test.test({ account: 'admin', password: '12345Qwert', app: 1 });
        ctx.body = {
            name: `hello test`,
            data: res
        };
    }
}

module.exports = TestController;