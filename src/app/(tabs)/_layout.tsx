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
                    name="index/index" 
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
                        tabBarStyle:{
                            height: 80,
                            paddingBottom:0,
                        },
                        tabBarActiveTintColor:'black',
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
                        <View style={{borderRadius:50,backgroundColor:"#A1D5B0",padding:15,shadowColor:"black",shadowOpacity:0.8,shadowRadius:2,shadowOffset:{width:2,height:2}}}>
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
                    name="Perfil"
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
                {/* <Tabs.Screen
                    name=""
                /> */}
            </Tabs>
    );
}
