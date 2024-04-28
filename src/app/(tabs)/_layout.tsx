import { Tabs } from "expo-router";
import { Image, ImageComponent } from "react-native";
import { View } from "react-native";


export default function TabRoutesLayout() {
    return (
            <Tabs 
                screenOptions={{
                    headerShown:false,
                    tabBarActiveBackgroundColor: '#A1D5B0',

                }}
                >
                <Tabs.Screen 
                    name="index" 
                    options={{
                        title:"Inicio",
                        tabBarActiveTintColor:'black',
                        tabBarStyle:{
                            height: 80,
                            paddingBottom:0
                        },
                        tabBarIcon: ({color, size}) => (
                            <Image 
                                source={require('../../../assets/exames.png')}
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
                    name="add"
                    options={{
                        title:"",
                        tabBarActiveBackgroundColor:'transparent',
                        tabBarIcon: ({color, size}) => (
                            <View style={{width: 90, height: 90, alignItems: 'center', justifyContent: 'center', backgroundColor:'#A1D5B0', borderRadius:50, position:"relative", top:-35}}>
                                <Image 
                                    source={require('../../../assets/plusSign.png')}
                                    style={{
                                        width: 50, 
                                        height: 50, 
                                        tintColor: 'white'
                                    }}
                                />
                            </View>
                        )
                    }}
                />
                <Tabs.Screen 
                    name="Medicacao"
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
                    name="Perfil"
                    options={{
                        title:"Perfil",
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
                                source={require('../../../assets/user.png')}
                                style={{width:40, height:40, tintColor:"black"}}
                            />
                        )
                        }}/>
                {/* <Tabs.Screen
                    name=""
                /> */}
            </Tabs>
    );
}
