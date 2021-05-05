import React from 'react'
import { 
    Text,
    StyleSheet,
    TextInput,
    View,
 } from 'react-native'
 import { SafeAreaView } from 'react-native-safe-area-context'
 import { withContext } from 'react-simplified-context'
 import EditHeader from '../components/EditHeader'

const EditScreen = ({
    create,
}) => {
    let title = ''
    let content = ''

    return (
        <SafeAreaView style={styles.container}>
            
            <EditHeader done={() => {
                create(title, content)
            }} />

            <View style={styles.body}>
                <TextInput 
                    placeholder="제목" 
                    onChangeText={(text) => { 
                        title = text 
                    }}
                    style={styles.title}
                />
                <View style={styles.divider} />
                <TextInput 
                    placeholder="이곳을 눌러 작성을 시작하세요." 
                    multiline={true}
                    onChangeText={(text) => { 
                        content = text 
                    }}
                    style={styles.content}
                />
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#212121',
    },
    content: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 20,
        color: '#424242', 
    },
    divider: {
        marginTop: 12,
        marginBottom: 12,
        height: 1,
        width: '100%',
        backgroundColor: '#f1f1f1',
    }
})

export default withContext(EditScreen)