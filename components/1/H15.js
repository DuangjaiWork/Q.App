import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';

const posts = [
  { id: 1, username: 'User 1', content: 'National Park', image: 'https://www.charnveeresortkhaoyai.com/wp-content/uploads/2022/05/3-8-1536x1022.jpg.webp' },
  { id: 2, username: 'User 2', content: 'Public Service', image: 'https://img.jakpost.net/c/2018/12/12/2018_12_12_60748_1544628336._large.jpg' },
  { id: 3, username: 'User 3', content: 'Vaccine Ccenter', image: 'https://obs-phwebsite-prd.obs.ap-southeast-2.myhuaweicloud.com/psuv/20221209141523-1%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%84%E0%B8%8B%E0%B8%B5%E0%B8%99.jpg' },
  { id: 4, username: 'User 4', content: 'Restaurant', image: 'https://media.timeout.com/images/106001846/750/422/image.jpg' },
  { id: 5, username: 'User 5', content: 'Event', image: 'https://phuketeventcompany.b-cdn.net/wp-content/uploads/2021/06/Expert-Event-Management-Your-Trusted-Event-Planner-and-Organizer-in-Bangkok-1.jpg' },
  { id: 6, username: 'User 6', content: 'Bank / Service Center', image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_780x440_mobile.jpeg' },
  { id: 7, username: 'User 7', content: 'Hospital / Drugstore', image: 'https://www.bbhhospital.com/wp-content/uploads/2020/03/BBH-Hospital-Better-Being-Hospital.jpg' },
  { id: 8, username: 'User 8', content: 'Salon / Beauty', image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-01/240117-staff-skin-care-routines-social-2c85d8.jpg' },
  { id: 9, username: 'User 9', content: 'Transportation', image: 'https://www.20cube.com/wp-content/uploads/Choose-the-right-mode-of-transportation-for-your-cargo.jpg' },
  { id: 10, username: 'User 10', content: 'Hotel / Flight', image: 'https://www.sunderland.edu.hk/wp-content/uploads/2023/10/Blog-2-01.jpg' },
];

const Item = ({ item }) => (
        <View style={{ flexDirection : 'row', padding : 5, marginLeft : 10, marginVertical : 10}}>
            <View style={{justifyContent : 'center', alignItems : 'center', backgroundColor : 'white', borderRadius : 10, height : 120, width : 200, shadowColor : '#black', elevation:10}}>
                <Image style={{ marginTop : 10, width: 60, height: 60, borderRadius: 60 / 2 }} source={{uri : item.image}}/>
                <Text style={{marginBottom : 10,fontSize:20}}>{item.content}</Text>
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
        numColumns={2}
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