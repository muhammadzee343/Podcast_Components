import React, {PureComponent, useState} from 'react';
import {View, Text, Switch} from 'react-native';
import HeaderContainer from './src/Components/HeaderContainer';
import BackArrowIcon from './src/Assets/icons/BackArrow';
import MenuIcon from './src/Assets/icons/MenuIcon';
import SearchIcon from './src/Assets/icons/SearchIcon';
import MessageBoxIcon from './src/Assets/icons/MessageBoxIcon';
import GoogleIcon from './src/Assets/icons/GoogleIcon';
import HeadingContainer from './src/Components/HeadingContianer';
import OptionContainer from './src/Components/OptionContainer';
import CustomTextInput from './src/Components/CustomTextinput';
import SquareButton from './src/Components/SquareButton';

const CustomSwitch = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#81b0ff' : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
const SquareButtOnClickAction = props => {
  return console.log('Button Press');
};

class App extends PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderContainer
          leftIcon={<BackArrowIcon iconColor="white" />}
          dynamicTitle="Events"
          rightInnerIcon={<MenuIcon iconColor="gray" />}
          rightIcon={<SearchIcon iconColor="gray" />}
        />

        <View
          style={{
            backgroundColor: '#d7ded9',
            flex: 0.2,
            justifyContent: 'center',
          }}>
          <HeadingContainer title="Title" subtitle="subtitle" />
        </View>

        <View
          style={{
            backgroundColor: 'blue',
            height: 40,
          }}>
          <OptionContainer
            // leftIcon={<BackArrowIcon iconColor="white" />}
            dynamicTitle="Private section"
            rightIcon={<CustomSwitch />}
          />
        </View>

        {/* <View
          style={{
            backgroundColor: 'blue',
            height: 40,
          }}> */}
        <CustomTextInput
          placeHolder="Email"
          leftIcon={<MessageBoxIcon iconColor="white" />}
        />
        {/* </View> */}

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 30,
          }}>
          <SquareButton
            title="Next"
            onPress={SquareButtOnClickAction()}
            // borderRadius={30}
            width="60%"
            GoogleButton
            leftButtonIcon={<GoogleIcon />}
          />
        </View>
      </View>
    );
  }
}

export default App;
