import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding:margin '>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttoContainer}>
                <TouchableOpacity onPress={() => { }} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Sign-Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#EEEEEE"
    },
    inputContainer: {
        width: '80 %'
    },
    input: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttoContainer: {
        width: "60%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: "#3A98B9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'

    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 700,
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: "#FFF1DC",
        marginTop: 5,
        borderColor: "#3A98B9",
        borderWidth: 2
    },
    buttonOutlineText: {

    },

})