import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        let isValid = true;
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
    if (isValid) {
        // Proceed with sign up logic
        // For now, navigate to HomeScreen
        navigation.navigate('Home');
    }

    }

    return (
        <View style={styles.background}>
            <View>
                <Image source={require('../assets/fav.png')} style={styles.image} />
            </View>
            <View style={styles.header}>
                <View style={styles.email}>
                    <Text style={styles.emailColor}>Email Address</Text>
                    <TextInput
                        placeholderTextColor={'#43a724'}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input} />
                    {emailError ? <Text style={{ color: 'red' , fontSize: 10, marginTop: "2%"}}>{emailError}</Text> : null}

                </View>
                <View style={styles.Password}>
                    <Text style={styles.emailColor}>Password</Text>
                    <View>
                    <TouchableOpacity style={styles.forget} onPress={() => Alert.alert('Forget Password', 'Reset your password')}>
                        <Text style={styles.forgetText}>Forgot?</Text>
                    </TouchableOpacity>
                </View>
                    <TextInput
                        placeholderTextColor={'#43a724'}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input} />
                    {passwordError ? <Text style={{ color: 'red', fontSize: 10, marginTop: "2%" }}>{passwordError}</Text> : null}
                </View>
                
               
                <View>
                    <TouchableOpacity style={styles.signin} activeOpacity={0.7} onPress={handleLogin}>
                        <Text style={styles.signinText}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text}>
                    <Text style={styles.text1}>or</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.signIn} activeOpacity={0.7}>
                        <Text style={styles.signInText}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('SignUp')}> 
                    <Text style={styles.footerText2}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

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
        height: 500,
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
        marginTop: "17%",
        marginLeft: "12%",
    },
    emailColor: {
        color: "black"
    },
    forget: {
        marginLeft: "70%",
        marginTop: "-7%"
    },
    forgetText: {
        color: "#43a724",
        fontWeight: "bold"
    },
    Password: {
        marginTop: "10%",
        marginLeft: "12%",

    },
    signin: {
        marginTop: "16%",
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
    signIn: {
        marginTop: "4%",
        marginLeft: "15%",
        borderWidth: 1,
        borderRadius: 50,
        width: 230,
        height: 53,
        borderColor: "#43a724"
    },
    signInText: {
        color: "#43a724",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: "16%",
        marginTop: "6%",

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
        marginLeft: "20%",
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
    }

})