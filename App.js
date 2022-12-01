import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



function App(){

  return(

    <View style={styles.container}>
      <View>
        <Image source={{uri:"https://studio.uxpincdn.com/studio/wp-content/uploads/2022/02/sign-up-page-examples.png.webp"}} style={{width:300,height:300,}}/>
        <Text style={styles.text}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Enter your Email Address"/>
        <TextInput style={styles.input} placeholder="Enter your Password"/>
        <TouchableOpacity style={{marginTop:20,}}>
        <Button title="Sign Up " color="#D19AFA"/>

        </TouchableOpacity>
      </View>
    </View>

  )




}

export default App;


const styles = StyleSheet.create({
  container:{

    // backgroundColor:"pink",
    height:"100%",
    padding: 30,
  },
  input:{
    backgroundColor:"#E2C6F6",
    marginTop:10,
    padding:10,
  },
  text:{

    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10,
    color:"#D19AFA",


  }

})