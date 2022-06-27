import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import CadastroImigrantesScreen from './cadastroImigrantes/CadastroImigrantesScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="cadastro" headerMode="none">
        <Stack.Screen name="cadastro" component={CadastroImigrantesScreen} />     
      </Stack.Navigator>
    </NavigationContainer>
  )
}
 
