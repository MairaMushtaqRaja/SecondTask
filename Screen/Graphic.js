import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const Graphic = ({ navigation }) => {
    const photoshopForm = () => {
        const photoshopFormUrl = "https://forms.gle/GnT2d77oabgTdpR76";
        Linking.openURL(photoshopFormUrl);
    };
    const lllustratorForm = () => {
        const lllustratorFormUrl = "https://forms.gle/FcP4KrYYwziiAPd17";
        Linking.openURL(lllustratorFormUrl);
    };
    const autodeskForm = () => {
        const autodeskFormUrl = "https://forms.gle/jgyNXS6ds11SjPqx9";
        Linking.openURL(autodeskFormUrl);
    };
    const figmaForm = () => {
        const figmaFormUrl = "https://forms.gle/1FgEBPueAvf8HedV9";
        Linking.openURL(figmaFormUrl);
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
                        <Image source={{ uri: "https://internee.pk/images/logos/photoshop.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}> Photoshop Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={photoshopForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/ai.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}> lllustrator   Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={lllustratorForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/maya.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}>Autodesk   Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={autodeskForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/figma.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}>   Figma    Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={figmaForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Graphic

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
    HtmlLast: {
        flexDirection: "row",
        marginTop: "10%",
        marginLeft: "8%",
        marginBottom: "10%"
    }
})
