import { NavigationContainer } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, Button, ImageBackground, FlatList, ActivityIndicator, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";




export default function Home({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const banco = async () => {
        try{
            const response = await fetch('https://615b13564a360f0017a8147e.mockapi.io/combos');
            const json = await response.json();
            setData(json);
        }catch (error) {
            console.error(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        banco();
    }, []);
     console.log(data.image)
    return (
        <View>
            <ImageBackground style={styles.container} source={require('./image/cardapioimg.png')}/>

            <View style={styles.container2}>
               <Text style={styles.texto}> IT Burguer </Text>
               <Text style={{color:'gray', marginLeft:16}}>Hamburgueria - 2,7km </Text>

            <View>
                <Text style={{color:'gray', marginLeft:16, marginTop:10, fontWeight:'bold'}}>Combos</Text>
            </View>

            <View style={{width:'90%', height:200, margin:10}}>
            {isLoading ? <ActivityIndicator /> :(
                <FlatList
                data={data}
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                    
                <TouchableOpacity> 
                <View style={{width:'auto', height:100, flexDirection:'row'}}>
                <Image source={{uri: item.image}}  style={{width:100, height:100, borderTopLeftRadius:20, borderBottomLeftRadius:20}}/>
                <View style={{width:180}}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                </View>
                <Text></Text>
                
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
        height: 500,
        width: 'auto',
        backgroundColor: 'white',
        bottom: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    texto: {
        fontSize:20,
        fontWeight:'400',
        margin:10
    },
    texto2:{
        color:'tomato',
        fontSize:20,
        marginLeft: 70
    },
    combos: {
        width: 300,
        height: 200,
        backgroundColor:'red'
    }
});