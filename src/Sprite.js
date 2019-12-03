import React from 'react';
import PropTypes from 'prop-types';
import spritePath from './styles/img/sprite.svg';

const Sprite = (props) => {
  return <svg className={props.className}>
    <use xlinkHref={`${spritePath}#${props.name}`}></use>
  </svg>;
};

Sprite.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Sprite;