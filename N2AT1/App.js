import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { useEffect, useState } from 'react';

export default function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  const saveTasks = async (allTasks) => {
    await AsyncStorage.setItem('tasks', JSON.stringify(allTasks));
  };

  const saveId = async (newId) => {
    await AsyncStorage.setItem('id', JSON.stringify(newId));
  };

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');

      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    };
    const loadId = async () => {
      const storedId = await AsyncStorage.getItem('id');

      if (storedId) {
        setId(JSON.parse(storedId));
      }
    };

    loadId();
    loadTasks();
  }, []);

  function addTask() {
    if (newTask.trim()) {
      const allTasks = [...tasks, { id: id, name: newTask }]
      const newId = id + 1
      setTasks(allTasks);
      setId(newId);
      setNewTask('');

      saveTasks(allTasks);
      saveId(newId);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tarefas</Text>

      <TextInput
        style={styles.textInput}
        placeholderTextColor={'silver'}
        placeholder='Add a new task'
        onChangeText={setNewTask}
        value={newTask}
      />

      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.taskList}
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{item.name}</Text>
          </View>
        )}
      />

    </View>
  );
}
