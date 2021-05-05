import React from 'react'
import { 
    Text,
    StyleSheet,
 } from 'react-native'
 import { SafeAreaView } from 'react-native-safe-area-context'
 import Header from '../components/Header'

const BookmarkScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="즐겨찾기"></Header>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BookmarkScreen