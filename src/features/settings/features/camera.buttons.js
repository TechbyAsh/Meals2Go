import React from 'react'
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const FlipButtonWrapper = styled(TouchableOpacity)`
    background-color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 30px; 
    right: 20px;
    justify-content: center;
    align-items: center;
    
`

const SnapButtonWrapper = styled(TouchableOpacity)`
    background-color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 30px; 
    justify-content: center;
    align-items: center;
    align-self: center;
    
`

const PickButtonWrapper = styled(TouchableOpacity)`
    background-color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 30px; 
    left: 20px;
    justify-content: center;
    align-items: center;
    align-self: center;
    
`
export const LibraryButton = ({onPickImage}) => {

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'livePhotos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            onPickImage(result.assets[0].uri); // Pass the selected image URI to the callback function
        }
    }
    return( <PickButtonWrapper onPress={pickImage}>
        <FontAwesome name="image" size={24} color="orange"/>
    </PickButtonWrapper>
    )
}

export const PictureButton = ({snap}) => {

    return( <SnapButtonWrapper  onPress={snap}>
        <FontAwesome name="camera" size={24} color="orange"/>
    </SnapButtonWrapper>
    )
}


export const FlipButton = ({toggleCameraFacing}) => {
   
    return ( 
    <FlipButtonWrapper onPress={toggleCameraFacing}>
        <Ionicons name="camera-reverse" size={24} color="orange"/>
    </FlipButtonWrapper>

    )
} 