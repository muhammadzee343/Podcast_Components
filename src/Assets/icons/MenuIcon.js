import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MenuIcon = props => {
  return (
    <Svg height="20" width="20" viewBox="0 0 384 384">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M0 277.333h384V320H0zM0 170.667h384v42.667H0zM0 64h384v42.667H0z"
      />
    </Svg>
  );
};

export default MenuIcon;
