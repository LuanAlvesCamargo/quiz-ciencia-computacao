import { Pressable, StyleSheet, Text, Dimensions, PixelRatio } from 'react-native'

export interface OpcaoProps {
    indice: number
    texto: string
    onPress: () => void
}

const { width, height } = Dimensions.get('window')

// Função para ajustar o tamanho da fonte de forma proporcional
const scaleFont = (size: number) => {
    const scale = width / 375
    const newSize = size * scale
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export default function Opcao(props: OpcaoProps) {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>{props.texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E9D48',
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.0035, 
        borderRadius: 30,
        marginVertical: height * 0.008,
        alignItems: 'center',
    },
    texto: {
        color: 'white',
        fontSize: scaleFont(14),
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
