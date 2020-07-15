import { RectButtonProperties } from 'react-native-gesture-handler';
import { TextInputProps } from 'react-native';

export interface ButtonProps extends RectButtonProperties {
  children: string;
  loading?:boolean;
}

export interface InputProps extends TextInputProps{
  name:string;
  icon:string;
}
