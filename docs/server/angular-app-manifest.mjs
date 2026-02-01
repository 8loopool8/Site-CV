
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
    'index.csr.html': {size: 18593, hash: 'a9b98d08261db38ae8100249097962dad4db2ae1f8f0dd806a3410076c1f4b10', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: '7028e9c9a4e153ba3e6b71d61c6106e44e391a3b57a90ae8dc6df4baa1861101', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 72697, hash: '5bb21916acfbfa547bc962eb232dc1f13f581619debde20ff21218814307df7b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2ZDAMMVA.css': {size: 53369, hash: '2sHZEyY4jrY', text: () => import('./assets-chunks/styles-2ZDAMMVA_css.mjs').then(m => m.default)}
  },
};
