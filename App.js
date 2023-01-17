import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore";
import { db } from "./components/config";
import { useState } from "react";

export default function App() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");

  function create() {
    // Criando um usuário

    addDoc(collection(db, "users"), {
      username: username,
      email: email,
    })
      .then(() => {
        // Dados salvos com sucesso
        console.log("Dados enviados");
      })
      .catch((error) => {
        // Falha
        console.log(error);
      });


    // ----------------------------------------------------


    //Atualizar dados
    //para atualizar é necessário pegar o Id do documento do firestore e colocar no 3° parâmetro
    // o parâmetro "LA" é um exemplo
    // updateDoc(doc(db, "users", "B1oW66wx74X2xaWm3I7l"), {
    //   username: username,
    //   email: email,
    // }) 
    //   .then(() => {
    //     Dados salvos com sucesso
    //     console.log("Dados enviados");
    //   })
    //   .catch((error) => {
    //     Falha
    //     console.log(error);
    //   });


    // --------------------------------------------------

    //Deletar dados
    //para deletar é necessário pegar o Id do documento do firestore e colocar no 3° parâmetro
    // o parâmetro "LA" é um exemplo
    // deleteDoc(doc(db, "users", "B1oW66wx74X2xaWm3I7l"));
    
    // --------------------------------------------------

    //GetDadosPorId
    //para obter um usuario por id é necessário pegar o Id do documento do firestore e colocar no 3° parâmetro
    // o parâmetro "JdGCNAc8E17KQDr3x1Ji" é um exemplo
    //Será retornado no console
    // getDoc(doc(db, "users", "B1oW66wx74X2xaWm3I7l")).then (docData => {
    //       if(docData.exists()){
    //         console.log(docData.data())

    //         setName(docData.data().username);
    //         setEmail(docData.data().email);
    //       } else {
    //         console.log('Nenhum dado encontrado!') 
    //       }
          
    //     }).catch((error) => {
    //       Falha
    //       console.log(error);
    //     })


    //GetTodosOsDados
    // getDocs(collection(db, "users",)).then(docSnap => {
    //   let users = [];
    //   docSnap.forEach((doc) => {
    //     users.push({ ...doc.data(), id:doc.id})
    //   });
    //   console.log("Dados do documento: ", users);
    // });

    // getDocs(query(collection(db, "users",), where('email', '==','PauloAmaral@gmail.com'))).then(docSnap => {
    //   let users = [];
    //   docSnap.forEach((doc) => {
    //     users.push({ ...doc.data(), id:doc.id})
    //   });
    //   console.log("Dados do documento: ", users[0].username);
    // });
  
  };
  return (
    <View style={styles.container}>
      <Text>FireBase Crud!</Text>
      <TextInput
        value={username}
        onChangeText={(username) => {
          setName(username);
        }}
        placeholder="Username"
        style={styles.textBoxes}
      ></TextInput>
      <TextInput 
        secureTextEntry={true}
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        placeholder="Senha"
        style={styles.textBoxes}
      ></TextInput>

      <button onClick={create}>Enviar Dados </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
