import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, Button, FlatList, SafeAreaView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [carouselEntries, setCarouselEntries] = useState([
    { title: 'Playstation 5', image: require('./assets/ps5.png') },
    { title: 'XBox Series X', image: require('./assets/xbox.png') },
    { title: 'Nintendo Switch OLED', image: require('./assets/nintendo.png') },
  ]);

  const [listEntries, setListEntries] = useState([
    { title: 'Playstation 5', image: require('./assets/ps5.png'), price: 'R$ 5000,00' },
    { title: 'Playstation 5', image: require('./assets/ps5.png'), price: 'R$ 5000,00' },
    { title: 'Playstation 5', image: require('./assets/ps5.png'), price: 'R$ 5000,00' },
    { title: 'XBox Series X', image: require('./assets/xbox.png'), price: 'R$ 4500,00' },
    { title: 'XBox Series X', image: require('./assets/xbox.png'), price: 'R$ 4500,00' },
    { title: 'XBox Series X', image: require('./assets/xbox.png'), price: 'R$ 4500,00' },
    { title: 'Nintendo Switch OLED', image: require('./assets/nintendo.png'), price: 'R$ 4000,00' },
    { title: 'Nintendo Switch OLED', image: require('./assets/nintendo.png'), price: 'R$ 4000,00' },
    { title: 'Nintendo Switch OLED', image: require('./assets/nintendo.png'), price: 'R$ 4000,00' },
    { title: 'Final Fantasy 7 Rebirth', image: require('./assets/ff7.png'), price: 'R$ 400,00' },
    { title: 'Final Fantasy 7 Rebirth', image: require('./assets/ff7.png'), price: 'R$ 400,00' },
    { title: 'Final Fantasy 7 Rebirth', image: require('./assets/ff7.png'), price: 'R$ 400,00' },
    { title: 'Final Fantasy 7 Rebirth', image: require('./assets/ff7.png'), price: 'R$ 400,00' },
  ]);

  const PressableButton = ({ onPress, title, style }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    );
  }

  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.item, {borderWidth: 1, borderColor: 'black'}]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{ item.title }</Text>
        <PressableButton title="Comprar agora" 
            onPress={() => console.log(`Comprado: ${item.title}`)} 
            style={styles.button}/>
      </View>
    );
  }

  const renderSecondItem = ({item, index}) => {
    return (
      <View style={styles.secondItem}>
        <Image source={item.image} style={styles.secondImage} />
        <Text style={styles.price}>{ item.price }</Text>
        <Icon name="shopping-cart" size={30} color="#000" />
        <PressableButton title="Comprar agora" 
            onPress={() => console.log(`Comprado: ${item.title}`)} 
            style={styles.button}/>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <FlatList
          data={carouselEntries}
          renderItem={renderItem}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listEntries}
          renderItem={renderSecondItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'floralwhite', 
    borderRadius: 5, 
    height: 300, 
    padding: 5, 
    marginLeft: 10, 
    marginRight: 10,
    marginTop: 10,
    width: Dimensions.get('window').width - 20
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },  
  image: {
    width: 200, 
    height: 200,
    alignSelf: 'center'
  },
  title: {
    fontSize: 20
  },
  secondItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10, 
    marginRight: 10,
    marginTop: 10,
    width: Dimensions.get('window').width - 20
  },
  secondImage: {
    width: 50,
    height: 50
  },
  price: {
    fontSize: 20
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  carouselContainer: {
    flex: 1,
    borderWidth: 1
  },
  listContainer: {
    flex: 1
  }
});

export default App;