
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
    'index.csr.html': {size: 18615, hash: '1ecd0158c90e6ca19c29bc0a251fadcb3dffebc428adcf739f26972414391b10', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: 'df289e1d6115693016c989d4de4ccd15b1c5a3ad51b89403176247580ca435b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79651, hash: '1f73e7ac9668fe0a2f1d63a3a6334f4e26b8fde804e9a41043341ca287aad81d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P4HKJYNO.css': {size: 54670, hash: 'vJlPOlr3U1U', text: () => import('./assets-chunks/styles-P4HKJYNO_css.mjs').then(m => m.default)}
  },
};
