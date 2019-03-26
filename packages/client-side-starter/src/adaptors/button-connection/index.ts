import { createElement } from 'react';
import { render } from 'react-dom';
import Button from '../../components/Button';

const node = document.querySelector('[data-webapp="button-connection"]')
const component = createElement(Button, {}, 'Hello World!')


const initialise = () => {
  return render(component, node)
}

export default initialise();
