import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";
import React from "react";     

export default function Index() {
  return (
    <>
    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Text> search </Text>
    </View>
    <View style = {styles.list}>
      <Text> List </Text>
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  search:{
    backgroundColor: 'green',
    padding: 16
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',

  }



})