import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {InputProps} from '@interfaces/components'
import colors from '@constants/colors'
import { Container, TextInput } from './styles';

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  return (
    <Container>
      <Icon name={icon} size={20} color={colors.placeholderTextColor}/>
      <TextInput
      placeholderTextColor={colors.placeholderTextColor}
      keyboardAppearance={'dark'}
      {...rest}/>
    </Container>
  );
};

export default Input;
