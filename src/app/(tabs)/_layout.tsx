import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageComponent } from "react-native";
import { View } from "react-native";
import { GlobalContext, GlobalContextProvider } from "../context/aaaa";
import { useContext } from "react";


export default function TabRoutesLayout() {
    const {modoEscuro} = useContext(GlobalContext)

    return !modoEscuro ? (
        <GlobalContextProvider>
                        <Tabs 
                            screenOptions={{
                                headerShown: false,
                                tabBarActiveBackgroundColor: '#568764',
                                tabBarInactiveBackgroundColor: 'white', 
                            }}
                            >
                            <Tabs.Screen 
                                name="index/index" 
                                options={{
                                    title:"Inicio",
                                    tabBarActiveTintColor:'white',
                                    tabBarStyle:{
                                        height: 80,
                                        paddingBottom:0
                                    },
                                    tabBarIcon: ({color, size}) => (
                                        <Image 
                                            source={require('../../../assets/casa-simples-fina.png')}
                                            style={{width:40, height:40, tintColor:'black', position: 'relative', }}
                                        />
                                    
                                    ),
                                    tabBarIconStyle: {
                                        position: 'relative',
                                        top: 5,
                                    },
                                    tabBarLabelStyle: {
                                        color:'black',
                                        paddingBottom:10
                                    }
                                    
                                }}
                            />
                            <Tabs.Screen 
                                name="consultas/index" 
                                options={{
                                    title:"Consultas",
                                    tabBarStyle:{
                                        height: 80,
                                        paddingBottom:0
                                    },
                                    tabBarActiveTintColor:'black',
                                    tabBarLabelStyle: {
                                        color:'black',
                                        paddingBottom:10
                                    },
                                    tabBarIconStyle: {
                                        position: 'relative',
                                        top: 5,
                                    },
                                    tabBarIcon: ({color, size}) => (
                                    <View style={{borderRadius:50}}>
                                        <Image
                                            source={require('../../../assets/consultas.png')}
                                            style={{width:40, height:40, tintColor:'black'}}
                                        />
                                    </View>
                                    )
                                }}/>
                            <Tabs.Screen 
                                name="add/index"
                                options={{
                                    title:"",
                                    tabBarStyle:{
                                        height: 80,
                                        paddingBottom:0,
                                    },
                                    tabBarActiveTintColor:'white',
                                    tabBarActiveBackgroundColor: 'white',
                                    tabBarLabelStyle: {
                                        color:'black',
                                        paddingBottom:10,
                                    },
                                    tabBarIconStyle: {
                                        position: 'relative',
                                        top: -30,
                                    },
                                    tabBarIcon:({color,size}) => (
                                    <View style={{borderRadius:50,backgroundColor:"#568764",padding:15,shadowColor:"black",shadowOpacity:0.8,shadowRadius:2,shadowOffset:{width:2,height:2}}}>
                                        <Image
                                            source={require('../../../assets/plusSign.png')}
                                            style={{width:45, height:45,tintColor:"white"}}
                                        />
                                        </View>
                                    ),
                                }}
                            />
                            <Tabs.Screen 
                                name="medicacao/index"
                                options={{
                                    title:"Medicação",
                                    tabBarStyle:{
                                        height: 80,
                                        paddingBottom:0
                                    },
                                    tabBarActiveTintColor:'black',
                                    tabBarLabelStyle: {
                                        color:'black',
                                        paddingBottom:10,
                                    },
                                    tabBarIconStyle: {
                                        position: 'relative',
                                        top: 5,
                                    },
                                    tabBarIcon:({color,size}) => (
                                        <Image
                                            source={require('../../../assets/pilulas.png')}
                                            style={{width:40, height:40, tintColor:'black'}}
                                        />
                                    ),
                                    
                                    }}/>
                            <Tabs.Screen 
                                name="exames/index"
                                options={{
                                    title:"Exame",
                                    tabBarStyle:{
                                        height: 80,
                                        paddingBottom:0
                                    },
                                    tabBarActiveTintColor:'black',
                                    tabBarLabelStyle: {
                                        color:'black',
                                        paddingBottom:10
                                    },
                                    tabBarIconStyle: {
                                        position: 'relative',
                                        top: 5,
                                    },
                                    tabBarIcon:({color,size}) => (
                                        <Image
                                            source={require('../../../assets/exames.png')}
                                            style={{width:40, height:40, tintColor:"black"}}
                                        />
                                    )
                                    }}/>
                        </Tabs>
                    </GlobalContextProvider>
    ) : (
        <GlobalContextProvider>
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: '#568764',
                tabBarInactiveBackgroundColor: 'black', 
            }}
            >
            <Tabs.Screen 
                name="index/index" 
                options={{
                    title:"Inicio",
                    tabBarActiveTintColor:'white',
                    tabBarStyle:{
                        height: 80,
                        paddingBottom:0
                    },
                    tabBarIcon: ({color, size}) => (
                        <Image 
                            source={require('../../../assets/casa-simples-fina.png')}
                            style={{width:40, height:40, tintColor:'white', position: 'relative', }}
                        />
                    
                    ),
                    tabBarIconStyle: {
                        position: 'relative',
                        top: 5,
                    },
                    tabBarLabelStyle: {
                        color:'white',
                        paddingBottom:10
                    }
                    
                }}
            />
            <Tabs.Screen 
                name="consultas/index" 
                options={{
                    title:"Consultas",
                    tabBarStyle:{
                        height: 80,
                        paddingBottom:0
                    },
                    tabBarActiveTintColor:'black',
                    tabBarLabelStyle: {
                        color:'white',
                        paddingBottom:10
                    },
                    tabBarIconStyle: {
                        position: 'relative',
                        top: 5,
                    },
                    tabBarIcon: ({color, size}) => (
                    <View style={{borderRadius:50}}>
                        <Image
                            source={require('../../../assets/consultas.png')}
                            style={{width:40, height:40, tintColor:'white'}}
                        />
                    </View>
                    )
                }}/>
            <Tabs.Screen 
                name="add/index"
                options={{
                    title:"",
                    tabBarStyle:{
                        height: 80,
                        paddingBottom:0,
                    },
                    tabBarActiveTintColor:'black',
                    tabBarActiveBackgroundColor: 'white',
                    tabBarLabelStyle: {
                        color:'white',
                        paddingBottom:10,
                    },
                    tabBarIconStyle: {
                        position: 'relative',
                        top: -30,
                    },
                    tabBarIcon:({color,size}) => (
                    <View style={{borderRadius:50,backgroundColor:"#568764",padding:15,shadowColor:"black",shadowOpacity:0.8,shadowRadius:2,shadowOffset:{width:2,height:2}}}>
                        <Image
                            source={require('../../../assets/plusSign.png')}
                            style={{width:45, height:45,tintColor:"white"}}
                        />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen 
                name="medicacao/index"
                options={{
                    title:"Medicação",
                    tabBarStyle:{
                        height: 80,
                        paddingBottom:0
                    },
                    tabBarActiveTintColor:'black',
                    tabBarLabelStyle: {
                        color:'white',
                        paddingBottom:10,
                    },
                    tabBarIconStyle: {
                        position: 'relative',
                        top: 5,
                    },
                    tabBarIcon:({color,size}) => (
                        <Image
                            source={require('../../../assets/pilulas.png')}
                            style={{width:40, height:40, tintColor:'white'}}
                        />
                    ),
                    
                    }}/>
            <Tabs.Screen 
                name="exames/index"
                options={{
                    title:"Exame",
                    tabBarStyle:{
                        height: 80,
                        paddingBottom:0
                    },
                    tabBarActiveTintColor:'black',
                    tabBarLabelStyle: {
                        color:'white',
                        paddingBottom:10
                    },
                    tabBarIconStyle: {
                        position: 'relative',
                        top: 5,
                    },
                    tabBarIcon:({color,size}) => (
                        <Image
                            source={require('../../../assets/exames.png')}
                            style={{width:40, height:40, tintColor:"white"}}
                        />
                    )
                    }}/>
        </Tabs>
    </GlobalContextProvider>)
}