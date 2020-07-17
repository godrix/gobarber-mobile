import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import fonts from '@constants/fonts';
import colors from '@constants/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: ${fonts.RobotoSlabMedium};
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: ${fonts.RobotoSlabRegular};
`;

export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${colors.infoColor};
  border-top-width: 2px;
  border-color: #232129;
  padding: 16px 0 ${8 + getBottomSpace()}px;

  justify-content: center;
  align-content: center;
  flex-direction: row;
`;
export const CreateAccountText = styled.Text`
  color: ${colors.actionColor};
  font-size: 18px;
  font-family: ${fonts.RobotoSlabRegular};
  margin-left: 16px;
`;
