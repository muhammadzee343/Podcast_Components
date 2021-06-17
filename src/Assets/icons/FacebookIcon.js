import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FacebookIcon = props => {
  // console.log("props in user", props.SVGStrings)
  // let size = props.size ? props.size : 40;
  return (
    <Svg height="20" width="20" viewBox="0 0 155.139 155.139">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
      />
    </Svg>
  );
};

export default FacebookIcon;
