import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
//@ts-ignore
import { RootStackParamList } from "../Common/StackNavigator";
import { LinearGradient } from "expo-linear-gradient";

interface Item {
  source: any;
  title: string;
  price: string;
  subtitle: string;
}

interface ItemScreenProps {
  item: Item;
  onClose: () => void;
}

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, "Main">;

const ItemScreen: React.FC<ItemScreenProps> = ({ item, onClose }) => {
  const navigation = useNavigation<MainScreenNavigationProp>(); 

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <ImageBackground
          source={item.source}
          resizeMode="cover"
          style={styles.itemImage}
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.9)", "transparent"]}
            style={StyleSheet.absoluteFill}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemSubTitle}>{item.subtitle}</Text>
          <View style={styles.actionContainer}>
            {/* Button to Navigate to Profile */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate("Profile")} // Navigate to the "Profile" screen
            >
              <Text style={styles.actionText}>እዘዝ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
  },
  itemImage: {
    height: 200,
    justifyContent: "flex-end",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 20,
    padding: 5,
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 15,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemSubTitle: {
    fontSize: 16,
    color: "#836031",
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  iconButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d87a3d",
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ItemScreen;
