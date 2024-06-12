import { Stack } from "expo-router";
import React from "react";
import { GlobalContextProvider } from "../context/aaaa";

export default function StackLayout() {
    return (
        <GlobalContextProvider>
                <Stack 
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="index" />
                    <Stack.Screen name="manualmente"/>
                </Stack>

        </GlobalContextProvider>
    );
}