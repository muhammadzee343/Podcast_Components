import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';

const SquareButton = props => {
  return (
    <Ripple
      rippleColor="gray"
      rippleDuration={1000}
      rippleOpacity={0.87}
      style={[
        props.leftButtonIcon
          ? props.GoogleButton
            ? [
                styles.squareButtonGoogleStyle,
                {width: props.width ? props.width : '80%'},
              ]
            : [
                styles.squareButtonFacebookStyle,
                {width: props.width ? props.width : '80%'},
              ]
          : [
              styles.squareButtonDefaultStyle,
              {width: props.width ? props.width : '80%'},
            ],
      ]}
      onPress={props.onPress}>
      {props.leftButtonIcon ? (
        <View
          style={{
            height: 50,
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'gray'
          }}>
          {props.leftButtonIcon}
        </View>
      ) : null}
      <Text
        style={[
          props.GoogleButton
            ? [styles.buttonStyle, {color: '#000'}]
            : [styles.buttonStyle, {color: '#fff'}],
        ]}>
        {props.title}
      </Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 17,
  },
  squareButtonDefaultStyle: {
    height: 50,
    width: '40%',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#e60292',
    borderRadius: 13,
    // paddingVertical: 10,
    flexDirection: 'row',
  },
  squareButtonFacebookStyle: {
    height: 50,
    width: '40%',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#3913c2',
    borderRadius: 13,
    // paddingVertical: 10,
    flexDirection: 'row',
  },
  squareButtonGoogleStyle: {
    height: 50,
    // width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 13,
    borderColor: '#fff',
    borderWidth: 1,
    // paddingVertical: 10,
    flexDirection: 'row',
  },
});

export default SquareButton;
