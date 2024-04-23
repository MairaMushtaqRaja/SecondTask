import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity,Linking } from 'react-native'
import React from 'react'

const Mobile = ({ navigation }) => {
    const flutterForm = () => {
        const flutterFormUrl = "https://forms.gle/68w3BG8PH1bCUcyD9";
        Linking.openURL(flutterFormUrl);
    };
    const reactNativeForm = () => {
        const reactNativeFormUrl = "https://forms.gle/MNDexrLfMXEQaX8d9";
        Linking.openURL(reactNativeFormUrl);
    };
    const swiftForm = () => {
        const swiftFormUrl = "https://forms.gle/FH4P3GX3ynVngdJz9";
        Linking.openURL(swiftFormUrl);
    };
    const androidForm = () => {
        const androidFormUrl = "https://forms.gle/17HotC3ojpphH3LNA";
        Linking.openURL(androidFormUrl);
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
                <View style={styles.Html}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/htmlcssjs-overview.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}>   Flutter Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={flutterForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/react-native.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}>React Native  Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={reactNativeForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/Swift.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}>    Swift   Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={swiftForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/andriod.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}>   Android   Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={androidForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Mobile

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7ede2",
        width: "100%",
        height: "100%"
    },
    internee: {
        marginTop: "30%",
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
    Html: {
        flexDirection: "row",
        marginTop: "22%",
        marginLeft: "8%"

    },
    Image: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    html: {
        marginTop: "3%",
        marginLeft: "3%",
        fontWeight: "bold",
        color: "#43a724",
        fontSize: 13
    },
    htmlText: {
        marginTop: "2%",
        marginLeft: "10%",
        fontWeight: "bold",
        color: "black",
        fontSize: 14
    },
    htmlButton: {
        marginTop: "10%",
        marginLeft: "10%",
        width: 100,
        height: 40,
        backgroundColor: "#43a724",
        borderRadius: 50
    },
    htmlButtonText: {
        marginTop: "8%",
        marginLeft: "12%",
        color: "#fff"
    },
    Html2: {
        flexDirection: "row",
        marginTop: "10%",
        marginLeft: "8%"
    },
HtmlLast:{
    flexDirection: "row",
    marginTop: "10%",
    marginLeft: "8%",
    marginBottom:"10%"
}
})
