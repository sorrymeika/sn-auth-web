exports.mysql = {
    // 单数据库信息配置
    client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'dev',
        // 密码
        password: '12345Qwert',
        // 数据库名
        database: 'sn_auth',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
};

exports.keys = 'my-cookie-secret-key';

exports.logger = {
    level: 'INFO',
    dir: '/data/logs/sn-auth-web'
};

exports.security = {
    domainWhiteList: ['http://localhost:10020'],
    csrf: {
        enable: false
    }
};