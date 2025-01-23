import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";

//@ts-ignore
import { RootStackParamList } from "../Common/StackNavigator";

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
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Generate a random order number
  const generateOrderNumber = () => Math.floor(Math.random() * 1000000).toString();

  const handleOrder = () => {
    if (!name&&!phone && !address) {
      Alert.alert("Error", "Please fill all the fields.");
      return;
    }
    const orderNumber = generateOrderNumber();
    Alert.alert(
      "Order Placed",
     // Order Number: ${orderNumber}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}
    );
    setShowForm(false); // Close the form after placing the order
  };

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
            {/* Button to Show the Form */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setShowForm(true)}
            >
              <Text style={styles.actionText}>እዘዝ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Order Form */}
      {showForm && (
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Fill Order Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          <View style={styles.formActions}>
            <TouchableOpacity style={styles.submitButton} onPress={handleOrder}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowForm(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  formContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  cancelText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ItemScreen;
