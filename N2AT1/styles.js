import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 20,
    width: '90%',
    height: 50,
    paddingLeft: 14,

    fontSize: 18,

    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: 'gainsboro',
  },
  button: {
    marginTop: 10,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  taskList: {
    marginTop: 20,
    width: '90%',
  },
  taskContainer: {
    paddingLeft: 20,
    width: '100%',
    height: 70,
    backgroundColor: 'whitesmoke',
    borderRadius: 7,
    alignItems: 'left',
    justifyContent: 'center',
    elevation: 2,
    marginBottom: 10
  },
  taskTitle: {
    fontSize: 20,
  },
});

export default styles;