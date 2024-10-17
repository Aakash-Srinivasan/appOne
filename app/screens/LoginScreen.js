import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Login = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={[styles.subTitle, { color: theme.textColor }]}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={theme.textColor}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={[styles.subTitle, { color: theme.textColor }]}>Mobile number</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={theme.textColor}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonColor }]} onPress={() => navigation.navigate('OtpScreen')}>
        <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Enter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonColor }]} onPress={toggleTheme}>
        <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Change mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'font-800', // Your custom font
    fontSize: 30,
    marginBottom: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  subTitle: {
    fontFamily: 'font-700', // Your custom font
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'font-700',
    fontSize: 18,
  },
});
