import { Button, Text, View } from "react-native";
import { GeneralContext } from "../../context/generalContext";
import { useContext } from "react";
import stylesMedicacao from "../../styles/stylesMedicacao";

export default function Medicacao() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View >
                <View style={stylesMedicacao.headerText}>
                    <Text>
                        Medicacao
                    </Text>
                </View>
                <View style={stylesMedicacao.headerText}>
                    <Button >
                        
                    </Button>
                </View>
            </View>
        </View>
    )
}