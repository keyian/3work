import React, {useState} from "react";
import {SafeAreaView, TextInput, StyleSheet} from 'react-native';
// Action sheet contains a list of actions. Each action should have a `title`
// string and `action` function property. A "Cancel" action is automatically
// added to the end of your list of actions. You must also provide the
// closeOverlay function that this component will call to request that the
// action sheet be closed.
export function TextBar(props) {
    const {text, setText, placeholder} = props;


    return (
        <SafeAreaView>
            <TextInput 
            style={styles.input}
            onChangeText={setText} 
            value = {text}
            placeholder={placeholder} />
        </SafeAreaView>
        
    );
    
      
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 300
    },
  });