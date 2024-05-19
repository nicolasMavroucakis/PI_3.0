import { Stack } from "expo-router";
import React from "react";
import { MedicacaoProvider } from "../context/generalContext";

export default function StackLayout() {
    return (
        <MedicacaoProvider>
            <Stack 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </MedicacaoProvider>
    );
}
