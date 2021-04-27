import React from 'react'
import { 
    Text,
    StyleSheet,
 } from 'react-native'
 import { SafeAreaView } from 'react-native-safe-area-context'

const BookmarkScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                즐겨 찾기
            </Text>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BookmarkScreen