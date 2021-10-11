import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground, FlatList, ActivityIndicator, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


export default function Cardapio({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    console.log(data)

    const banco = async () => {
        try {
            const response = await fetch('https://615b13564a360f0017a8147e.mockapi.io/menu');
            const json = await response.json();
            setData(json[0]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        banco();
    }, []);
    console.log(data.image)
    return (
        <View>
            <ImageBackground style={styles.container} source={require('../../image/cardapioimg.png')} />

            <View style={{height: 'auto',width: 'auto', backgroundColor: 'white',bottom: 20,borderTopLeftRadius: 20,borderTopRightRadius: 20}}>
                <Text style={{fontSize: 20, fontWeight: '400', margin: 10}}>
                    {data.name}
                </Text>
                <Text style={{ color: 'gray', marginLeft: 16 }}> 
                    {data.type}, {data.distance}, {data.stars}
                </Text>

                <View>
                    <Text style={{ color: 'gray', marginLeft: 16, marginTop: 10, fontWeight: 'bold', fontSize:18 }}>Combos</Text>
                </View>

                <View style={{ width: '90%', height: 200, margin: 10 }}>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            data={data.combos}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (

                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Pedido', item.id) }}
                                >
                                    <View style={{ marginHorizontal: 5, marginVertical: 5, backgroundColor: '#e5e4e2', borderRadius: 10, flexDirection: 'row' }}>
                                        <Image source={{ uri: item.image }} style={{ width: 120, height: 'auto', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />

                                        <View style={{ width: 170, justifyContent: 'space-between', marginLeft: 10, paddingVertical: 0 }}>
                                            <Text style={{ fontSize: 18, textAlign: 'justify', marginTop: 5, marginBottom: 5 }}>
                                                {item.name}
                                            </Text>
                                            <Text style={{ color: 'grey' }}>
                                                {item.description}
                                            </Text>
                                            <Text style={{ textAlign: 'right', color:'green' }}>
                                                R$ {item.price}
                                            </Text>
                                        </View>
                                        <Text></Text>

                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
                <View>
                    <Text style={{ color: 'gray', marginLeft: 18, marginTop: 10, fontWeight: 'bold', fontSize:18 }}>Bebidas</Text>
                </View>

                <View style={{ width: '90%', height: 200, margin: 10 }}>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            data={data.drinks}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                onPress={() => { navigation.navigate('Pedido', item.id) }}
                                >
                                    <View style={{ marginHorizontal: 5, marginVertical: 5, backgroundColor: '#e5e4e2', borderRadius: 20, flexDirection: 'row' }}>
                                        <Image
                                            style={{ width: 120, height: 150, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
                                            source={{ uri: item.image }}
                                        />
                                        <View style={{ width: 170, justifyContent: 'space-between', marginLeft: 10, paddingVertical: 0 }}>
                                            <Text style={{ fontSize: 18, marginTop: 5, marginBottom: 5 }}>
                                                {item.name}
                                            </Text>
                                            <Text style={{ color: 'grey', textAlign: 'justify', }}>
                                                {item.description}
                                            </Text>
                                            <Text style={{ textAlign: 'right', color:'green' }}>
                                                R$ {item.price}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>

            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: 'auto',
        height: 150,
    },
    container2: {
        height: 'auto',
        width: 'auto',
        backgroundColor: 'white',
        bottom: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    texto: {
        fontSize: 20,
        fontWeight: '400',
        margin: 10
    },
    texto2: {
        color: 'tomato',
        fontSize: 20,
        marginLeft: 70
    },
    combos: {
        width: 300,
        height: 200,
        backgroundColor: 'red'
    }
});