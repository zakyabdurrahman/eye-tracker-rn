import { View } from "react-native";
import { Face, Landmarks } from "react-native-vision-camera-face-detector";

export default function FaceOverlay({face} : {face: Face}) {
  console.log(face.landmarks.LEFT_EYE);
  return (
    <View>
       <View
          key={1}
          style={{
            position: 'absolute',
            left: (face.landmarks.LEFT_EYE.x * -1) + 250,
            top: face.landmarks.LEFT_EYE.y - 525,
            width: 20,
            height: 20,
            backgroundColor: 'green',
            zIndex: 10
        }}
      />
      <View
          key={1}
          style={{
            position: 'absolute',
            left: (face.landmarks.RIGHT_EYE.x * -1) + 250,
            top: face.landmarks.RIGHT_EYE.y - 525,
            width: 20,
            height: 20,
            backgroundColor: 'green',
            zIndex: 10
        }}
      />
    </View>
  )
}