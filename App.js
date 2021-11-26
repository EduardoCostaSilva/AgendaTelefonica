import React from 'react';

import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const dados = [
    {
      id: 1,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
    {
      id: 2,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
    {
      id: 3,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
    {
      id: 4,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
    {
      id: 5,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
    {
      id: 6,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
    {
      id: 7,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
    {
      id: 8,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
    {
      id: 9,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
    {
      id: 10,
      nome: 'Josefino',
      telefone: '(67) 4002-8922',
      foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    },
  ];

  

  const renderItem = ({item}) => {
    return (
      <View style={{marginRight: 5, flexDirection: 'row', marginBottom: 15}}>
        <Image
          style={styles.ContainerFlatListImage}
          source={{uri: item.foto}}
        />
        <View style={{alignSelf: 'center', marginLeft: 10}}>
          <Text style={{alignSelf: 'flex-start', marginRight: 10}}>
            {item.nome}
          </Text>
          <Text style={{alignSelf: 'center', marginRight: 10}}>
            {item.telefone}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      <Text style={{marginBottom: 5}}>Agenda Telefônica</Text>

      <FlatList
        data={dados}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
 
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  ContainerFlatListImage: {
    height: 50,
    width: 50,
    //backgroundColor:'blue',
    borderRadius: 50,
    marginRight: 5,
  },
  Nome: {
    fontSize: 12,
    alignSelf: 'center',
  },
});

export default App;
