import { ImageBackground, StyleSheet, View } from 'react-native'

export interface PaginaProps {
    children: React.ReactNode
}

const background = require('@/assets/images/background.png')

export default function Pagina(props: PaginaProps) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={background}
                resizeMode="cover"
                style={StyleSheet.absoluteFillObject}
                imageStyle={styles.imageStyle}
            />
            <View style={styles.content}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'black',
    },
    imageStyle: {
        opacity: 0.4,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
})
