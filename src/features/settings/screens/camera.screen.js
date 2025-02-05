import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState, useRef, useContext } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components/native";
import {FlipButton, PictureButton, LibraryButton} from "../features/camera.buttons"
import { AuthenticationContext } from '@/src/services/authentication/authentication.context';

import AsyncStorage from "@react-native-async-storage/async-storage";



const ProfileCamera = styled(CameraView)`
  width: 100%;
  height: 100%;
`; 


export const CameraScreen = ({ navigation }) => {
  const [facing, setFacing] = useState('back');
  const [selectedImage, setSelectedImage] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef();
  const {user} = useContext(AuthenticationContext)


  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front':  'back'));
  };
 
  function handlePickImage(imageUri) {
    setSelectedImage(imageUri);
  }

 

  return (
    <View style={styles.container}>
        { !selectedImage ? (
      <ProfileCamera ref={cameraRef} facing={facing}>
      <FlipButton  toggleCameraFacing={ toggleCameraFacing}/>
        <PictureButton snap={snap}/>
      <LibraryButton onPickImage={handlePickImage} />
      </ProfileCamera>) : (<Image source={{ uri: selectedImage }} style={{ flex: 1 }} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
