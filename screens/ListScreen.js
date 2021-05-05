import React from 'react'
import { 
    Text,
    StyleSheet,
 } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import ArticleItem from '../components/ArticleItem'

const ListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="나의글"></Header>
            <ArticleItem
                article={{
                    id: 1,
                    title: '청춘의 문장들',
                    content: '사이에 있는 것들, 쉽게 바뀌는 것들, 덧없이 사라지는 것들이 여전히 내 마음을 잡아끈다',
                    date: '2019년 4월 7일',
                }}
            />
            <ArticleItem
                article={{
                    id: 2,
                    title: '문장들',
                    content: '내게도 꿈이라는 것이 몇 개 있다. 그 중 하나는 마음을 잡아끄는 그 절실함을 문장으로 옮기는 일.',
                    date: '2019년 4월 7일',
                }}
            />
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ListScreen