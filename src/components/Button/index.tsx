import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonProps } from '@interfaces/components';
import colors from '@constants/colors';
import { Container, ButtonText } from './styles';

const Button: React.FC<ButtonProps> = ({ children, loading=false, ...rest }) => {
  return (
    <Container {...rest}>
      {
        loading
        ? <ActivityIndicator size="large" color={colors.infoColor} />
        : <ButtonText>{children}</ButtonText>
      }

    </Container>
  );
};

export default Button;
