import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const HTMLRootElement = document.getElementById('root');

if (!HTMLRootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(HTMLRootElement);


root.render(createElement(App));