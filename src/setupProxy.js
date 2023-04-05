const { createProxyMiddleware } = require('http-proxy-middleware');
// const proxy = {
//     target: 'https://mernproject-backend.onrender.com',
//     changeOrigin: true
// }
const proxy = {
  target: 'http://127.0.0.1:4000',
  changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/hello',
    createProxyMiddleware(proxy)
  );
};
module.exports = function(app) {
  app.use(
    '/getdata',
    createProxyMiddleware(proxy)
  );
};

module.exports = function(app) {
    app.use(
      '/about',
      createProxyMiddleware(proxy)
    );
  };

  module.exports = function(app) {
    app.use(
      '/signin',
      createProxyMiddleware(proxy)
    );
  };

  module.exports = function(app) {
    app.use(
      '/logout',
      createProxyMiddleware(proxy)
    );
  };

  module.exports = function(app) {
    app.use(
      '/register',
      createProxyMiddleware(proxy)
    );
  };