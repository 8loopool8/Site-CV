
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
    'index.csr.html': {size: 18615, hash: '54342db685bc034bad59ff62df3d9d6e74df318f07b35a89ee25cf8d4b719ef4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9940, hash: '85eed96b6dd069aeebb321d51585d7479c426829e2083553ec2c9902f4e8058e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 79649, hash: '0680f937a3f2939641fe19039af30da642694bd51c41e5299a25ae4c8f5a0300', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P4HKJYNO.css': {size: 54670, hash: 'vJlPOlr3U1U', text: () => import('./assets-chunks/styles-P4HKJYNO_css.mjs').then(m => m.default)}
  },
};
