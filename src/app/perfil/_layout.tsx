import { Stack } from "expo-router";
import React from "react";
import { UsuarioProvider } from "../context/generalContext";

export default function StackLayout () {
    return(
        <UsuarioProvider>
            <Stack 
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name="index"/>
            </Stack>
        </UsuarioProvider>
    )
}