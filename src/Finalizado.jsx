import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';


export default function Finalizado({navigation}) {
    return (

        <View style={{ backgroundColor: "#5DE063", display: 'flex', flexDirection: 'column', height: 750, width: 'auto', justifyContent: 'center', alignContent: 'center' }}>
            {/* <LinearGradient colors={["#5DE063", "#34AD64"]}> */}
            <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Image source={require('./image/Vector.png')} style={{ height: 70, width: 70 }} />
            </View>
            <View style={{ display: 'flex' }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>Pedido realizado com sucesso!</Text>
                <Text style={{ color: '#fff', fontSize: 13, textAlign: 'center' }}>Seu pedido está sendo preparado e logo logo saíra para a entrega.</Text>
                <View>
                    <TouchableOpacity onPress={() => { }} style={{ justifyContent: 'flex-end' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 24, textAlign: 'center', justifyContent: 'flex-end' }}>Voltar para o cardápio</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </LinearGradient> */}
        </View>

    );
}