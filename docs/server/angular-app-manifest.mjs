
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
    'index.csr.html': {size: 18615, hash: 'cef6060fef72326720202ad28c81a19bb0613f93729a0e8d7259f4b0e0d02e88', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: 'ba6a9bed4d646aa8723e1dff58b04827bf93a36439adaca57e78dcef0acb911d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79658, hash: '8eea80f887935efc92a774f94fd070910b92516790fd84f0bbddb17bcd551bf0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P4HKJYNO.css': {size: 54670, hash: 'vJlPOlr3U1U', text: () => import('./assets-chunks/styles-P4HKJYNO_css.mjs').then(m => m.default)}
  },
};
