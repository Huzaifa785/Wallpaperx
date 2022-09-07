import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import { Searchbar } from "react-native-paper";

import { Dimensions, ScrollView } from "react-native";
const { width, height } = Dimensions.get("screen");

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.search}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
          <View style={styles.bestOfMonths}>
            <Text style={styles.rowTitle}>Best of the month</Text>
            <View style={styles.bestOfMonthsRow}>
              <Image
                source={require("./assets/wp1.jpeg")}
                style={styles.bestOfMonthsImg}
              />
              <Image
                source={require("./assets/wp2.jpeg")}
                style={styles.bestOfMonthsImg}
              />
              <Image
                source={require("./assets/wp1.jpeg")}
                style={styles.bestOfMonthsImg}
              />
              <Image
                source={require("./assets/wp2.jpeg")}
                style={styles.bestOfMonthsImg}
              />
              <Image
                source={require("./assets/wp1.jpeg")}
                style={styles.bestOfMonthsImg}
              />
              <Image
                source={require("./assets/wp2.jpeg")}
                style={styles.bestOfMonthsImg}
              />
            </View>
          </View>
          <View style={styles.categories}>
            <Text style={styles.rowTitle}>Categories</Text>
            <View style={styles.categoriesRow}>
              <Image
                source={require("./assets/wp1.jpeg")}
                style={styles.categoriesImg}
              />
              <Image
                source={require("./assets/wp2.jpeg")}
                style={styles.categoriesImg}
              />
              <Image
                source={require("./assets/wp1.jpeg")}
                style={styles.categoriesImg}
              />
              <Image
                source={require("./assets/wp2.jpeg")}
                style={styles.categoriesImg}
              />
              <Image
                source={require("./assets/wp1.jpeg")}
                style={styles.categoriesImg}
              />
              <Image
                source={require("./assets/wp2.jpeg")}
                style={styles.categoriesImg}
              />
              <Image
                source={require("./assets/wp1.jpeg")}
                style={styles.categoriesImg}
              />
              <Image
                source={require("./assets/wp2.jpeg")}
                style={styles.categoriesImg}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#FBF0E8",
  },
  search: { padding: 16 },
  categories: { flex: 1, padding: 16 },
  bestOfMonths: { flex: 2, padding: 16 },
  bestOfMonthsRow: {
    width: width * 0.9,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoriesRow: {
    width: width * 0.9,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  rowTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 6,
  },
  bestOfMonthsImg: {
    width: "30%",
    height: 200,
    margin: 4,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  categoriesImg: {
    width: "45%",
    height: 70,
    margin: 4,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
