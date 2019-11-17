const { Service } = require("egg");

class TestService extends Service {
    async test(args) {
        return this.app.authRPC.invoke('auth.login', args);
    }
}

module.exports = TestService;