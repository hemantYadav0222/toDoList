/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React ,{useState} from 'react';
 import {
   Keyboard,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';

 import Task from './components/Task'
 

 const App = () => {
   
  const [task, setTask] = useState('');
  const [taskItems ,setTaskItems] = useState([]);
  const [done ,setDone] = useState([]);
  const handleAddTask = () =>
  { 
      Keyboard.dismiss();
      if(task!=='')
      {
        setTaskItems([task,...taskItems,]);
        setDone(['',...done])
      }
      else
      {

      }
     // console.log(taskItems.length);
      setTask('');
     // console.log(taskItems,done);


  }
  const completeTask = (index) =>
  {
    let newArray = [...taskItems];
    let doneArray = [...done];
    let pos = newArray.indexOf(index);
    
    newArray.splice(pos,1);
    doneArray.splice(pos,1);
    setTaskItems([...newArray,index]);
    setDone([...doneArray,'✔️']);
    console.log(done);

  }
  
  

   
   return (
      < View style = {styles.container}>
        <View style = {styles.writeTaskWrapper}>
          
           
            <TextInput style = {styles.input} placeholder = "Write a task" onChangeText = {text => {setTask(text)}} value = {task}/>

            <TouchableOpacity onPress = {handleAddTask}>
              <View style = {styles.addWrapper}>
                <Text style = {styles.addText}>
                  +
                </Text>

              </View>
            </TouchableOpacity>
           
          

        </View>
        <View style = {styles.taskWrapper}>
        <Text style = {styles.title}>
          TODAY'S TASK
        </Text>
        <ScrollView>
        <View style = {styles.items}>
        {
          

          taskItems.map((item,index) => {
            return(<TouchableOpacity key = {index} onPress = {() => completeTask(item)}>
                 <Task text = {item} isDone = {done[index]}/>
            </TouchableOpacity>)
            
          } )
        } 
        
          </View>
        </ScrollView>
         
        </View>

      </View> 


   );
 };

 const styles = StyleSheet.create(
   {
    container : {
      flex :1,
      backgroundColor :"#efeff5",
    },
    taskWrapper : {
      paddingHorizontal : 10,
      
    },
    title : {
      padding : 10,
      fontSize : 12,
      fontWeight : 'bold',
      marginTop :20,
    },
    items : {
      marginTop : 10,
      marginBottom : 100,
      paddingHorizontal :15,
    },

    writeTaskWrapper :{
        
      width : '100%',
      flexDirection :'row',
      justifyContent : 'space-around',
      alignItems : 'center',
      padding : 10,
      marginTop : 50,
      
    

    },
input :{
  padding:10,
  width : '70%',
  backgroundColor : 'white',
  borderRadius : 15,
  borderColor : '#002db3',
  borderWidth : 2,
  height : 50,

},
addWrapper :{
  width : 50,
  height : 50,
  backgroundColor : '#4d79ff',
  borderRadius : 15,
  borderColor : '#002db3',
  borderWidth : 2,
  alignItems :'center'

},
addText :{
  fontSize : 30,
  color : '#c0c0c0',
},
     //we will write the styles here.
   }
 )

 export default App;
