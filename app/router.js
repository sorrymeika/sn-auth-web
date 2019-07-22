module.exports = app => {
    const { router, controller } = app;
    router.get('/test', controller.test.info);
    router.get('/admin/login', controller.admin.login);
};