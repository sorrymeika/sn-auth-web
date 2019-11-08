module.exports = app => {
    const { router, controller } = app;
    router.get('/test', controller.test.info);
    router.post('/auth/login', controller.auth.login);
};