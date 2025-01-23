import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
//@ts-ignore
import { RootStackParamList } from "../Common/StackNavigator";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import MapView, { Marker } from "react-native-maps";

const image = require("../../../assets/home/coffee.png");
const sddefault = require("../../../assets/home/sddefault.jpg");

const sliderData = [
  {
    image: require("../../../assets/home/Coffee-Burlap.jpg"),
    text: "ቤታችን ከሚታወቅበት ቡና ይቅመሱ.",
  },
  {
    image: require("../../../assets/home/coffee-latte.jpg"),
    text: "ቀንዎን በኛ ቡና ይጀምሩ.",
  },
  {
    image: require("../../../assets/home/Creamy-Coffee.png"),
    text: "ከዚህ በፊት ቀምሰው በማያውቁት ጣአም ይሞክሩ.",
  },
  {
    image: require("../../../assets/home/Ice-coffee.jpg"),
    text: "ለእርሶ በልዩ ትዛዝ ከምናዘጋጃቸው.",
  },
  {
    image: require("../../../assets/home/Irish-coffee.jpeg"),
    text: "በሳሚ ቡና ቀንዎን ያማረ ያድርጉ.",
  },
];

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, "Main">;

function MainScreen() {
  const navigation = useNavigation<MainScreenNavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#694617", "#3b270d"]} style={styles.gradient}>
        <Text style={styles.title}>SAMUEL COFFEE </Text>
        {/* 1st */}
        <View style={styles.mainBg}>
          <View style={styles.leftSide}>
            <Text style={styles.text}>
             አቦል ይቅመሱ!!
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Menu")}
            >
              <Text style={styles.buttonText}>Menu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightSide}>
            <Image source={image} style={styles.image} />
          </View>
        </View>
      </LinearGradient>

      {/* 2nd */}
      <View style={styles.coffeeView}>
        <Text style={styles.coffeeText}>Experience the Perfect Cup</Text>
        <Text style={styles.coffeeSubText}>
          <Text style={styles.coffeeSubTextMain}>SAMUEL Coffee Shop</Text> is a café known for its expertly brewed coffee
          and delicious treats. We offer a variety of drinks, freshly baked
          pastries, and wholesome meals, all served in a warm, welcoming
          atmosphere. Whether you're here to work, relax, or catch up with
          friends, SAMUEL Coffee Shop is your go-to destination for comfort and
          flavour.
        </Text>
      </View>

      {/* 3rd */}
      <View style={styles.discountBg}>
        <Image source={sddefault} style={styles.discountImage}></Image>
        <View style={styles.discountContent}>
          <Text style={styles.discountTitle}>ታላቅ ቅናሽ!</Text>
          <Text style={styles.discountText}>
          20% ቅናሽ በሁሉም አቅርቦት ላይ!
          </Text>
          <TouchableOpacity
            style={styles.discountButton}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.discountButtonText}>እዘዝ</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 4th */}
      <View style={styles.sliderContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={3}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          paginationStyle={styles.pagination}
          loop={true}
        >
          {sliderData.map((item, index) => (
            <View key={index} style={styles.slide}>
              <Image source={item.image} style={styles.sliderImage} />
              <LinearGradient
                colors={["rgba(0, 0, 0, 0.7)", "transparent"]}
                style={styles.slideGradient}
              >
                <Text style={styles.slideText}>{item.text}</Text>
              </LinearGradient>
            </View>
          ))}
        </Swiper>
      </View>

      {/* 5th */}
     
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  mainBg: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  leftSide: {
    flex: 1,
    justifyContent: "center",
  },
  rightSide: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#444",
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#523712",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  coffeeView: {
    flex: 1,
    top: 20,
    bottom: 20,
  },
  coffeeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#444",
    marginBottom: 15,
    textAlign: "center",
  },
  coffeeSubText: {
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 14,
  },
  coffeeSubTextMain:{
    fontWeight: "bold",
    fontSize: 16,
  },
  discountBg: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    padding: 15,
    marginVertical: 20,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  discountImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  discountContent: {
    flex: 1,
    justifyContent: "center",
  },
  discountTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#523712",
    marginBottom: 5,
  },
  discountText: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
  discountButton: {
    backgroundColor: "#523712",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  discountButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  sliderContainer: {
    height: 300,
    marginVertical: 25,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
  },
  sliderImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  slideGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  slideText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  dot: {
    backgroundColor: "#bbb",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
    top: 10,
  },
  activeDot: {
    backgroundColor: "#523712",
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
    top: 10,
  },
  pagination: {
    bottom: 10,
  },
  mapContainer: {
    flex: 1,
    padding: 20,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 10,
  },
  map: {
    height: 300,
    borderRadius: 15,
  },
});

export default MainScreen;
