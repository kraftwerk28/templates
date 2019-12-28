import { createElement } from 'react';
import { render } from 'react-dom';

import App from './components/App';

const target = document.querySelector('body #root');
render(createElement(App), target);
