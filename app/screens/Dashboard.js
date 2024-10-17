// app/screens/Dashboard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '../context/ThemeContext';

const Drawer = createDrawerNavigator();

const Dashboard = () => {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.title, { color: theme.textColor }]}>Dashboard</Text>
        </View>
    );
};

const CustomDrawer = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <View style={[styles.drawerContainer, { backgroundColor: theme.backgroundColor }]}>
            <TouchableOpacity onPress={toggleTheme}>
                <Text style={[styles.drawerItem, { color: theme.textColor }]}>Change Mode</Text>
            </TouchableOpacity>
            {/* Add more drawer items here if needed */}
        </View>
    );
};

// Renamed the Dashboard screen to avoid naming conflict
const AppDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <CustomDrawer />}
            screenOptions={{ headerShown: false }} // Hide header for all screens in drawer
        >
            <Drawer.Screen name="MainDashboard" component={Dashboard} /> {/* Changed name */}
        </Drawer.Navigator>
    );
};

export default AppDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'font-800',
        fontSize: 30,
    },
    drawerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
    },
    drawerItem: {
        fontFamily: 'font-700',
        fontSize: 20,
        marginBottom: 15,
    },
});
