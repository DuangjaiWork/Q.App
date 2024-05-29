import React, { useEffect, useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, Button, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import PostService from "../services/PostService";


export default function PostForm() {  
  const navigation = useNavigation();
  const route = useRoute();
  // RANDOM ID
  const [key, setKey] = useState( "_" + Math.random().toString(36).substring(2, 9) );
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  
  const onLoad = async () => {
    const { id } = route.params;
    if (id) {
      let post = await PostService.getItemDetail({"id":id});
      setKey(post.id);
      setName(post.name);
      setDescription(post.description.toString());
      setImage(post.image);
    }
    navigation.setOptions({ title: (id ? "edit" : "create") });    
  };
  useEffect(() => { onLoad();  }, []);

  const savePost = async () => {
    //A NEW ITEM
    let new_data = { id: key, name: name, description: description, image: image };
    const { id } = route.params;
    if(id){
      await PostService.updateItem(new_data);
    }else{
      await PostService.storeItem(new_data);
    }
    //REDIRECT TO
    navigation.navigate("Post");
  };

  // useLayoutEffect(() => {
  //   navigation.setOptions({ title: (id ? "edit" : "create") });
  // }, [navigation]);

  return (
    <KeyboardAvoidingView style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <Text style={{ fontSize : 20}}>Topic</Text>
        <View style={styles.letterbox}>
        <TextInput placeholder="Enter topic ..." value={name} onChangeText={(text) => setName(text)} />
        </View>
        <Text style={{ fontSize : 20}}>Description</Text>
        <View style={styles.letterbox}>
        <TextInput placeholder="Enter description ..." value={description} onChangeText={(text) => setDescription(text)} />
        </View>
        <Text style={{ fontSize : 20}}>Image URL</Text>
        <View style={styles.letterbox}>
        <TextInput placeholder="Enter image URL ..." value={image} onChangeText={(text) => setImage(text)} />
        </View>
      </ScrollView>
      <Button title="SAVE" color="#71BC98" onPress={savePost} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  letterbox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 16,
  },
});