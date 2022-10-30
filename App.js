import { StyleSheet, SafeAreaView, Text, Button, View, FlatList, Image } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Element from "./element";
import millisToMinutesAndSeconds from "./utils/millisToMinutesAndSeconds";
import AuthButton from "./authButton";

// const AuthButton = ({ authFunction }) => {
// return <Button title="CONNECT WITH SPOTIFY" onPress={authFunction} />;
// };

const renderTrackItem = ({ item, index }) => (
  <Element
    index={index + 1}
    artist_name={item.artists[0].name}
    song={item.name}
    image={item.album.images[2]}
    album={item.album.name}
    duration={millisToMinutesAndSeconds(item.duration_ms)}
    />
);

const List = ({tracksList}) => {
return (<View style={styles.listContainer}>
<View style={styles.header}>
  <Image
  source={require('./assets/spotify-logo.png')}
  style={styles.logo}
  />
  <Text style={{color:"white", fontSize: 24, fontWeight: "bold"}}>My Top Tracks</Text>
</View>
<FlatList
  data={tracksList} // the array of data that the FlatList displays
  renderItem={(item) => renderTrackItem(item)}
  keyExtractor={(item) => item.id} // unique key for each item
/>
</View>
)};



export default function App() {
// Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
// token: Boolean - authenticated or not
// tracks: [{}] - tracks
// getSpotifyAuth - function
const { token, tracks, getSpotifyAuth } = useSpotifyAuth(); // static line
    //console.log(token);
    //console.log(tracks[0].name);
// if token is True, render FlatList
// else, render Authentication button
let contentDisplayed;
if (token) {
// render Flatlist
contentDisplayed = <List tracksList={tracks}/>;

} else {
// render AuthButton
contentDisplayed = <AuthButton authFunction={getSpotifyAuth} />;
}
return (
<SafeAreaView style={styles.container}>
{/* TODO: Your code goes here */}

{contentDisplayed}
</SafeAreaView> 
);
}
const styles = StyleSheet.create({
container: {
height: "100%",
width: "100%",
backgroundColor: Themes.colors.background,
justifyContent: "center",
alignItems: "center",
},

listContainer: {
height: "100%",
width: "100%",
backgroundColor: Themes.colors.background,
},

header: {
flexDirection: "row",
justifyContent: "center",
alignItems:"center",
height: "8%"
},

logo: {
height: "50%",
width: "8%",
marginRight: "2%",
resizeMode:"contain",

}

});