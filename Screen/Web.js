import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity ,Linking} from 'react-native'
import React from 'react'

const Web = ({ navigation }) => {
    const htmlForm = () => {
        const htmlFormUrl = "https://forms.gle/XmQbTNBEqvkkPRoW6";
        Linking.openURL(htmlFormUrl);
    };
    const reactForm = () => {
        const reactFormUrl = "https://forms.gle/K9sVisT1V21KYWMr6";
        Linking.openURL(reactFormUrl);
    };
    const wordPressForm = () => {
        const wordFormUrl = "https://forms.gle/aMqphaY6tr6Dw49E6";
        Linking.openURL(wordFormUrl);
    };
    const angularForm = () => {
        const angularFormUrl = "https://forms.gle/EHjfdEavX71N6ZTh6";
        Linking.openURL(angularFormUrl);
    };
    const netcoreForm = () => {
        const netFormUrl = "https://forms.gle/ZyHtDMMZzamuZKG38";
        Linking.openURL(netFormUrl);
    };
    const nextForm = () => {
        const nextFormUrl = "https://forms.gle/fVM7DTrHNbv2CRbB6";
        Linking.openURL(nextFormUrl);
    };
    const djangoForm = () => {
        const djangoFormUrl = "https://forms.gle/8aGqkDo8f7fUypWM9";
        Linking.openURL(djangoFormUrl);
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
                        <Text style={styles.html}> HTML CSS JS Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={htmlForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/React.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}>  React  Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={reactForm} >
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://seeklogo.com/images/W/wordpress-icon-logo-45667D3313-seeklogo.com.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}> WordPress  Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={wordPressForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/angular.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}> Angular  Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={angularForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/netcore.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}>.Net  Core  Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={netcoreForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Html2}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/NextJS.png" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}> Next  JS  Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={nextForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.HtmlLast}>
                    <View>
                        <Image source={{ uri: "https://internee.pk/images/logos/django.jpg" }} style={styles.Image} />
                    </View>
                    <View>
                        <Text style={styles.html}> Django  Internship</Text>
                        <Text style={styles.htmlText}>Remote Internship</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.htmlButton} activeOpacity={0.7} onPress={djangoForm}>
                            <Text style={styles.htmlButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Web

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
    Html: {
        flexDirection: "row",
        marginTop: "12%",
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
