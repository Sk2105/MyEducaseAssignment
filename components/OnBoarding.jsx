import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function OnBoarding({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Welcome to PopX</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Text>

        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.primaryButtonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.secondaryButtonText}>Already Registered? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA', // adjust based on your design
    justifyContent: 'flex-end',
  },
  bottomSection: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#6C47FF',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#E6DFFF',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#3D1D91',
    fontWeight: '700',
    fontSize: 14,
  },
});
