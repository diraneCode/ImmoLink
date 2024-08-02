import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF4EA5",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 5,
          left: 16,
          right: 16,
          height: 60,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center pt-[10px]">
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={focused ? "#FF4EA5" : "gray"}
                size={24}
              />
              <Text
                style={{
                  color: focused ? "#FF4EA5" : "gray",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="rooms"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center pt-[10px]">
              <Ionicons
                name={focused ? "bed" : "bed-outline"}
                color={focused ? "#FF4EA5" : "gray"}
                size={24}
              />
              <Text
                style={{
                  color: focused ? "#FF4EA5" : "gray",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Rooms
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="addRoom"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center h-[56px] w-[56px] rounded-full bg-[#FF4EA5] mb-[40px]">
              <Ionicons
                name={focused ? "add" : "add-outline"}
                color="white"
                size={24}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center pt-[10px]">
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                color={focused ? "#FF4EA5" : "gray"}
                size={24}
              />
              <Text
                style={{
                  color: focused ? "#FF4EA5" : "gray",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Agenda
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center pt-[10px]">
              <Ionicons
                name={focused ? "notifications" : "notifications-outline"}
                color={focused ? "#FF4EA5" : "gray"}
                size={24}
              />
              <Text
                style={{
                  color: focused ? "#FF4EA5" : "gray",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Notif
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="updateRoom"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
