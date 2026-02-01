
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
    'index.csr.html': {size: 18593, hash: '70d35f34378ab377fe41192d3cfe6e3ff80609279157caacf9d1f1016b84dbdc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: '7579cbd33604317fb96342c9f89b5051e133143fac800e75ba5bece3e3c6d44f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 72571, hash: '57a709871e04c37474be2f00fd833fd7207cc64567396a3a4e7bdd3d8d2aede4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YV5COHNN.css': {size: 53257, hash: 'rnDKin3M1FA', text: () => import('./assets-chunks/styles-YV5COHNN_css.mjs').then(m => m.default)}
  },
};
