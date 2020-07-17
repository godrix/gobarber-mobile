import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import logo from '@assets/logo.png';
import colors from '@constants/colors';
import Input from '@components/Input';
import Button from '@components/Button';

import {
  Container,
  Title,
  CreateAccount,
  CreateAccountText,
} from '../SignIn/styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={logo} />
          <View>
            <Title>Crie sua conta</Title>
          </View>
          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Password" />
          <Button>Cadastrar</Button>
        </Container>
      </ScrollView>
      <CreateAccount
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={20} color={colors.actionColor} />
        <CreateAccountText>Voltar para o logon</CreateAccountText>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
