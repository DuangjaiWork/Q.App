import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const posts = [
  { id: 1, username: 'User 1', content: 'promo1', image: 'https://media.ttbbank.com/1/promotion/20460-content-desktop-th.jpg' },
  { id: 2, username: 'User 2', content: 'promo1', image: 'https://www.leesubsin.com/files/promotion2/20230822_hzrwoaed.jpg' },
  { id: 3, username: 'User 3', content: 'promo1', image: 'https://www.edrawsoft.com/templates/images/horizontal-promotion-banner.png' },
  { id: 4, username: 'User 4', content: 'promo1', image: 'https://www.shutterstock.com/image-vector/template-design-vector-illustration-horizontal-260nw-2226495671.jpg' },
  { id: 5, username: 'User 5', content: 'promo1', image: 'https://www.shutterstock.com/image-vector/sale-banner-template-design-260nw-487080769.jpg' },
  { id: 6, username: 'User 6', content: 'promo1', image: 'https://img.freepik.com/premium-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321980.jpg' }
];

const Item = ({ item }) => (
    <View style={{ flexDirection : 'row',  marginVertical : 10, paddingTop : 20, justifyContent : 'center'}}>
        <Image style={{ backgroundColor : 'white', borderRadius : 10, height : 120, width : 420, shadowColor : '#black', elevation:10}} source={{uri : item.image}}/>
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
