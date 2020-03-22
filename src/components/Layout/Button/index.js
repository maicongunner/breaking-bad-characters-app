import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyle } from './styles';

import { FaArrowLeft } from 'react-icons/fa';

function retornaIcon(icon) {
  switch (icon) {
    case 'return':
      return FaArrowLeft;
      break;
    default:
      return '';
  }
}

const Button = ({ textoBotao, classe, type, click }) => (
  <ButtonStyle type={type} className={classe || ''} onClick={click}>
    <FaArrowLeft size={10} color="rgb(72,127,90)" />
    <span>{textoBotao}</span>
  </ButtonStyle>
);

Button.defaultProps = {
  classe: '',
  type: 'button',
  click: null,
};

Button.propTypes = {
  textoBotao: PropTypes.string.isRequired,
  classe: PropTypes.string,
  type: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
