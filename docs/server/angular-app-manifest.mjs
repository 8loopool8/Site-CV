
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
    'index.csr.html': {size: 18615, hash: 'abab8a6a16d0eedefd46ea14ad6adbe34802bc03fc1ad48d5cc0ce0c7dd7c020', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: 'c8894082ed1c5c3c7aa6295c4cf49ecae70b33d6831d4525e09026507c3f5161', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79651, hash: '9ce8b6a7c0f33892d4462f2acef46a991a093973393032e5b2df5c17aa9609c8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TB445NHL.css': {size: 56385, hash: 'I9IOlEqqa2A', text: () => import('./assets-chunks/styles-TB445NHL_css.mjs').then(m => m.default)}
  },
};
