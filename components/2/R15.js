import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const posts = [
  { id: 1, username: 'User 1', content: 'Teenoi Suki', image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LTjV4cPEzfJVa32mkrNZ0xISZMnVj18667McMRFlnYfULq5iyZ.jpg', location: 'Lotus Khlong 4', queue: 'Waiting 12 more queues' },
  { id: 2, username: 'User 2', content: 'Sizzler', image: 'https://cdn.minorfood.com/uploaded/brand/content/15542617905ca4271ed05b8.jpg', location: 'Central World', queue: 'Waiting 2 more queues' },
  { id: 3, username: 'User 3', content: 'BBQ Plaza', image: 'https://www.ichiangmaipr.com/wp-content/uploads/2018/12/c2e5c316817cfcaaaad91a0f7ed29cc2-600x450.jpg', location: 'Future Park Rangsit', queue: 'Waiting 3 more queues' },
  { id: 4, username: 'User 4', content: 'Domino Pizza', image: 'https://cdn.eatigo.com/eatigo_DominosPizzaBangkapi_20180719185843_5904.jpg', location: 'Central Ayyuthaya', queue: 'Waiting 0 more queues' },
  { id: 5, username: 'User 5', content: 'Cha Tra Mue', image: 'https://cdn.phonebooky.com/blog/wp-content/uploads/2022/10/26121240/Thai-Tea-Chatramue-1.jpg', location: 'Mingle Mall', queue: 'Waiting 0 more queues' }
];

const Item = ({ item }) => (
  <View style={styles.itemBackground}>
    <View style={styles.itemContainer}>
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
  itemBackground: {
    backgroundColor: 'grey',
    opacity: 0.4,
  },
  itemContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginVertical: 10,
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
