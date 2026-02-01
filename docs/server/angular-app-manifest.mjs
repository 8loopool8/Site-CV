
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
    'index.csr.html': {size: 18615, hash: 'bc9ed5c801e3120a172c026e76a03ee1e4b90b2deb1e1112bca5f0e69aa9c110', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: 'ed74035e7f9c4d571449aba6b0415716000160d653e49ce00d10c2f22721c3e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79651, hash: 'b197924df7d14f36010611bd7930e8c5a529619cbfd9e74d06c0abc428ff3422', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P4HKJYNO.css': {size: 54670, hash: 'vJlPOlr3U1U', text: () => import('./assets-chunks/styles-P4HKJYNO_css.mjs').then(m => m.default)}
  },
};
