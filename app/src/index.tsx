import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";
import React from "react";    
import { Searchbar } from 'react-native-paper';
import { useState } from "react";




export default function Index() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <>
    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
     <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
    </View>
    <View style = {styles.list}>
      <Text> List </Text>
    </View>
    </SafeAreaView>
    <StatusBar style="auto" />
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