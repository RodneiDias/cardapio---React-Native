import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';

export default function Loginit({ navigation }) {

    return (
        <View style={styles.container} >
            <Image
                style={styles.logo}
                source={require('../../image/background.png')}
            />
            <View style={styles.container2}>
                <View >
                    <Text style={{textAlign: 'center', height:'100%' ,fontWeight: 'bold',fontSize: 40,}}>
                        Com fome?
                    </Text>
                    <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 25, color:'red'}}>Nós resolvemos isso</Text>
                </View>
               
                <View>
                    <Text style={{fontSize:20,color:'grey',textAlign:'center', marginHorizontal:15, marginBottom:30, marginTop:60}}>Faça seu pedido agora mesmo na ITBurguer e aproveite os descontos e vantagens de nossa plataforma!</Text>
                </View>
                
                <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={() => navigation.navigate('Cardapio')}>
                    <Text style={styles.textSubmit}>Ver Cardápio</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },

    container2: {
        textAlign: 'center',
        backgroundColor: '#FF909D',
        height: 30,
        width: '100%',
        backgroundColor: 'white',
        bottom: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        fontWeight: 'bold',
        fontSize: 40,
    },

    logo: {
        width: '100%',
        height: '50%',

    },
    viewText: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 15,
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        borderRadius: 10,
        fontSize: 17,
        padding: 10,
    },
    btnSubmit: {
        backgroundColor: '#FF909D',
        // #FF6701
        padding: 10,
        width: '90%',
        marginTop:50,
        alignSelf:'center',
        
        borderRadius: 15,
    },
    textSubmit: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    btnElse: {
        marginTop: 10,
    },
    btnColor: {
        color: 'black'
    },
});