import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import PostService from "../services/PostService";

export default function PostDetail() {
    const navigation = useNavigation();
    const route = useRoute();   
    const [post, setPost] = useState({
        "id":"",
        "name":"",
        "description":"",
        "image":"",
    });     

    //DELETE POPUP    
    const deletePost = async () => {
        const { id } = route.params;
        //REMOVE
        await PostService.destroyItem({"id":id});
        //REDIRECT TO
        navigation.navigate("Post");
      }; 
    
    const confirmDelete = () => {    
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก", },
                { text: "ยืนยัน", onPress: () => { deletePost(); }, },
            ]
        );
    };

    // TOP RIGHT MENU
    const TopRightMenu = ({b})=>(
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity 
                onPress={() => { navigation.navigate("PostForm", { "id": b.id }); }}
                >
                <FontAwesome name="edit" size={30} />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => { confirmDelete(); }}
                >
                <FontAwesome name="trash" size={30} />
            </TouchableOpacity>
        </View>
    );
    const onLoad = async () => {      
        const { id } = route.params;
        let b = await PostService.getItemDetail({"id":id});
        setPost(b);    
        navigation.setOptions({ headerRight: () => ( <TopRightMenu b={b} /> ) });
    };
    useEffect(() => { onLoad(); }, []);
    // CONDITIONAL RENDERING
    if(Object.keys(post).length === 0 || !post.image){ return <View></View> }

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: post.image }} />
                </View>
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 30 }}> {post.name} </Text>
                <View style={{ flexDirection: "row", padding : 5 }}>
                    <Text style={{ color: "gray", fontSize: 20 }}>{post.description}</Text>
                </View>
            </View>            
        </View>
    );
}
