import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';

const Tarefa = (props) => {
    return (
        <View style={styles.tarefa}>

            <View style={styles.caixinha}>
                <View style={styles.quadrado}></View>
                <Text style={styles.tarefaText}>{props.text}</Text>
            </View>
          
            <View style={styles.bolinha}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    tarefa: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    caixinha: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    quadrado: {
        width: 24,
        height: 24,
        backgroundColor: '#44C761',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    tarefaText: {
        maxWidth: '80%',
    },
    bolinha: {
        width: 16,
        height:16,
        borderColor: '#44C761',
        borderWidth: 2,
        borderRadius: 24,
    },

})

export default Tarefa;