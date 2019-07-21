const { registerConsumer } = require('sonorpc');

const rpcConsumer = registerConsumer({
    port: 3006
});

module.exports = {
    get rpc() {
        // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
        return rpcConsumer;
    },
};