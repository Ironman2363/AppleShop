import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const DATADANHMUC = [
  {
    id: "1",
    name: "Mac",
    image: require("../assets/laptop.png"),
  },
  {
    id: "2",
    name: "iPhone",
    image: require("../assets/mobile-phone.png"),
  },
  {
    id: "3",
    name: "iPad",
    image: require("../assets/maytinhbang.png"),
  },
  {
    id: "4",
    name: "Watch",
    image: require("../assets/dongho.png"),
  },
];

const DATASANPHAM = {
  Mac: [
    {
      id: "1",
      name: "Macbook Air",
      image: require("../assets/macbookk.png"),
      price: "$999",
    },
    {
      id: "2",
      name: "Macbook Pro",
      image: require("../assets/macbookk.png"),
      price: "$1299",
    },
    {
      id: "3",
      name: "Macbook Third",
      image: require("../assets/macbookk.png"),
      price: "$1499",
    },
    {
      id: "4",
      name: "Macbook Third",
      image: require("../assets/macbookk.png"),
      price: "$1499",
    },
  ],
  iPhone: [
    {
      id: "1",
      name: "iPhone 12",
      image: require("../assets/iphone14.png"),
      price: "$799",
    },
    {
      id: "2",
      name: "iPhone 13",
      image: require("../assets/iphone14.png"),
      price: "$999",
    },
    {
      id: "3",
      name: "iPhone 12",
      image: require("../assets/iphone14.png"),
      price: "$799",
    },
    {
      id: "4",
      name: "iPhone 13",
      image: require("../assets/iphone14.png"),
      price: "$999",
    },
  ],
  iPad: [
    {
      id: "1",
      name: "iPad Pro",
      image: require("../assets/ipadd.jpg"),
      price: "$799",
    },
    {
      id: "2",
      name: "iPad Mini",
      image: require("../assets/ipadd.jpg"),
      price: "$499",
    },
    {
      id: "3",
      name: "iPad Pro",
      image: require("../assets/ipadd.jpg"),
      price: "$799",
    },
    {
      id: "4",
      name: "iPad Mini",
      image: require("../assets/ipadd.jpg"),
      price: "$499",
    },
  ],
  Watch: [
    {
      id: "1",
      name: "Apple Watch Series 6",
      image: require("../assets/hihi.png"),
      price: "$399",
    },
    {
      id: "2",
      name: "Apple Watch SE",
      image: require("../assets/hihi.png"),
      price: "$279",
    },
    {
      id: "3",
      name: "Apple Watch Series 6",
      image: require("../assets/hihi.png"),
      price: "$399",
    },
    {
      id: "4",
      name: "Apple Watch SE",
      image: require("../assets/hihi.png"),
      price: "$279",
    },
  ],
};

const CategoryList = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <View style={styles.categoryList}>
      {categories.map((category) => (
        <TouchableOpacity
          style={[
            styles.categoryItem,
            selectedCategory === category ? styles.selectedCategory : null,
          ]}
          key={category}
          onPress={() => onCategorySelect(category)}
        >
          <Image
            style={styles.categoryImage}
            source={DATADANHMUC.find((c) => c.name === category).image}
          />
          <Text style={styles.categoryName}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const ProductList = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.productList}
      renderItem={({ item }) => (
        <View style={styles.productItem}>
          <Image style={styles.productImage} source={item.image} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      )}
    />
  );
};

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mac");

  return (
    <SafeAreaView style={{ backgroundColor: "#F0F0F0" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <FontAwesome name="apple" size={30} color="black" />
          <Text style={styles.headerText}>AppleShop</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="user" size={24} color="black" />
        </View>
      </View>
      <Image style={styles.image} source={require("../assets/banner.png")} />
      <CategoryList
        categories={Object.keys(DATASANPHAM)}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      {selectedCategory && (
        <ProductList products={DATASANPHAM[selectedCategory]} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    marginLeft: 10,
    fontSize: 14,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSearch: {
    marginLeft: 15,
  },
  image: {
    margin: 22,
    justifyContent: "center",
    alignSelf: "center",
  },
  categoryList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  selectedCategory: {
    borderBottomWidth: 1,
  },
  categoryItem: {
    alignItems: "center",
    width: 88,
    height: 88,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  categoryImage: {
    width: 36,
    height: 36,
    borderRadius: 5,
    marginTop: 5,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 12,
    marginBottom: 5,
  },
  productList: {
    marginHorizontal: 15,
    marginTop: 20,
    alignItems: "center",
  },
  productItem: {
    alignItems: "center",
    width: 180,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    margin: 10,
    height: 180,
    justifyContent: "center",
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 12,
  },
});

export default HomeScreen;
