import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// React sourcemap 方法
// https://zhuanlan.zhihu.com/p/548297074
// https://juejin.cn/post/7045548554676338696
// React 编辑器调试
// https://juejin.cn/post/7169046885859082277#heading-5

debugger;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
