import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const TakePhoto = ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate("UploadPhoto")}>
      <Text>TakePhoto</Text>
    </TouchableOpacity>
  </View>
);

export default TakePhoto;
