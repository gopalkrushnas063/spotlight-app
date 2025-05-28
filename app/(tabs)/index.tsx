import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { styles } from "../../styles/auth.style";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.tagline}>Hello</Text>
      <Image source={require("../../assets/images/react-logo.png")} />
      {/* <TouchableOpacity
        onPress={() => {
          alert("Button Pressed");
        }
        }
      >
        <Text >Press Me</Text>
      </TouchableOpacity>

      <Pressable onPress={() => {
        alert("Pressable Pressed");
      }}>
        <Text>Pressable</Text>
      </Pressable> */}

      <Link href={"/profile"}>
        Visit to the Profile Screen
      </Link>
    </View>
  );
}


