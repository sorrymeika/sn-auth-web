module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.test.info);
    router.get('/test', controller.test.info);

    router.post('/auth/login', controller.auth.login);

    router.post('/admin/account/getMyAccount', controller.admin.account.getMyAccount);
};