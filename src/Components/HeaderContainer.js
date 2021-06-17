import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const HeaderContainer = props => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIconConainer}>
        {props.leftIcon ? props.leftIcon : null}
      </View>
      <View style={styles.headerTitleContainer}>
        {props.dynamicTitle ? (
          <Text style={styles.headerTextStyle}>{props.dynamicTitle}</Text>
        ) : null}
      </View>
      <View style={styles.rightIconContainer}>
        {props.rightInnerIcon ? <Text>{props.rightInnerIcon}</Text> : null}
      </View>
      <View style={styles.rightIconContainer}>
        {props.rightIcon ? <Text>{props.rightIcon}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: '#aaa',
    flexDirection: 'row',
  },
  leftIconConainer: {
    width: '10%',
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

export default HeaderContainer;
