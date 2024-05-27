import { Stack } from "expo-router";
import React from "react";
import { GlobalContextProvider } from "./app/context/aaaa";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StackLayout() {
    return (
            <GlobalContextProvider>
                    <Stack 
                        screenOptions={{
                            headerShown: false
                        }}
                    >
                        <Stack.Screen name="app" />
                    </Stack>
            </GlobalContextProvider>
    );
}