//Portal.js

import reactDom from 'react-dom';

const ModalPortal = ({children}: any) => {
  const el = document.getElementById('modal');
  return reactDom.createPortal(children, el as Element);
};

export default ModalPortal;
