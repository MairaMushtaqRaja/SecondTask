import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity ,Linking} from 'react-native'
import React from 'react'

const Internship = ({navigation}) => {
    const securityForm = () => {
        const securityFormUrl = "https://forms.gle/5sN5DA6NQZEHZB9f9";
        Linking.openURL(securityFormUrl);
    };
    const cloudForm = () => {
        const cloudFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfuyq_LSLbiHml7NlnsgvFKBHIa1iuOvJ4y3FGH0hLpFCSOpA/closedform?pli=1";
        Linking.openURL(cloudFormUrl);
    };
    return (
        <ScrollView style={styles.container}>
            <View>
                <View>
                    <View style={styles.internee}>
                        <Text style={styles.interneeText}>Featured Internships</Text>
                    </View>
                    <View style={styles.outer}>
                        <Text>Embark on your journey towards success </Text>
                    </View>
                </View>
                <View style={styles.web}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/jobs/FrontEnd.webp" }} style={styles.image}></Image>
                    </View>
                    <View >
                        <Text style={styles.webText}>Web Development</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>navigation.navigate('Web')}>
                            <Text style={styles.buttonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mob}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/jobs/Mobile%20App%20Developer.webp" }} style={styles.image}></Image>
                    </View>
                    <View >
                        <Text style={styles.mobText}>App Development</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.mobButton} activeOpacity={0.7} onPress={()=>navigation.navigate('Mobile')}>
                            <Text style={styles.mobButText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.web2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/jobs/hack.webp" }} style={styles.image}></Image>
                    </View>
                    <View >
                        <Text style={styles.webText}>   Cyber Security</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={securityForm} >
                            <Text style={styles.buttonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mob}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/jobs/logo-designer-working-computer-desktop.webp" }} style={styles.image}></Image>
                    </View>
                    <View >
                        <Text style={styles.mobText}> Graphic Designer</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.mobButton} activeOpacity={0.7} onPress={()=>navigation.navigate('Graphic')}>
                            <Text style={styles.mobButText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.web2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/jobs/cloud.webp" }} style={styles.image}></Image>
                    </View>
                    <View >
                        <Text style={styles.webText}> Cloud Computing</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={cloudForm}>
                            <Text style={styles.buttonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Internship

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7ede2",
        width: "100%",
        height: "100%"
    },
    internee: {
        marginTop: "20%",
        marginLeft: "22%"
    },
    interneeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#43a724"
    },
    outer: {
        marginTop: "2%",
        marginLeft: "13%"
    },
    web: {
        width: 300,
        height: 340,
        marginTop: "12%",
        marginLeft: "13%",
        backgroundColor: "#fff",
        borderRadius: 5,
        marginBottom: "5%",
        borderWidth: 15,
        borderColor: "#43a724"
    },
    image: {
        width: 200,
        height: 150,
        marginTop: "5%",
        marginLeft: "13%"
    },
    webText: {
        marginTop: "10%",
        marginLeft: "15%",
        fontSize: 20,
        color: "#43a724"
    },
    button: {
        marginTop: "8%",
        marginLeft: "20%",
        width: 150,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#43a724"
    },
    buttonText:{
        marginTop: "8%",
        marginLeft: "23%",
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff"
    },
    mob:{
        width: 300,
        height: 340,
        marginTop: "4%",
        marginLeft: "13%",
        backgroundColor: "#43a724",
        borderRadius: 5,
        marginBottom: "5%",
        borderWidth: 15,
        borderColor: "#fff" 
    },
    mobText:{
        marginTop: "10%",
        marginLeft: "15%",
        fontSize: 20,
        color: "#fff"
    },
    mobButton:{
        marginTop: "8%",
        marginLeft: "20%",
        width: 150,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#fff"
    },
    mobButText:{
        marginTop: "8%",
        marginLeft: "23%",
        fontSize: 15,
        fontWeight: "bold",
        color: "#43a724"
    },
    web2:{
        width: 300,
        height: 340,
        marginTop: "4%",
        marginLeft: "13%",
        backgroundColor: "#fff",
        borderRadius: 5,
        marginBottom: "5%",
        borderWidth: 15,
        borderColor: "#43a724"
    }
})