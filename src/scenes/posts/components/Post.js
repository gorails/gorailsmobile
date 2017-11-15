import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Post extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.postTitle}>
                    Lore Ipsum
                </Text>

                <Text style={styles.postDescription}>
                    Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 10,
        marginTop:10,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    postDescription: {
      marginTop:10
    }
});
