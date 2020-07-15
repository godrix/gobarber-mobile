import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '@constants/colors';
import fonts from '@constants/fonts';

export const Container = styled(RectButton)`
  background: ${colors.actionColor};
  width: 100%;
  height: 60px;
  border-radius: 8px;
  margin-top:8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.RobotoSlabMedium};
  color: ${colors.infoColor};
  font-size: 21px;
`;
