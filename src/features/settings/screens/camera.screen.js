
import React, { useRef, useState, useEffect } from "react";
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";

const ProfileCamera = styled(CameraView)`
  width: 100%;
  height: 100%;
`;



export const CameraScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState<CameraType>('front');
    const cameraRef = useRef();
   
    const snap = async () => {
        if (cameraRef?.current) {
          try {
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
          } catch (error) {
            console.error("Error taking picture:", error);
          }
        } else {
          console.warn("Camera reference is not available");
        }
      };

    useEffect(() => {
        if (!permission) {
          requestPermission(); // Request permission if not already granted
        }
      }, [permission]);
    
      if (!permission) {
        return <View />;
      }
    
      if (!permission.granted) {
        return <Text>No access to camera</Text>;
      }
    

    return (
        <TouchableOpacity onPress={snap}>
        <ProfileCamera facing={facing}>

        </ProfileCamera>
        </TouchableOpacity>
    )
}