import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido!</Text>
      <Text style={styles.subTitulo}>A tu gestor de proyectos</Text>
      <TextInput
        style={styles.textInput}
        placeholder="correo@ejemplo.com"
      ></TextInput>
      <TextInput style={styles.textInput} placeholder="contraseña"></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
  },
  subTitulo: {
    fontSize: 20,
    color: "grey",
  },
  textInput: {
    borderRadius: 30,
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    top: 0,
    margin: "auto",
    bottom: 100,
    width: "100%",
    resizeMode: "contain",
  },
});
