import React, {useEffect, useState} from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Pedido({navigation}){
   
    const [qnt, setQnt] = useState(0);
    const soma = () => setQnt(qnt => qnt + 1);
    const subtracao = () => setQnt(qnt => qnt - 1);

return (
    <ScrollView>
        <ImageBackground source={require('../../image/cardImage.png')} style={{width:'100%', height:'60%'}}>
            
        </ImageBackground>
        
        <View style={{borderTopLeftRadius:20, borderTopRightRadius:20,backgroundColor:'white', bottom:150, height:'70%'}}>
            <Text style={{margin:20, fontSize:25, fontWeight:'bold'}}>
                Nome do Combo
            </Text>
            <Text style={{margin:20,textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laboriosam cumque at eum, qui voluptates voluptatem nobis repudiandae pariatur assumenda ipsam eos sunt nam reprehenderit cupiditate veritatis rem eaque consectetur.
            </Text>
            <Text style={{margin:20, fontSize:15, fontWeight:'bold'}}>
                Quantidade
            </Text>
            <View style={{borderWidth:1, borderRadius:10, borderColor:'black', flexDirection:'row', width:80, marginLeft:20, alignItems:'center',justifyContent:'center' }}>
                <TouchableOpacity onPress={subtracao}>
                     <Text style={{fontSize:20, color:'red', marginRight:10}}> - </Text>
                </TouchableOpacity>
                <Text>{qnt}</Text>
                <TouchableOpacity onPress={soma}>
                     <Text style={{fontSize:20, color:'red', marginLeft:10}}> + </Text>
                </TouchableOpacity>


            </View>
            <Text style={{margin:20, fontSize:15, fontWeight:'bold'}}>
               Observações
            </Text>
            <TextInput style={{borderRadius:10,borderColor:'black', width:'90%', padding:20, borderWidth:1 , marginLeft:20}}></TextInput>

            <Text style={{marginLeft:20, fontSize:15, fontWeight:'bold'}}>
                Total
            </Text>
            <Text style={{marginLeft:20, fontSize:15, fontWeight:'bold'}}>
                R$38,00
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Finalizado')} style={{backgroundColor:'pink', margin:20, borderRadius:20, padding:10}}>
                <Text style={{fontSize:20, textAlign:'center'}}>Fazer pedido</Text>
                
            </TouchableOpacity> 

        </View>
        
    </ScrollView>
)
} 