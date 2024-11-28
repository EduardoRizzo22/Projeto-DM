import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const App = () => {
  const logado = false
  return (
    <NavigationContainer>
      {
        logado ? <Auth /> : <Home />
      }

    </NavigationContainer>
  )
}

function Auth(params) {
  return (
    <Stack.Navigator >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}
function Home(params) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Main' component={Main} />
      <Tabs.Screen name='Details' component={Details} />
    </Tabs.Navigator>
  )
}


//Criar o arquivo Login.js
function Login({ navigation }) {
  const user = 'RenÃª'
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>Login</Text>
      <Button title='Registrar-se' onPress={() => navigation.navigate('Register', { user })} />
      <Button title='Go Main' onPress={() => navigation.navigate('Main')} />
    </View>
  )
}
function Register({ navigation, route }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>Register - {route.params?.user}</Text>
      <Button title='Back' onPress={() => navigation.goBack()} />
    </View>
  )
}
function Main({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>Monark</Text>

    </View>
  )
}
function Details({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>Details</Text>

    </View>
  )
}


export default App

const styles = StyleSheet.create({})