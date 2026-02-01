
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Site-CV/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Site-CV"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18593, hash: '41b233d89815e88d1b1f734decb5c38ad1059b712f0fc63c88be1e4272197662', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: '6cf6c9d7290931f45cf711a0268d3b0341f06a4c26ea1f74284b7be23cb41e59', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 72571, hash: '9485ae0b0fd2393fb66d424d64bf9ad6d42b3b4e1e7d9c6c7a14d28e6f52c731', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6ENDXU4L.css': {size: 53257, hash: 'VAeQYtdLEag', text: () => import('./assets-chunks/styles-6ENDXU4L_css.mjs').then(m => m.default)}
  },
};
