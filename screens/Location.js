import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GPS from '../helpers/GPS';
import L11 from "../components/6/L11";

export default function Location() {
    const [location, setLocation] = useState(null);
    //ACTION WHEN ENTER SCREENS
    const onLoad = async()=>{
            let loc = await GPS.getLocation();
            if (loc) {
                //console.log("Location : ", loc);
                setLocation(loc);
            }
    };
    useEffect(() => {
        console.log("ENTER SCREEN");
        onLoad();
    }, []);

  return (
    <View style={{flex : 1}}>      
        <View style={{ flexDirection : 'row', backgroundColor : '#71BC98' , height : 100, justifyContent : 'center', padding : 20, alignItems : 'center'}}>
            <View>
                <Text style={{ fontSize : 30, color : 'white', marginHorizontal : 14, marginVertical : 2}}>Location</Text>
            </View>
        </View>
            <L11 location={location} setLocation={setLocation} />  
    </View>
  );
}
