import React from 'react';

interface Props {
  title: string;
  color?: string;
}

const Header = function (props: Props) {
  let color = props.color ?? 'blue';
  return <h2 style={{ textAlign: 'center', color }}>{props.title}</h2>;
};

export default Header;
