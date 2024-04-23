import { StyleSheet, Text, View,Image } from 'react-native'
import React ,{useEffect}from 'react'
import { useNavigation } from '@react-navigation/native'
const Splash = () => {
 const navigation=useNavigation();
 useEffect(() => {
  const splashTimeout = setTimeout(() => {
    navigation.navigate('SignUp'); 
  }, 3000);
  return () => clearTimeout(splashTimeout);
}, [navigation]);
  return (
    <View style={styles.background}>
      <Image source={require('../assets/fav.png')} style={styles.image}/>
      <View style={styles.header}>
        <Text style={styles.headerText}>Internee.pk</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Virtual Internship Platform</Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#43a724",
        width:"100%",
        height:"100%",
        
    },
    image:{
        width:150,
        height:150,
        marginTop:"55%",
        marginLeft:"30%",
       
    },
    header:{
        marginTop:"10%",
        marginLeft:"33%"
    },
    headerText:{
        fontSize:22,
        fontWeight:"bold"
    },
    footer:{
        marginTop:"5%",
        marginLeft:"22%"
    },
    footerText:{
        fontSize:17,
        fontWeight:"300",
        color:"blue"
    }
})