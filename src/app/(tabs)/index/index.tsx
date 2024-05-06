import { Text, View, Image } from "react-native";
import styleHome from "../../styles/styleHome";

export default function Home() {
    return (
        <View>
            <View style={styleHome.divUsuario}>
                <View style={styleHome.containerUsuario}>
                    <Image source={require('../../../../assets/user.png')} style={styleHome.imgUsuario} />
                    <Text style={styleHome.nomeUsuario}>Nome do Usuário</Text>
                </View>
            </View>
            <View>
                <View style={styleHome.divTotal}>
                    <Image source={require('../../../../assets/user.png')} style={styleHome.imgInfo}></Image>
                    <Text style={styleHome.divInfo1} >Nome Usuário, Idade</Text>
                    <Text style={styleHome.divInfo2}>Altura, Peso</Text>
                </View>
            </View>
            <View style={styleHome.proximosEventos}>
                <Text style={styleHome.divProximo}>Próximos eventos</Text>
                <View>
                    <View style={styleHome.infoProximo}>
                            <Text style={styleHome.infoProximoDetail}>Dipirona 12:00</Text>
                            <Text style={styleHome.infoProximoDetail}>10/05/24</Text>
                    </View>
                    <View style={styleHome.infoProximo}>
                        <Text style={styleHome.infoProximoDetail}>Pediatra 10:30</Text>
                        <Text style={styleHome.infoProximoDetail}>11/07/24</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={styleHome.statusDivHeader}>
                    <View style={styleHome.statusDiv}>
                        <Text style={styleHome.statusHeader}>IMC</Text>
                        <View style={styleHome.statusFooter}>
                            <Text style={styleHome.statusInfo}>31.14</Text>
                            <Text style={styleHome.statusInfo}>Obesidade I</Text>
                        </View>
                    </View>
                    <View style={styleHome.statusDiv}>
                        <Text style={styleHome.statusHeader}>Colesterol</Text>
                        <View style={styleHome.statusFooter}>
                            <Text style={styleHome.statusInfo}>39.5</Text>
                            <Text style={styleHome.statusInfo}>Alto</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
