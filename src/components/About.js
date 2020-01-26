import React from 'react'
import { StyleSheet,View, Text, Image, TouchableOpacity, Linking } from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../images/neverthink.png')} style={styles.banner} />
            </View>
            <View>
            <Text>Mobile Developer Assingment.</Text>
            <Text>Done by Mostafa Hazareh.</Text>
            <TouchableOpacity 
            onPress={()=> Linking.openURL('http://mostafaportfolio.netlify.com')} 
            style={styles.link}
            >
                <Text style={{color:'green'}}>do you want to know more about me ? >></Text>
            </TouchableOpacity>    
            </View>
            

        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    banner:{
        width:400,
        height: 500
    },
    link:{
        position:'absolute',
        padding: 15,
        top:60,
        backgroundColor:'#eee',
    }
})