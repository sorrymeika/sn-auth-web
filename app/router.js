module.exports = app => {
    const { router, controller } = app;
    router.get('/test', controller.test.info);
    router.post('/admin/login', controller.admin.login);
    router.post('/admin/verifyToken', controller.admin.verifyToken);
    router.post('/admin/testUpload', controller.admin.testUpload);
    router.get('/admin/testFile', controller.admin.testFile);
};