import React from 'react';
import {View,Text,StyleSheet,Button, TouchableOpacity} from 'react-native'

const Task = (props) => {
  return (
    <View style = {styles.item}>
      <View style = {styles.itemLeft}>
        <TouchableOpacity style = {styles.square} >
          <Text style = {styles.marked}>{props.isDone}</Text>
        </TouchableOpacity>
        <Text style = {styles.itemText}>
          {props.text
          }
        </Text>
      </View> 

     
    </View>
  );
}

const styles = StyleSheet.create(
  {
    item :{
      backgroundColor: '#809fff',
      padding : 15,
      borderRadius : 10,
      flexDirection : 'row',
      alignItems : 'center', 
      justifyContent : 'space-between',
      marginBottom : 10,
    },
    itemLeft :{
      flexDirection : 'row',
      alignItems : 'center',
      flexWrap : 'wrap',

    },
    square :{
      width : 24,
      height : 24,
      backgroundColor : '#4d79ff',
      //opacity : 1,
      borderRadius : 5, 
      marginRight : 15,
      justifyContent : 'center',
      alignItems : 'center',
    },
    marked :{
      fontWeight : 'bold',
      fontSize : 20,        
    },
    itemText :{
      maxWidth : '80%',

    },
    circular :{
      width : 12,
      height : 12,
      backgroundColor : '#4d79ff',
      borderRadius :6,

    },



  },

)



export default Task; 