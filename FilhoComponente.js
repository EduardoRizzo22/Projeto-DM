import React from "react";
import{View, Text} from 'react-native'

export default function FilhoComponente(props){
    console.log(props);
 
    
    
    
    return(
        <View style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 20
          }}>
            <Text style={{ fontSize: 40 }}>Contador: {props.mensagem}</Text>

          </View>
    )
}

