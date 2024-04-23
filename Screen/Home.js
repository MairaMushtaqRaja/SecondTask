import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';

const Home = ({navigation}) => {
    const data = [
        { id: '1', text: 'In your desired domain' },
        { id: '2', text: 'Gives you hands on experience' },
    ];
    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <Image source={require('../assets/fav.png')} style={styles.logo} />
                <View style={styles.header}>
                    <Text style={styles.headerText}>Internee.pk</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Virtual Internship Platform</Text>
            </View>
            <ScrollView>
                <View style={styles.center}>
                    <View>
                        <Text style={styles.centerText}>Looking for a dream</Text>
                        <Text style={styles.centerText} >internship?</Text>
                    </View>
                </View>
                {/* Text Slider */}
                <View>
                    <Carousel
                        data={data}
                        renderItem={renderItem}
                        sliderWidth={300}
                        itemWidth={300}
                        loop={true}
                        autoplay={true}
                        autoplayInterval={3000}
                    />
                </View>
                <View>
                    <Image source={{ uri: "https://internee.pk/images/hero.webp" }} style={styles.image} />
                </View>
                <View>
                    <View style={styles.internee}>
                        <Text style={styles.interneeText}>Why Internee.pk?</Text>
                    </View>
                    <View style={styles.para}>
                        <Text style={styles.paraText}>
                            Internships every months Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.
                        </Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.browse} activeOpacity={0.7} onPress={()=>navigation.navigate('Internship')}>
                            <Text style={styles.browseText}>Browse Internship</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slider}>
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
                        <View style={styles.task}>
                            <Text style={styles.taskText}> Manage Project Via Own</Text>
                            <Text style={styles.taskPortal}> Task Portal</Text>
                        </View>
                        <View style={styles.welcome}>
                            <Text style={styles.welcomeText}>Welcome to internee.pk task portal. Where Tasks Transform Into Skills</Text>
                        </View>
                        <View>
                            <Image source={{ uri: "https://internee.pk/images/task.webp" }} style={styles.image} />
                        </View>

                        <View style={styles.slider2}>
                            <View style={styles.Swiper2}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/7671/7671832.png" }} style={styles.hand} />
                            </View>
                            <View style={styles.handText}>
                                <Text style={styles.handMain}>Hands Own Projects</Text>
                            </View>
                            <View style={styles.inner}>
                                <Text style={styles.innerText}>We believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.</Text>
                            </View>
                        </View>
                        <View style={styles.slider3}>
                            <View style={styles.Swiper2}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/7992/7992719.png" }} style={styles.hand} />
                            </View>
                            <View style={styles.handText}>
                                <Text style={styles.handMain}>Represent yourself</Text>
                            </View>
                            <View style={styles.inner}>
                                <Text style={styles.innerText}>More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.</Text>
                            </View>
                        </View>
                        <View style={styles.slider4}>
                            <View style={styles.Swiper2}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/7160/7160406.png" }} style={styles.hand} />
                            </View>
                            <View style={styles.handText}>
                                <Text style={styles.handMain}>SDLC Techniques</Text>
                            </View>
                            <View style={styles.inner}>
                                <Text style={styles.innerText}>Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.</Text>
                            </View>
                        </View>
                        <View style={styles.slider5}>
                            <View style={styles.Swiper2}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/12174/12174751.png" }} style={styles.hand} />
                            </View>
                            <View style={styles.handText}>
                                <Text style={styles.handMain}>Easy to Understand</Text>
                            </View>
                            <View style={styles.inner}>
                                <Text style={styles.innerText}>Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View style={styles.task}>
                            <Text  style={styles.taskText}>Guided Tutorials in</Text>
                            <Text style={styles.taskPortal}>Learning Management System</Text>
                        </View>
                        <View style={styles.welcome}>
                            <Text style={styles.welcomeText}>Want to learn something but don't know what's the roadmap or your english is not  good? That's why we launch LMS for you</Text>
                        </View>
                        <View>
                            <Image source={{ uri: "https://internee.pk/images/lms.png" }} style={styles.image} />
                        </View>
                        <View style={styles.slider2}>
                            <View style={styles.Swiper2}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/7672/7672231.png" }} style={styles.hand} />
                            </View>
                            <View style={styles.handText}>
                                <Text style={styles.handMain}>Sell Courses & Earn </Text>
                            </View>
                            <View style={styles.inner}>
                                <Text style={styles.innerText}> Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise.</Text>
                            </View>
                        </View>
                        <View style={styles.slider3}>
                            <View style={styles.Swiper2}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/8122/8122685.png" }} style={styles.hand} />
                            </View>
                            <View style={styles.handText}>
                                <Text style={styles.handMain}>Certification </Text>
                            </View>
                            <View style={styles.inner}>
                                <Text style={styles.innerText}> Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape..</Text>
                            </View>
                        </View>
                        <View style={styles.slider4}>
                            <View style={styles.Swiper2}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/14424/14424389.png" }} style={styles.hand} />
                            </View>
                            <View style={styles.handText}>
                                <Text style={styles.handMain}>Courses in Urdu</Text>
                            </View>
                            <View style={styles.inner}>
                                <Text style={styles.innerText}> Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home..</Text>
                            </View>
                        </View>
                        <View style={styles.slider5}>
                            <View style={styles.Swiper2}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/13456/13456908.png" }} style={styles.hand} />
                            </View>
                            <View style={styles.handText}>
                                <Text style={styles.handMain}>Practice Exercises</Text>
                            </View>
                            <View style={styles.inner}>
                                <Text style={styles.innerText}>Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence.</Text>
                            </View>
                        </View>
                    </View>

                    <View >
                        <View style={styles.dream}>
                            <Text style={styles.dreamText}>Unlock your potential with </Text>
                        </View>
                        <View style={styles.cutting}>
                            <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/6884/6884508.png"}} style={styles.cuttingImage}/>
                            <Text style={styles.cuttingText}>Cutting-edge projects</Text>
                        </View>
                        <View style={styles.cutting}>
                        <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/14424/14424389.png"}} style={styles.cuttingImage}/>
                            <Text style={styles.cuttingText}>Expert-led courses</Text>
                        </View>
                        <View style={styles.cutting}>
                        <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/5595/5595623.png"}} style={styles.cuttingImage}/>
                            <Text style={styles.cuttingText}>Direct pathways to your dream job</Text>
                        </View>
                        <View style={styles.cutting}>
                        <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/13013/13013930.png"}} style={styles.cuttingImage}/>
                            <Text style={styles.cuttingText}>Join a community driven by innovation</Text>
                        </View>
                        <View style={styles.cutting}>
                        <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/14034/14034290.png"}} style={styles.cuttingImage}/>
                            <Text style={styles.cuttingText}>Endless opportunities for growth</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.discover}>
                            <Text style={styles.disc}>Discover the heart and soul</Text>
                            <Text style={styles.discText}>behind our mission</Text>
                        </View>
                        <View style={styles.para1}>
                            <Text style={styles.paraText1}>Dive deeper into our story, values, and vision. Click here to explore what drives us and how we're shaping the future of IT and technology</Text>
                        </View>
                        <View >
                        <TouchableOpacity style={styles.embrack} activeOpacity={0.7} onPress={()=>navigation.navigate('About')}>
                            <Text style={styles.embrackText}>Embarck on a  Journey</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>

            </ScrollView >
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7ede2",
        width: "100%",
        height: "100%"
    },
    logo: {
        width: 50,
        height: 50,
        marginLeft: "7%",
        marginTop: "10%"
    },
    header: {
        marginTop: "10%",
        marginLeft: "3%"
    },
    headerText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#43a724"
    },
    footer: {
        marginTop: "-7%",
        marginLeft: "22%"
    },
    footerText: {
        fontSize: 10,
        color: "blue"
    },
    upper: {
        flexDirection: "row",
        marginTop: "6%"
    },
    centerText: {
        color: "black",
        marginLeft: "13%",
        fontWeight: "bold",
        fontSize: 22
    },
    main: {
        width: 160,
        height: 160,
        marginLeft: "5%"
    },
    center: {
        marginTop: "12%",
    },
    item: {
        marginLeft: "18%"
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#43a724"
    },
    image: {
        width: 300,
        height: 300,
        marginTop: "8%",
        marginLeft: "11%"
    },
    internee: {
        marginTop: "12%",
        marginLeft: "20%"
    },
    interneeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#43a724"
    },
    para: {
        marginTop: "6%",
        marginLeft: "8%",
        marginRight: "8%"
    },
    paraText: {
        fontSize: 15,
        fontWeight: "normal"
    },
    browse: {
        marginTop: "7%",
        marginLeft: "20%",
        marginBottom: "5%",
        width: 250,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#43a724"
    },
    browseText: {
        marginTop: "5%",
        marginLeft: "23%",
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff"
    },
    slider: {
        width: 370,
        height: 330,
        marginTop: "4%",
        marginLeft: "6%",
        backgroundColor: "#43a724",
        borderRadius: 10,
        marginBottom: "5%"
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
    task: {
        marginTop: "2%",
        marginLeft: "8%"
    },
    taskText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    taskPortal: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#43a724"
    },
    welcome: {
        marginTop: "5%",
        marginLeft: "8%",
        marginRight: "12%",
        marginBottom: "5%",
    },
    welcomeText: {
        fontSize: 15,
        fontWeight: "normal"
    },
    slider2: {
        width: 280,
        height: 250,
        marginTop: "18%",
        marginLeft: "15%",
        backgroundColor: "#43a724",
        borderRadius: 10,
        marginBottom: "5%"
    },
    Swiper2: {
        width: 90,
        height: 90,
        marginTop: "-18%",
        marginLeft: "11%",
        backgroundColor: "#fff",
        borderRadius: 50,
        marginBottom: "5%",

    },
    slider3: {
        width: 280,
        height: 250,
        marginTop: "11%",
        marginLeft: "15%",
        backgroundColor: "#43a724",
        borderRadius: 10,
        marginBottom: "5%"
    },
    slider4: {
        width: 280,
        height: 250,
        marginTop: "11%",
        marginLeft: "15%",
        backgroundColor: "#43a724",
        borderRadius: 10,
        marginBottom: "5%"
    },
    slider5: {
        width: 280,
        height: 250,
        marginTop: "11%",
        marginLeft: "15%",
        backgroundColor: "#43a724",
        borderRadius: 10,
        marginBottom: "5%"
    },
    hand: {
        width: 70,
        height: 70,
        marginTop: "11%",
        marginLeft: "12%"
    },
    handText: {
        marginTop: "2%",
        marginLeft: "16%"
    },
    handMain: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    },
    inner: {
        marginTop: "6%",
        marginLeft: "8%",
        marginRight: "8%"
    },
    innerText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#f7ede2"
    },
    dream:{
        marginLeft:"8%",
        marginTop:"2%"
    },
    dreamText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#43a724"
    },
    cutting:{
        marginLeft:"6%",
        marginTop:"6%",
        flexDirection:"row",
      
    },
    cuttingText:{
        fontSize:15,
        fontWeight:"bold",
        marginLeft:"3%",
      
    },
    cuttingImage:{
        width:30,
        height:30
    },
    discover:{
        marginTop: "7%",
        marginLeft: "8%"
    },
    disc:{
        fontSize: 20,
        fontWeight: "bold",
    },
    discText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#43a724"
    },
    para1: {
        marginTop: "6%",
        marginLeft: "8%",
        marginRight: "18%",
        marginBottom:"7%"
    },
    paraText1: {
        fontSize: 15,
        fontWeight: "normal"
    },
    embrack: {
      
        marginLeft: "20%",
        marginBottom: "5%",
        width: 250,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#43a724"
    },
    embrackText: {
        marginTop: "5%",
        marginLeft: "16%",
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff"
    },

});