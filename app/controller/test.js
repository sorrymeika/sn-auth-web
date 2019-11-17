const { Controller } = require("egg");

class TestController extends Controller {
    async info() {
        const { ctx } = this;
        const res = await ctx.service.test.test('asdf', [1, 2]);
        ctx.body = {
            name: `hello test`,
            data: res
        };
    }
}

module.exports = TestController;