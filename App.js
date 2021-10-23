import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import Tarefa from './components/tarefa';

export default function App() {
  const [tarefa, novaTarefa] = useState();
  const [tarefaItems, novaTarefaItem] = useState([]);

  const handleNovaTask = () =>{
   Keyboard.dismiss();
   novaTarefaItem([...tarefaItems, tarefa])
   novaTarefa(null);
  }
  
  const completaTarefa = (index) =>{
    let itemsCopia = [...tarefaItems];
    itemsCopia.splice(index, 1);
    novaTarefaItem(itemsCopia);
  }

  return (
    <View style={styles.container}>

      {/* Tarefas de Hoje */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.titulo}>O Que vou fazer hoje?</Text>
          <View style={styles.tarefas}>
            {
              tarefaItems.map((item, index)=>{
               return (
                 <TouchableOpacity onPress={() => completaTarefa()}>
                    <Tarefa key={index} text={item}/>
                 </TouchableOpacity>
               )
              })
            }
          </View>
      </View>

         {/* Nova Task */}
         <KeyboardAvoidingView 
         behavior={Platform.OS === "ios" ? "padding" : "height"} 
         style={styles.escrever}>
                <TextInput style={styles.input} placeholder={'Escreva o que você irá fazer'} value={tarefa} onChangeText={text => novaTarefa(text) }/>

                <TouchableOpacity onPress={() => handleNovaTask()} >
                  <View style={styles.novaTarefaBtn}>
                    <Text style={styles.novaTarefaText}>+</Text>
                  </View>
                </TouchableOpacity>

         </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00272B',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#82FF9D',
  },
  tarefas: {
    marginTop: 30,
  },
  escrever:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    width: 250,
    color: '#00272B',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  novaTarefaBtn:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  novaTarefaText:{
    color: '#00272B',
    fontSize: 50,
  },
});
