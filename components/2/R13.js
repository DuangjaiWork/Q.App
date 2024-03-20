import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const posts = [
  { id: 1, username: 'User 1', content: 'Teenoi Suki', image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LTjV4cPEzfJVa32mkrNZ0xISZMnVj18667McMRFlnYfULq5iyZ.jpg', location : 'Mingle Mall', queue : 'Waiting 6 more queues' },
  { id: 2, username: 'User 2', content: 'Sizzler', image: 'https://cdn.minorfood.com/uploaded/brand/content/15542617905ca4271ed05b8.jpg', location : 'Future Park Rangsit', queue : 'Waiting 2 more queues' },
];

const Item = ({ item }) => (
        <View style={{ flexDirection : 'row', marginLeft : 10, marginVertical : 10}}>
            <View style={{alignItems : 'flex-start', backgroundColor : 'white', borderRadius : 10, height : 100, width : 420, shadowColor : '#black', elevation:10, paddingLeft :20, flexDirection : 'row'}}>
                <Image style={{ width: 60, height: 60, borderRadius: 60 / 2 , marginTop : 20}} source={{uri : item.image}}/>
                <View style={{paddingLeft : 20, marginTop : 10}}>
                    <Text style={{ fontSize:22,color : "black"}}>{item.content}</Text>
                    <View style={{flexDirection : 'row'}}>
                        <FontAwesome name="location-arrow" size={15} color="grey" style={{ paddingTop : 5}}/>
                        <Text style={{ fontSize:18, color : "grey", paddingLeft : 10}}>{item.location}</Text>  
                    </View>
                    <View style={{flexDirection : 'row'}}>
                        <FontAwesome name="hourglass-half" size={15} color="#71BC98" style={{ paddingTop : 5}}/>
                        <Text style={{ fontSize:18, color : "#71BC98", paddingLeft : 10}}>{item.queue}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

const FlatListExample = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
        numColumns={1}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});

export default FlatListExample;