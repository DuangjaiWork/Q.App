import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PostService from "../services/PostService";

export default function Post() {    
    const navigation = useNavigation(); 
    const [posts, setPosts] = useState([
        { id : 1, name : "Hydrating Gentle Cleanser", description : 390, image : "https://pbs.twimg.com/media/GI72f_1a4AATx1X?format=jpg&name=900x900",},
        { id : 2, name : "Green Tea Calming Cream", description : 620, image : "https://pbs.twimg.com/media/GJQOKl3a0AAvfWW?format=jpg&name=small",},
    ]);    

    const loadPosts = async () => { 
        let posts = await PostService.getItems();
        setPosts(posts);
     };
    useEffect(() => { 
        // WHEN MOUNT AND UPDATE
        const unsubscribe = navigation.addListener("focus", () => {
            loadPosts();
        });
        // WHEN UNMOUNT
        return unsubscribe;
    }, [navigation]);

    const PostItem = ({ item, index })=>(
        <TouchableOpacity 
            onPress={() => { navigation.navigate("PostDetail", { "id": item.id }); }} 
            style={{ backgroundColor: "white", margin: 7, flex: 1, elevation: 5, }} 
            >
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 1 / 1 }} source={{ uri: item.image }} />
            </View>
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize: 20 }}> {item.name} </Text>
                <View style={{ flexDirection: "row", padding : 5 }}>
                    <Text style={{ fontSize: 15, color: "gray" }}>{item.description}</Text>
                </View>
            </View>            
        </TouchableOpacity>
    );

    const [refresh, setRefresh] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={posts}
                refreshing={refresh}
                onRefresh={() => { loadPosts(); }}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => ( <PostItem item={item} /> ) }
            />
            <TouchableOpacity 
                onPress={() => { navigation.navigate("PostForm", { id: null }); }} 
                style={{backgroundColor: "lightblue",flex: 1,alignItems: "center",justifyContent: "center",width: 80,height: 80,borderRadius: 40,position: "absolute",right: 30,bottom: 30,elevation: 5,}}
                >
                <FontAwesome name="plus" size={40} />
            </TouchableOpacity>
        </View>
    );
}