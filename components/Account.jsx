import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function Account() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Account Settings</Text>

            <View style={styles.profileContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=3' }} // Replace with actual image URL
                        style={styles.profileImage}
                    />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>📷</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.email}>lTz0l@example.com</Text>
                </View>
            </View>

            <Text style={styles.description}>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        padding: 20,
        marginTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
        color: '#000',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    imageContainer: {
        position: 'relative',
    },
    profileImage: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    badge: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        backgroundColor: '#6C47FF',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
    },
    textContainer: {
        marginLeft: 12,
    },
    name: {
        fontWeight: '700',
        fontSize: 16,
        color: '#000',
    },
    email: {
        color: '#444',
        fontSize: 13,
        marginTop: 2,
    },
    description: {
        fontSize: 13,
        color: '#555',
        lineHeight: 18,
        marginTop: 12,
    },
});

