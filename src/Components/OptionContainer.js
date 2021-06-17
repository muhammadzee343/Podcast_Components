import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OptionContianer = props => {
  return (
    <View style={styles.container}>
      {props.leftIcon ? (
        <View style={styles.leftIconConainer}>{props.leftIcon}</View>
      ) : null}
      <View style={styles.headerTitleContainer}>
        {props.dynamicTitle ? (
          <Text style={styles.headerTextStyle}>{props.dynamicTitle}</Text>
        ) : null}
      </View>
      <View style={styles.rightIconContainer}>
        {props.rightInnerIcon ? <Text>{props.rightInnerIcon}</Text> : null}
      </View>
      {props.rightIcon ? (
        <View style={styles.rightIconContainer}>{props.rightIcon}</View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: '#aaa',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  leftIconConainer: {
    width: '8%',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  headerTitleContainer: {
    width: '68%',
    // backgroundColor: 'green',
    height: 40,
    justifyContent: 'center',
    marginLeft: 10,
    // alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 17,
    // fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    color: 'white',
  },
  rightIconContainer: {
    width: '10%',
    // backgroundColor: 'red',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default OptionContianer;
