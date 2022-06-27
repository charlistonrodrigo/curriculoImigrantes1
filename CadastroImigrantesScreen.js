import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, FlatList} from 'react-native'
import {TextInput} from 'react-native-paper'
import {Picker} from '@react-native-picker/picker';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

import Constants from 'expo-constants'

import Botao from '../botoes/Botao'
import HeaderModal from '../headerModal/HeaderModal'

const listaContatos = [
  {nome: 'LARISSA', telefone: '(31) 98888-0099', parentesco: 'FILHA'},
  
]

export default function CadastroImigrantesScreen({navigation, route}) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')
  const [profissao, setProfissao] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [nacionalidade, setNacionalidade] = useState('')
  

  const actionSalvar = async () => { 

  }


  return (
    <View style={styles.container}>
      <HeaderModal 
          titulo="CADASTRO DE IMIGRANTES"
          acaoVoltar={() => navigation.goBack()}
        />
        <Text style={styles.texto}>
            E necessário o preenchimento de todos os campos abaixo.
        </Text>
       <FlatList
        data={listaContatos}
        renderItem={
          ({item}) =>   
      <View style={styles.inputs}>
        <TextInput
          placeholder='Nome'
          mode='outlined'
          label='INFORME O NOME COMPLETO'
          onChangeText={(text) => setNome(text)}
          style={styles.input}
        />
         <TextInput
          placeholder='Email'
          mode='outlined'
          label='INFORME O EMAIL'
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
         <TextInput
          placeholder='Cpf'
          mode='outlined'
          label='INFORME O CPF'
          onChangeText={(text) => setCpf(text)}
          style={styles.input}
        />
         <TextInput
          placeholder='Endereço'
          mode='outlined'
          label='INFORME SEU ENDERECO'
          onChangeText={(text) => setEndereco(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='(31) 99999-9999'
          mode='outlined'
          label='INFORME O TELEFONE DE CONTATO'
          keyboardType='phone-pad'
          style={styles.input}
          value={telefone}
          onChangeText={(text) =>  setTelefone(text)}
        />
         <TextInput
          placeholder='Profissão'
          mode='outlined'
          label='INFORME A PROFISSÂO'
          onChangeText={(text) => setProfissao(text)}
          style={styles.input}
        />
         <TextInput
          placeholder='Data de Nascimento'
          mode='outlined'
          label='INFORME A DATA DE NASCIMENTO'
          onChangeText={(text) => setDataNascimento(text)}
          style={styles.input}
        />
         <TextInput
          placeholder='Nacionalidade'
          mode='outlined'
          label='INFORME SUA NACIONALIDADE'
          onChangeText={(text) => setNacionalidade(text)}
          style={styles.input}
        />
         
      </View>
     
        }
        />
     <View style={styles.opcoes}>
      <Botao 
          cor='#008080'
          titulo="ENVIAR CADASTRO"
          onPress={actionSalvar}
          
        />
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,   
  },
  inputs: {
    flex: 1,
    padding: 5,
    //justifyContent: 'space-around',
   // alignItems: 'center'
  },
  opcoes: {
    //flex: 1,
    justifyContent: 'space-evenly',
    padding: 20
  },
  input: {
    flex: 1,
    padding: 10
  },
  texto: {
    marginTop: 10,
    marginLeft: 10
  }
})
