const { Controller } = require("egg");

class TestController extends Controller {
    async info() {
        const { ctx } = this;
        // const res = await ctx.service.test.test(ctx.request.query);
        ctx.body = {
            name: `hello world!`,
            // data: res
        };
    }
}

module.exports = TestController;