import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const SignUp = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');

    const handleSignUp = () => {
        // Validate input fields
        let isValid = true;
        // First Name validation
        if (!firstName.trim()) {
            setFirstNameError('User name is required');
            isValid = false;
        } else {
            setFirstNameError('');
        }
        // Email validation
        if (!email.trim()) {

            setEmailError('Email is required');
            isValid = false;
        } else if (!email.includes('@gmail.com')) {
            setEmailError('Email must be a Gmail address');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Password validation
        if (!password.trim()) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (password.trim().length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            isValid = false;
        } else {
            setPasswordError('');
        }

        // Repeat Password validation
        if (password !== repeatPassword) {
            setRepeatPasswordError('Password do not match');
            isValid = false;
        } else {
            setRepeatPasswordError('');
        }

        if (isValid) {
            // Proceed with sign up logic
            // For now, navigate to HomeScreen
            navigation.navigate('Login');
        }
    }
    return (
        <View style={styles.background}>
            <View>
                <Image source={require('../assets/fav.png')} style={styles.image} />
            </View>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.name}>
                        <Text style={styles.emailColor}>Name</Text>
                        <TextInput
                            placeholderTextColor={'grey'}
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                            style={styles.input} />
                        {firstNameError ? <Text style={{ color: 'red',fontSize: 10, marginTop: "2%"  }}>{firstNameError}</Text> : null}
                    </View>
                    <View style={styles.email}>
                        <Text style={styles.emailColor}>Email Address</Text>
                        <TextInput

                            placeholderTextColor={'#43a724'}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.input} />
                        {emailError ? <Text style={{ color: 'red', fontSize: 10, marginTop: "2%" }}>{emailError}</Text> : null}
                    </View>
                    <View style={styles.Password}>
                        <Text style={styles.emailColor}>Password</Text>
                        <TextInput
                            placeholderTextColor={'#43a724'}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            style={styles.input} />
                        {passwordError ? <Text style={{ color: 'red', fontSize: 10, marginTop: "2%" }}>{passwordError}</Text> : null}
                    </View>
                    <View style={styles.confirm}>
                        <Text style={styles.emailColor}> Confirm Password</Text>
                        <TextInput
                            placeholderTextColor={'#43a724'}

                            secureTextEntry={true}
                            value={repeatPassword}
                            onChangeText={(text) => setRepeatPassword(text)}
                            style={styles.input} />
                        {repeatPasswordError ? <Text style={{ color: 'red', fontSize: 10, marginTop: "2%" }}>{repeatPasswordError}</Text> : null}
                    </View>
                    <View>
                        <TouchableOpacity style={styles.signin} activeOpacity={0.7} onPress={handleSignUp}>
                            <Text style={styles.signinText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.footerText2}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#43a724",
        width: "100%",
        height: "100%",
    },
    image: {
        width: 100,
        height: 100,
        marginTop: "15%",
        marginLeft: "35%"
    },
    header: {
        backgroundColor: "#F1FAEE",
        width: 330,
        height: 540,
        borderRadius: 30,
        marginLeft: "10%",
        marginTop: "7%"
    },
    input: {
        height: 40,
        marginTop: "-3%",
        marginRight: "13%",
        borderBottomColor: "#43a724",
        borderBottomWidth: 1,
        padding: 10,
        color: "#43a724"
    },
    email: {
        marginTop: "10%",
        marginLeft: "12%",
    },
    emailColor: {
        color: "black"
    },
    signin: {
        marginTop: "13%",
        marginLeft: "15%",
        backgroundColor: "#43a724",
        width: 230,
        height: 53,
        borderRadius: 50
    },
    signinText: {
        color: "#F1FAEE",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: "36%",
        marginTop: "5%"
    },
    text1: {
        color: "#43a724",
        fontSize: 18,
        fontWeight: "bold"
    },
    text: {
        marginLeft: "45%",
        marginTop: "7%",
        marginBottom: "3%"
    },
    footer: {
        marginTop: "10%",
        marginLeft: "18%",
        flexDirection: "row"
    },
    footerText: {
        fontWeight: "bold",
        fontSize: 15
    },
    footerText2: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#006400"
    },
    name: {
        marginTop: "15%",
        marginLeft: "12%",
    },
    Password: {
        marginTop: "10%",
        marginLeft: "12%",
    },
    confirm: {
        marginTop: "10%",
        marginLeft: "12%",
    }

})