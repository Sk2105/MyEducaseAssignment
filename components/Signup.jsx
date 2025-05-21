import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function Signup({ navigation }) {
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        isAgency: 'Yes',
    });

    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.inner}>
                <Text style={styles.title}>Create your{'\n'}PopX account</Text>

                {[
                    { label: 'Full Name*', key: 'fullName' },
                    { label: 'Phone number*', key: 'phone' },
                    { label: 'Email address*', key: 'email' },
                    { label: 'Password *', key: 'password', secure: true },
                    { label: 'Company name', key: 'company' },
                ].map((field, idx) => (
                    <View key={idx} style={styles.inputWrapper}>
                        <Text style={styles.label}>{field.label}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={field.label.replace('*', '')}
                            placeholderTextColor="#aaa"
                            secureTextEntry={field.secure}
                            value={form[field.key]}
                            onChangeText={text => handleChange(field.key, text)}
                        />
                    </View>
                ))}

                <Text style={[styles.label, styles.labelMarginBottom]}>Are you an Agency?*</Text>
                <View style={styles.radioRow}>
                    {['Yes', 'No'].map((option, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={styles.radioItem}
                            onPress={() => handleChange('isAgency', option)}
                        >
                            <View style={[styles.radioCircle, form.isAgency === option && styles.radioSelected]} />
                            <Text style={styles.radioText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Account', {
                        ...form,
                    });
                }}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
    },
    inner: {
        padding: 24,
        paddingTop: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#000',
        marginBottom: 24,
    },
    inputWrapper: {
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        color: '#6C47FF',
        fontWeight: '600',
        marginBottom: 6,
    },
    labelMarginBottom: {
        marginBottom: 8,
    },
    input: {
        height: 48,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    radioRow: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 32,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#6C47FF',
        marginRight: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioSelected: {
        backgroundColor: '#6C47FF',
    },
    radioText: {
        fontSize: 14,
        color: '#000',
    },
    button: {
        backgroundColor: '#6C47FF',
        paddingVertical: 14,
        borderRadius: 6,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
