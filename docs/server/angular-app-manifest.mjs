
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
    'index.csr.html': {size: 18593, hash: 'a9d1e6014495473bd5cd82784abe8430ee6e33ce55f1e5c0174684b1fe9538db', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: 'b649c58a7de736c4bb86fddb4656ff04613f97bcd9dae17cc976ce81a8c5a95b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 72218, hash: '743f7e79b03958062b62759868c5d20a018d930f3967fbbabce230d41b717bfd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3TCJORL4.css': {size: 54946, hash: 'nB1idHQbheQ', text: () => import('./assets-chunks/styles-3TCJORL4_css.mjs').then(m => m.default)}
  },
};
