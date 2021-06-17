import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeadingContianer = props => {
  return (
    <View style={styles.container}>
      <Text style={[styles.headingStyle]}>{props.title}</Text>
      <Text style={[styles.subHeadingStyle]}>
        {props.subtitle ? props.subtitle : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingStyle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subHeadingStyle: {
    color: 'gray',
    fontSize: 15,
  },
});

export default HeadingContianer;
