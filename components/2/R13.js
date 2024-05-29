import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const posts = [
  { id: 1, username: 'User 1', content: 'Teenoi Suki', image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LTjV4cPEzfJVa32mkrNZ0xISZMnVj18667McMRFlnYfULq5iyZ.jpg', location: 'Mingle Mall', queue: 'Waiting 6 more queues' },
  { id: 2, username: 'User 2', content: 'Sizzler', image: 'https://cdn.minorfood.com/uploaded/brand/content/15542617905ca4271ed05b8.jpg', location: 'Future Park Rangsit', queue: 'Waiting 2 more queues' },
];

const Item = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemContent}>
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.content}</Text>
        <View style={styles.itemRow}>
          <FontAwesome name="location-arrow" size={15} color="grey" style={styles.icon} />
          <Text style={styles.itemLocation}>{item.location}</Text>
        </View>
        <View style={styles.itemRow}>
          <FontAwesome name="hourglass-half" size={15} color="#71BC98" style={styles.icon} />
          <Text style={styles.itemQueue}>{item.queue}</Text>
        </View>
      </View>
    </View>
  </View>
);

const ManualListExample = () => {
  return (
    <ScrollView style={styles.container}>
      {posts.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginVertical: 10,
  },
  itemContent: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 100,
    width: 420,
    shadowColor: '#000',
    elevation: 10,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
  },
  itemTextContainer: {
    paddingLeft: 20,
    marginTop: 10,
  },
  itemTitle: {
    fontSize: 22,
    color: 'black',
  },
  itemRow: {
    flexDirection: 'row',
  },
  icon: {
    paddingTop: 5,
  },
  itemLocation: {
    fontSize: 18,
    color: 'grey',
    paddingLeft: 10,
  },
  itemQueue: {
    fontSize: 18,
    color: '#71BC98',
    paddingLeft: 10,
  },
});

export default ManualListExample;
