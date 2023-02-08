import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const canGoNext = email && password;


    const onSubmit = useCallback(() => {
        Alert.alert()
    }, [])

    const onChangeEmail = useCallback((text) => {
        setEmail(text)
    }, [])
    const onChangePassword = useCallback((text) => {
        setPassword(text)
    }, [])


    return (
        <View>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>이메일</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='이에일을 입력해주세요.'
                    onChangeText={onChangeEmail}></TextInput>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>비밀번호</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='비밀번호를 입력해주세요.'
                    onChangeText={onChangePassword}
                    secureTextEntry
                ></TextInput>
            </View>
            <View style={styles.buttonZone}>
                <Pressable onPress={onSubmit}
                    style={!canGoNext ?
                        styles.loginButton : [styles.loginButton, styles.loginButtonActive]}
                    disabled={!canGoNext}>
                    <Text style={styles.loginButtonText}>로그인</Text>
                </Pressable>
                <Pressable >
                    <Text >회원가입하기</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create(

    {
        inputWrapper: {
            padding: 20,
        },
        textInput: {
            padding: 5,
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
        label: {
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: 20,
        },
        loginButton: {
            backgroundColor: 'gray',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
            marginBottom: 10,
        },
        loginButtonActive: {
            backgroundColor: 'blue'
        },
        loginButtonText: {
            color: 'white',
            fontSize: 16,

        },
        buttonZone: {
            alignItems: 'center',

        },
    }
)

export default SignIn

