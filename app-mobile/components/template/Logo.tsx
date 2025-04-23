import { StyleSheet, Text, View } from 'react-native'

export default function Logo() {
    return (
        <View>
            <Text style={styles.primario}>COMPUTAÇÃO QUIZ</Text>
            <Text style={styles.segundario}>Perguntas de Computação</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primario: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    segundario: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
})
