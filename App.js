import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, PanResponder, Image} from 'react-native';

/* const {width, height} = Dimensions.get('window') Puede ser window o squin (o algo asi) */


export default function App() {
  /*const [text, setText] = useState('Holis')
  const [submmit, setSubmit] = useState('')*/
  const [query, setQuery] = useState([])  

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(response => response.json())
    .then(data =>{
      setQuery(data)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return  <View style={styles.center}><Text> Cargando... </Text></View>
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={query}
        renderItem={({ item }) => 
        <Text style={styles.textoPersonajes}>Name: {item.name}. Nickname: {item.nickname}       
        </Text>}
        
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  img: {
    marginTop: 20,
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPersonajes: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  }
});



