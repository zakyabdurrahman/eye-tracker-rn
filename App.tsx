import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Frame, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { Camera, Face, FaceDetectionOptions } from 'react-native-vision-camera-face-detector';
import FaceOverlay from './FaceOverlay';



export default function App() {
  const [facesArray, setFaces] = useState<Face[]>([]);
  const faceDetectOpts = useRef<FaceDetectionOptions>({
    landmarkMode: 'all',
    autoScale: true,
    windowHeight: 400,
    windowWidth: 400
  }).current

  const device = useCameraDevice('front');
  const {hasPermission, requestPermission} = useCameraPermission();


  useEffect(() => {
    
    (async () => {
      const status = requestPermission();
      //req permission
      
      console.log(status);
    })()
  }, [device])

  function handleFace(
    faces: Face[],
    frame: Frame
  ) {
    setFaces(faces);
  }

  return (
    <View style={styles.container}>
      <Text>FACE DETECTOR MADE BY ZAKY ABDURRAHMAN</Text>
      {device && hasPermission ? <Camera
        style={{
          height: 400,
          width: 400
        }}
        device={device}
        faceDetectionCallback={handleFace}
        faceDetectionOptions={faceDetectOpts}
        isActive={true}

      /> : ''
      }
       
      {facesArray.map((face, index) => (
        <FaceOverlay key={index} face={face} />
      ))}
      
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
