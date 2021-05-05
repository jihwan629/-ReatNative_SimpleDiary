import React from 'react'
import { 
    Text,
    StyleSheet,
 } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const ListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="나의글"></Header>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ListScreen