import React from 'react';
import '../../styles/Container.scss';

const Container = (props) => {
  return <div id='container'>{props.children}</div>;
};

export default Container;
