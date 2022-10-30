import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { colors } from './assets/Themes/colors';


const AuthButton = ({authFunction}) => {
    return <Pressable style={styles.button} onPress={authFunction}>
    <Image
      source={require('./assets/spotify-logo.png')}
      style={styles.imageStyle}
    />
    <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
  </Pressable>
};

export default AuthButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius:99999,
    backgroundColor:"#1DB954",
    paddingHorizontal: "1%",
    paddingVertical: "1%"
  },
  text: {
    color:"white",
    fontSize: 15,
    fontWeight: "bold"
    

  },
  imageStyle: {
    marginRight: "1%",
    height: "100%",
    width: "7%",
    resizeMode: "contain"
  },
});