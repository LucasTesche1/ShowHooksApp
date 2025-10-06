import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const TemaContext = createContext('claro');

export default function App() {

  
  useEffect(() => {
    Alert.alert(
      "Bem-vindo(a)!",
      `Hooks são funções especiais do React que permitem “ligar” recursos do React a componentes funcionais. 
Antes deles, só componentes de classe podiam ter estado e efeitos colaterais. Em resumo: Hooks deixam os componentes funcionais mais poderosos e reutilizáveis.

Veja os exemplos`
    );
  }, []);
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <TemaContext.Provider value={tema}>
      <View style={[styles.container, tema === 'claro' ? styles.claro : styles.escuro]}>
        <View style={styles.titleContainer}>
          <Text style={styles.titulo}>HOOKS</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.contentCard}>
            <Text style={styles.tittleCard1}>useState & useContext</Text>
            <Text style={styles.textCard}>Serve para criar variáveis de estado dentro de um componente funcional.</Text>
            <Text style={styles.textCard}>É o “coração” da reatividade no React.</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={alternarTema}>
            Alternar Tema
          </TouchableOpacity>
          <Text style={styles.textCard}>Tema atual: {tema}</Text>
        </View>
        <HookDemo />
      </View>
    </TemaContext.Provider>
  );
}

function HookDemo() {
  const [contador, setContador] = useState(0);
  const inputRef = useRef<TextInput>(null);
  const tema = useContext(TemaContext);

  useEffect(() => {
    console.log(`Contador atualizado: ${contador}`);
  }, [contador]);

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (

    <ScrollView>
    <View style={styles.container}>
    <View style={styles.card}>
      <View style={styles.contentCard}>
        <Text style={styles.tittleCard2}>useRef</Text>
        <Text style={styles.textCard}>Usado para efeitos colaterais, ou seja, coisas que acontecem fora do fluxo de renderização.</Text>
        <Text style={styles.textCard}>Pode ser configurado para rodar:</Text>
        <Text style={styles.textCard}>
            - toda vez que o componente renderiza,
            {'\n'}- só uma vez (ao montar),
            {'\n'}- ou quando algo específico muda.
        </Text>
        
        <TextInput
        ref={inputRef}
        placeholder="Digite algo..."
        style={styles.input}
      />
      </View>      


    </View>

    <View style={styles.card}>
      
      
        <View style={styles.contentCard}>
          <Text style={styles.tittleCard3}>useEffect</Text>
          <Text style={styles.textCard}>Cria uma referência mutável que não causa re-renderização quando muda.</Text>
          <Text style={styles.textCard}>Muito usado para acessar elementos do DOM diretamente.</Text>

          <View style={styles.contentCard}>
            <Text style={styles.texto}>CONTADOR: {contador}</Text>
            <TouchableOpacity
            style={styles.buttonCounter}
            onPress={() => setContador(contador + 1)}>
              +
          </TouchableOpacity>

          </View>
        
    </View>


    </View>


    </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  container: { 
    display:'flex',
    gap:10,
    alignItems: 'center', 
    justifyContent: 'center' },
    
  titleContainer:{

  },

  textCard:{
    top:20,
    marginBottom:12,
    fontFamily:'Arial',
    fontSize:16,
    textAlign: 'center',
    color:'#000',
  },

  tittleCard1:{
    fontFamily:'Arial',
    fontSize:16,
    fontWeight:'bold',
    textAlign: 'center',
    color:'#FCA311',
    textDecorationLine:'underline'
  },
  
  tittleCard2:{
    fontFamily:'Arial',
    fontSize:16,
    fontWeight:'bold',
    textAlign: 'center',
    color:'#BA181B',
    textDecorationLine:'underline'
  },

  tittleCard3:{
    fontFamily:'Arial',
    fontSize:16,
    fontWeight:'bold',
    textAlign: 'center',
    color:'#56BDB7',
    textDecorationLine:'underline'
  },

  contentCard:{

    top:20,
    width: 250,
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card:{
    top:61,
    width:350,
    height:'auto',
    paddingBottom:50,
    backgroundColor:'#F8F9FA',
    borderRadius:20,
    marginBottom:61,

    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },

  claro: { 
    backgroundColor: '#E9ECEF' },

  escuro: { 
    backgroundColor: '#343A40' },

  titulo: { 
    top:30,
    fontSize: 44, 
    marginBottom: 20 },

  box: { 
    marginTop: 20, 
    alignItems: 'center' },

  texto: { 
    fontWeight:'bold',
    fontSize: 20, 
    top:20,
    marginVertical: 5, 
    color: '#56BDB7' 
  },

  input: { 
    textAlign:'center',
    color:'#AFAFAF',
    borderWidth: 1, 
    borderRadius:20,
    width: 250, 
    padding: 12,
    marginVertical:50,
    borderColor:'#BA181B',
  },

  button:{
    top:16,
    justifyContent:'center',
    alignItems:'center',
    margin:49,
    fontFamily:'Arial',
    color:'#fff',
    borderRadius:20,
    backgroundColor: '#FCA311',
    paddingHorizontal:50,
    paddingVertical:20
  },

  buttonCounter:{

    marginVertical:25,

    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    width:40,
    height:40,
    backgroundColor: '#B8DBD9',
    fontSize:40,

    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  }
});