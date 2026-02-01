
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
    'index.csr.html': {size: 18615, hash: '4bd7416a68c5cf0475f1566ed3d9eea68325ae96d36303e5940ba5a56cc758f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: '6e7a705fd18fb0563a04f8ae6986f230d1c46862230ba45a7cc71f8f7f9379bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 78127, hash: '7b55a3dd8d6a0a5dfefd569d44c1a42d62508c29a7ad14c0babe7450b00d7583', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P4HKJYNO.css': {size: 54670, hash: 'vJlPOlr3U1U', text: () => import('./assets-chunks/styles-P4HKJYNO_css.mjs').then(m => m.default)}
  },
};
