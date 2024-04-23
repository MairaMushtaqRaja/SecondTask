import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
const About = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Image source={require('../assets/fav.png')} style={styles.logo} />
                </View>
                <View style={styles.internee}>
                    <Text style={styles.interneeText}>Who is Internee.pk?</Text>
                </View>
                <View style={styles.para}>
                    <Text style={styles.paraText}>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</Text>
                </View>
                <View style={styles.internee}>
                    <Text style={styles.interneeText}>Meet the Visionaries</Text>
                </View>
                <View style={styles.slider}>
                    <Image source={{ uri: "https://media.licdn.com/dms/image/D4D03AQE7ZZQeMNeGEw/profile-displayphoto-shrink_800_800/0/1709067469475?e=1718841600&v=beta&t=UbOvGLZr0XcIGsE0zlCw9ymoJa1Z7Sn0Zn0ewBZhzrc" }} style={styles.ceoImage} />
                    <View style={styles.ceo}>
                        <Text style={styles.ceoText}>Hammad Sheikh </Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.innerText}>As the Company Owner of Internee.pk and the Founder of Techvio Chats, I've had the privilege of witnessing over 60 clients experience firsthand the game-changing impact of AI  on  business goals.
                        </Text>
                    </View>
                </View>
                <View style={styles.slider2}>
                    <Image source={{ uri: "https://media.licdn.com/dms/image/D4D03AQGKgKZFgkYhsw/profile-displayphoto-shrink_200_200/0/1712925402452?e=1718841600&v=beta&t=5pMg85D8MuPPASyZ33OhN9PnDaQXk7vj0h7_FVuaux0" }} style={styles.ceoImage} />
                    <View style={styles.ceo}>
                        <Text style={styles.ceoText}>   Rayyan  Zain </Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.innerText}>Hi, I'm Rayyan Zian, a passionate Graphic/UI/UX Designer and Web Developer. With a strong blend of creativity and technical expertise, I'm dedicated to crafting digital experiences that leave a lasting impression.
                        </Text>
                    </View>
                </View>
                <View style={styles.skill}>
                    <View>
                        <Text style={styles.skillText}>Learn skills,</Text>
                    </View>
                    <View>
                        <Text style={styles.marketText}> Market will be yours</Text>
                    </View>
                </View>
                <View style={styles.slider3}>
                        <View style={styles.Swiper}>
                            <Swiper
                                showsButtons={false}
                                autoplay={true}
                                dot={<View style={{ backgroundColor: '#ccc', width: 10, height: 10, borderRadius: 10, margin: 2 }} />}
                                activeDot={<View style={{ backgroundColor: '#43a724', width: 10, height: 10, borderRadius: 10, margin: 2 }} />}>
                                <View>
                                    <Image source={{ uri: 'https://internee.pk/images/jobs/FrontEnd.webp' }} style={styles.sliderImage} />
                                    <View  >
                                        <Text style={styles.sliderTXT}>Frontend Internship</Text>
                                    </View>

                                </View>
                                <View >
                                    <Image source={{ uri: 'https://internee.pk/images/jobs/DataScience.webp' }} style={styles.sliderImage} />
                                    <View  >
                                        <Text style={styles.sliderTXT} >DevOps Internship</Text>
                                    </View>

                                </View>
                                <View>
                                    <Image source={{ uri: 'https://internee.pk/images/jobs/BackendDevelopment.webp' }} style={styles.sliderImage} />
                                    <View >
                                        <Text style={styles.sliderTXT}>Backend Internship</Text>
                                    </View>

                                </View>
                                <View>
                                    <Image source={{ uri: 'https://internee.pk/images/jobs/hack.webp' }} style={styles.sliderImage} />
                                    <View >
                                        <Text style={styles.sliderTXT}>CyberSecurity Internship</Text>
                                    </View>

                                </View>
                                <View>
                                    <Image source={{ uri: 'https://internee.pk/images/jobs/logo-designer-working-computer-desktop.webp' }} style={styles.sliderImage} />
                                    <View >
                                        <Text style={styles.sliderTXT}>Graphic Designing Internship</Text>
                                    </View>

                                </View>
                                <View>
                                    <Image source={{ uri: 'https://internee.pk/images/jobs/Mobile%20App%20Developer.webp' }} style={styles.sliderImage} />
                                    <View >
                                        <Text style={styles.sliderTXT}>Mobile App Internship</Text>
                                    </View>

                                </View>
                            </Swiper>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.std}>Student Voices</Text>
                        </View>
                        <View>
                            <Text style={styles.stdText}>Empowering Futures with Internee.pk</Text>
                        </View>
                    </View>
                    <View style={styles.slider1}>
                    <View style={styles.stud}>
                        <Text style={styles.ceoText}>   Rabia  Javed </Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.innerText}> Internee.pk is the best,most comprehensive 21st-century innovation for those student who's looking for internship and upgrade their skillset.Their project are tough but marked value
                        </Text>
                    </View>
                </View>
                <View style={styles.slider4}>
                    <View style={styles.stud}>
                        <Text style={styles.ceoText}>Razaullah  Sami </Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.innerText}> Internee.pk is the best,most comprehensive 21st-century innovation for those student who's looking for internship and upgrade their skillset.Their project are tough but marked value
                        </Text>
                    </View>
                </View>
                <View style={styles.slider4}>
                    <View style={styles.stud}>
                        <Text style={styles.ceoText}>  Nagina  Asif </Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.innerText}> Internee.pk is the best,most comprehensive 21st-century innovation for those student who's looking for internship and upgrade their skillset.Their project are tough but marked value
                        </Text>
                    </View>
                </View>
                <View style={styles.slider4}>
                    <View style={styles.stud}>
                        <Text style={styles.ceoText}> Kashan  Soomro </Text>
                    </View>
                    <View style={styles.inner}>
                        <Text style={styles.innerText}> Internee.pk is the best,most comprehensive 21st-century innovation for those student who's looking for internship and upgrade their skillset.Their project are tough but marked value
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7ede2",
        width: "100%",
        height: "100%"
    },
    logo: {
        width: 50,
        height: 50,
        marginLeft: "40%",
        marginTop: "20%"
    },
    internee: {
        marginTop: "7%",
        marginLeft: "17%"
    },
    interneeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#43a724"
    },
    para: {
        marginTop: "4%",
        marginLeft: "8%",
        marginRight: "10%"
    },
    paraText: {
        fontSize: 12,
        fontWeight: "normal"
    },
    slider: {
        width: 300,
        height: 300,
        marginTop: "26%",
        marginLeft: "13%",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: "5%",
        borderWidth: 16,
        borderColor: "#43a724"
    },
    ceo: {
        marginTop: "5%",
        marginLeft: "20%"
    },
    ceoText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#43a724"
    },
    ceoImage: {
        width: 150,
        height: 150,
        marginTop: "-25%",
        marginLeft: "24%",
        borderRadius: 100
    },
    inner: {
        marginTop: "3%",
        marginLeft: "8%",
        marginRight: "8%"
    },
    innerText: {
        fontSize: 12,
        fontWeight: "600",
        color: "black"
    },
    slider2: {
        width: 300,
        height: 300,
        marginTop: "20%",
        marginLeft: "13%",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: "5%",
        borderWidth: 17,
        borderColor: "#43a724"
    },
    skill: {
        flexDirection: "row",
        marginTop: "5%",
        marginLeft: "10%",
        marginBottom:"2%"
    },
    skillText:{
        fontSize: 19,
        fontWeight: "normal",
        color: "#43a724"
    },
    marketText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#43a724"
    },
    Swiper: {
        width: 300,
        height: 270,
        marginTop: "8%",
        marginLeft: "9%",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: "5%"
    },
    sliderImage: {
        width: 230,
        height: 160,
        marginTop: "8%",
        marginLeft: "11%"
    },

    sliderTXT: {
        marginTop: "5%",
        marginLeft: "24%",
        fontSize: 15,
        fontWeight: "bold",
        color: "#43a724"
    },
    slider3:{
        width: 370,
        height: 330,
        marginTop: "4%",
        marginLeft: "5%",
        backgroundColor: "#43a724",
        borderRadius: 10,
        marginBottom: "5%"
    },
    std:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#43a724" ,
        marginTop:"5%",
        marginLeft:"25%"
    },
    stdText:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#43a724",
        marginLeft:"7%"
    },
    slider1:{
        width: 300,
        height: 220,
        marginTop: "10%",
        marginLeft: "13%",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: "5%",
        borderWidth: 20,
        borderColor: "#43a724"
    },
    stud:{
        marginTop: "10%",
        marginLeft: "20%"
    },
    slider4:{
        width: 300,
        height: 220,
        marginTop: "5%",
        marginLeft: "13%",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: "5%",
        borderWidth: 20,
        borderColor: "#43a724"
    }
})