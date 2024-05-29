import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import UserStorage from "../../storages/UserStorage";
import EmailStorage from "../../storages/EmailStorage";
import BirthStorage from "../../storages/BirthStorage";
import CountryStorage from "../../storages/CountryStorage";
import PhoneStorage from "../../storages/PhoneStorage";

export default function User() {
  const [User, setUser] = useState('Username');
  const [Email, setEmail] = useState('Email');
  const [Birth, setBirth] = useState('00-00-0000');
  const [Country, setCountry] = useState('Thailand');
  const [Phone, setPhone] = useState('0000000000');

  const load = async()=>{
    console.log("load");
    let u = await UserStorage.readItem();
    setUser(u);
    let e = await EmailStorage.readItem();
    setEmail(e);
    let b = await BirthStorage.readItem();
    setBirth(b);
    let c = await CountryStorage.readItem();
    setCountry(c);
    let p = await PhoneStorage.readItem();
    setPhone(p);

    console.log(u,e,b,c,p);
  };

  useEffect(()=>{ load(); },[]);

  const save = async()=>{    
    console.log("save");
    UserStorage.writeItem(User);
    EmailStorage.writeItem(Email);
    BirthStorage.writeItem(Birth);
    CountryStorage.writeItem(Country);
    PhoneStorage.writeItem(Phone);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUser(text)}
          value={User}
        />
      </View>
      <Text style={{color:'white', marginVertical : 5, fontSize : 20}}>profile</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={30} color="white" />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={Email.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="gift" size={30} color="white" />
        <Text style={styles.label}>Birth:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setBirth(text)}
          value={Birth.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="globe" size={30} color="white" />
        <Text style={styles.label}>Country:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCountry(text)}
          value={Country.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="phone" size={30} color="white" />
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setPhone(text)}
          value={Phone.toString()}
        />
      </View>
      <TouchableOpacity onPress={()=>{ save();}}>
        <View style={{ borderRadius: 5, backgroundColor : '#343434', marginTop : 10}}>
          <Text style={{ fontSize : 20, color : 'white', textAlign : 'center', marginVertical : 10}}>Save</Text>
        </View>
      </TouchableOpacity>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#3C3C3C",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    color:'white',
    marginHorizontal: 10,
  },
  input: {
    borderRadius : 10,
    backgroundColor: "#343434",
    padding: 8,
    flex: 1,
    textAlign :'center'
  },
  displayContainer: {
    marginTop: 20,
  },
  displayText: {
    fontSize: 20,
    marginBottom: 5,
  },
});