import styled from 'styled-components/native';
import fonts from '@constants/fonts';

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

export const CreateAccount = styled.TouchableOpacity``;
export const CreateAccountText = styled.Text``;