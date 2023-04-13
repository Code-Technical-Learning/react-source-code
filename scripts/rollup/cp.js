const fs = require('fs');
const path = require('path');

const buildReactPath = 'build/node_modules/react/umd';
const buildReactDomPath = 'build/node_modules/react-dom/umd';
const targetPath = 'debugger/public';

fs.cpSync(path.join(process.cwd(), buildReactPath), targetPath, {
  recursive: true,
});
fs.cpSync(path.join(process.cwd(), buildReactDomPath), targetPath, {
  recursive: true,
});
