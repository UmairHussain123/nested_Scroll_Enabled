import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Divider } from "react-native-paper";
// import SQLite from "expo-sqlite";
const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "red",
            borderRightColor: "white",
            borderWidth: 3,
            width: 500,
            height: 500,
          }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: "blue",
              backgroundColor: "yellow",
              width: 100,
              height: 300,
            }}
          >
            <ScrollView nestedScrollEnabled>
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "red",
            borderRightColor: "white",
            borderWidth: 3,
            width: 500,
            height: 500,
          }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: "blue",
              backgroundColor: "yellow",
              width: 100,
              height: 300,
            }}
          >
            <ScrollView nestedScrollEnabled>
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
              <View
                style={{
                  borderWidth: 3,
                  borderColor: "black",
                  backgroundColor: "purple",
                  width: 100,
                  height: 100,
                }}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
