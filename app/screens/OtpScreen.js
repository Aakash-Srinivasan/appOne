// app/screens/OtpScreen.js
import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const OtpScreen = ({ navigation }) => {
    const { theme } = useTheme();
    const [otp, setOtp] = useState('');

    const handleOtpSubmit = () => {
        // Handle OTP submission
        navigation.navigate('Dashboard'); // Navigate to Dashboard
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.title, { color: theme.textColor }]}>Enter OTP</Text>
            <TextInput
                style={styles.input}
                placeholder="OTP"
                placeholderTextColor={theme.textColor}
                value={otp}
                onChangeText={(text) => setOtp(text)}
            />
            <Button title="Submit" onPress={handleOtpSubmit} />
        </View>
    );
};

export default OtpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontFamily: 'font-800',
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
});
