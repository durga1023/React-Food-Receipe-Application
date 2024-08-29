import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleSignIn = () => {
    // Implement your sign-in logic here
    // For demo purposes, let's just navigate to the main app screen
    navigation.navigate('AppScreen');
  };

  const handleRegister = () => {
    // Implement your registration logic here
    // For demo purposes, let's just navigate to the main app screen
    navigation.navigate('AppScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isNewUser ? 'Register' : 'Sign In'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={isNewUser ? handleRegister : handleSignIn}>
        <Text style={styles.buttonText}>{isNewUser ? 'Register' : 'Sign In'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsNewUser(!isNewUser)}>
        <Text style={styles.toggleText}>{isNewUser ? 'Already have an account? Sign In' : 'Create a new account'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleText: {
    color: '#555',
    textDecorationLine: 'underline',
  },
});

export default SignIn;
