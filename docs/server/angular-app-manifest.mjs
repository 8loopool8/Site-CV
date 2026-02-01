
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
    'index.csr.html': {size: 18593, hash: '646439faa65ca68961e0d118cb2c1b9c5ad8f4c36c25e4fc5a0fc0f200c7bb32', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: '5afcb8293083afa204cbd86ec1a3daf4b17b3e67c26b5b5a6714daff7fbcc7a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 72218, hash: '5358c4dfe0406e7cc7e0734e1fe2935739f87685c422ce5e0cad81e7678f1488', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-242337EF.css': {size: 53231, hash: 'QlGLxCNYKnI', text: () => import('./assets-chunks/styles-242337EF_css.mjs').then(m => m.default)}
  },
};
