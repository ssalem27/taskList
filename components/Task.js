import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



const Task = (props) => {

    const [state, setState] = useState(false);
    const toggleCheck = () => {
        setState(!state);
    }

    return (
        <View style = {styles.item}>
                <TouchableOpacity style={styles.checkmark} onPress={() => toggleCheck()}>
                    {state ? <View style ={styles.checked} ></View> : <View style={styles.unchecked}></View>}
                </TouchableOpacity>

                <Text style = {styles.itemText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        marginVertical: 10,
        backgroundColor: '#A0B6FF',
        padding: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#000',
        borderWidth:1,
    },
    checkmark:{
        backgroundColor: '#fff',
        width: 22,
        height: 22,
        borderRadius: 22,
        flexDirection: "row",
        paddingHorizontal:2,

    },
    checked:{
        backgroundColor: '#A0B6FF',
        width: 18,
        height: 18,
        borderRadius: 18,
        borderColor:"#000",
        borderWidth:1,
        alignSelf:"center",
    },
    unchecked:{
        backgroundColor: '#000',
        width: 18,
        height: 18,
        borderRadius: 18,
        opacity:0,
    },
    itemText:{
        paddingHorizontal: 5,
    },
});

export default Task;