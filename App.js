import React, {useState} from "react";
import {
  Alert,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Keyboard,
  View,
  TouchableOpacity,
  Platform,
  ScrollView, Pressable
} from 'react-native';
import Task from './components/Task';
export default function App() {

  const [task, inputTask] = useState();
  const [taskList, inputTaskItems] = useState([]);

  const addTask = () => {
      Keyboard.dismiss();
      inputTaskItems([...taskList,task])
      inputTask(null);
  }

  const deleteTask = (index) =>{
    let listCopy = [...taskList];
    listCopy.splice(index,1);
    inputTaskItems(listCopy)
  }

  return (
      <View style={styles.container}>
        <View style ={styles.header}>
          <Text style ={styles.title}>Your Tasks</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style = {styles.inputWrap}>
              <TextInput  style = {styles.input} placeholder={'Enter your task'}
              value={task} onChangeText={text => inputTask(text)} onSubmitEditing={()=> addTask()} />

              {/*<TouchableOpacity onPress={() => addTask()}>
                <View style = {styles.buttonWrap}>
                  <Text style = {styles.buttonText}>+</Text>
                </View>
              </TouchableOpacity>*/}
            </KeyboardAvoidingView>

        </View>
        {(taskList.length < 1) ?
            <ScrollView
                contentContainerStyle={{
                  flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
            <Text style={styles.defaultText}>You're Free!</Text>
            </ScrollView>
          :
            <ScrollView
                contentContainerStyle={{
                  flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
          <View style = {styles.taskWrap}>
            <View style ={styles.tasks}>
              {taskList.map((item, index)=> {
                return (
                    <Pressable key = {index} onLongPress={() => deleteTask(index)}>
                      <Task text={item} />
                    </Pressable>)
              })
            }
            </View>
          </View></ScrollView>
        }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f0f0',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:50,
    paddingBottom: 10,
    paddingLeft: 30,
    justifyContent: 'space-between',
    backgroundColor: '#A0B6FF',
    height: 140,
    width: '100%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },


  defaultText:{
    paddingVertical:100,
    fontSize: 20,
    alignSelf: "center",
    color: '#000'
  },

  taskWrap: {
    paddingTop:10,
    paddingHorizontal:10,
  },

  tasks: {
    marginTop: 30,
   },

/*  buttonWrap: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  buttonText: {
   fontSize: 20,
   color: 'rgba(160, 182, 255, 1)',
  },*/

  inputWrap:{
    width: '60%',
    flexDirection: 'row',
    paddingLeft: 40,
    alignItems: 'center',

  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

} );
