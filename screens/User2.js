import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";

import U21 from '../components/4/U21';
import U22 from '../components/4/U22';

export default function YourHealth() {

  return (
    <ScrollView style={styles.container} >
            <U21/>
            <U22/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#3C3C3C",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 8,
    flex: 1,
  },
  displayContainer: {
    marginTop: 20,
  },
  displayText: {
    fontSize: 18,
    marginBottom: 5,
  },
});