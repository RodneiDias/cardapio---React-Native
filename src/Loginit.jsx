import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function Loginit({navigation}) {

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Image
                style={styles.logo}
                source={require('./image/background.png')}
            />

            <View style={styles.container2}>
                <Text style={styles.container2}>Com fome?</Text>
            </View>
            <View>
                <Text>Nós resolvemos isso</Text>
            </View>
            <View>
                <Text>Faça seu pedido agora mesmo na ITBurguer</Text>
            </View>
            <View>
                <Text>
                    e aproveite os descontos e vantagens de nossa plataforma
                </Text>
            </View>
                <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={() => navigation.navigate('Cardapio')}>
                    <Text style={styles.textSubmit}>Ver Cardápio</Text>
                </TouchableOpacity>

               
               
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',

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
        height: '85%',

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
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    textSubmit: {
        color: 'white',
        fontSize: 20,
    },
    btnElse: {
        marginTop: 10,
    },
    btnColor: {
        color: 'black'
    },
});