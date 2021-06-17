import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const CustomTextInput = props => {
  const [value, onChangeText] = React.useState(props.value);

  return (
    <View style={{margin: 15}}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          width: '90%',
          backgroundColor: 'gray',
        }}>
        <View
          style={{
            height: 50,
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {props.leftIcon ? props.leftIcon : null}
        </View>
        <View style={{height: 50, width: '75%'}}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              onChangeText(text);
            }}
            placeholder={props.placeHolder}
            placeholderTextColor="#fff"
            keyboardType={props.keyboardType ? props.keyboardType : 'default'}
            value={value}
            editable={props.isEditable ? props.isEditable : true}
            autoCapitalize={
              props.autoCapitalize ? props.autoCapitalize : 'sentences'
            }
            autoCorrect={props.autoCorrect ? props.autoCorrect : true}
            autoFocus={props.autoFocus ? props.autoFocus : false}
            clearTextOnFocus={
              props.clearTextOnFocus ? props.clearTextOnFocus : false
            }
            keyboardAppearance={
              props.keyboardAppearance ? props.keyboardAppearance : 'default'
            }
            secureTextEntry={
              props.secureTextEntry ? props.secureTextEntry : false
            }
            textAlign={props.textAlign ? props.textAlign : 'left'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    color: '#fff',
  },
});

export default CustomTextInput;
