
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
    'index.csr.html': {size: 18593, hash: 'bb56b0d277ecb65bdfb6dca5da99c63a1d0498e66103c60b35f910db1eacab56', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: '2ef04d851efb0d62e606d63a160c92eb517667e0c52d4297c29acbf9a5b212d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 72571, hash: 'ef13fc140cb9d203814153f00b717c5f06e571f135caf5cc76cba95bac9b3bdd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MFIQG7GB.css': {size: 53257, hash: 'a5dYgYFX9tY', text: () => import('./assets-chunks/styles-MFIQG7GB_css.mjs').then(m => m.default)}
  },
};
