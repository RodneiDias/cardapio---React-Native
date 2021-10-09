import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import Finalizado from '../../componentes/pages/';
import { Context } from './Context';


export default function Cardapio({navigation}) {


    const [isLoading, setLoading] = useState(true);
    const {data, setData} = useContext(Context)

    const getMenu = async () => {
        try {
            const response = await fetch('https://615b13564a360f0017a8147e.mockapi.io/menu');
            const menu = await response.json();
            setData(menu[0]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMenu();
    }, []);

    console.log(data)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image
                style={{ width: '100%', height: '20%' }}
                source={{ uri: data.backgroundImage }}
            />
            <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'absolute', top: '16%', height: '83%', width: '100%', backgroundColor: 'white' }}>

                <View style={{ marginTop: 20, marginLeft: 20, height: '15%' }}>
                    <Text style={{ fontSize: 22 }}>
                        {data.name}
                    </Text>

                    <Text>
                        {data.type}, {data.distance}, {data.stars}
                    </Text>
                </View>
                <ScrollView>
                    <View style={{ marginHorizontal: 30, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, }}>
                            Combos
                        </Text>
                    </View>


                    <FlatList
                        data={data.combos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('FinalizarPedido', item.id)}}
                            >
                                <View style={{ marginHorizontal: 20, marginVertical: 5, backgroundColor: '#e5e4e2', borderRadius: 30, flexDirection: 'row' }}>
                                    <Image
                                        style={{ height: 180, width: 120, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}
                                        source={{ uri: item.image }}
                                    />
                                    <View style={{ width: 200, justifyContent: 'space-between', marginLeft: 10, paddingVertical: 15 }}>
                                        <Text style={{ fontSize: 16 }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{color:'grey'}}>
                                            {item.description}
                                        </Text>
                                        <Text style={{ textAlign: 'right' }}>
                                            R$ {item.price}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />

                    <View style={{ marginHorizontal: 30, marginBottom: 10, marginTop: 20 }}>
                        <Text style={{ fontSize: 20, }}>
                            Drinks
                        </Text>
                    </View>

                    <FlatList
                        data={data.drinks}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => { }}
                            >
                                <View style={{ marginHorizontal: 20, marginVertical: 5, backgroundColor: '#e5e4e2', borderRadius: 30, flexDirection: 'row' }}>
                                    <Image
                                        style={{ height: 180, width: 120, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}
                                        source={{ uri: item.image }}
                                    />
                                    <View style={{ width: 200, justifyContent: 'space-between', marginLeft: 10, paddingVertical: 15 }}>
                                        <Text style={{ fontSize: 16 }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{color:'grey'}}>
                                            {item.description}
                                        </Text>
                                        <Text style={{ textAlign: 'right' }}>
                                            R$ {item.price}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}