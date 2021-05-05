import React from 'react'
import { 
    Text,
    ScrollView,
    StyleSheet,
 } from 'react-native'
 import { SafeAreaView } from 'react-native-safe-area-context'
 import ViewHeader from '../components/ViewHeader'

 const ViewScreen = () => {
     return (
         <SafeAreaView style={styles.container}>
             <ViewHeader />
             <ScrollView>
                 <Text style={styles.content}>
                    오늘의 넷플릭스에서 나의 문어 선생님을 봤다. 정말 재밌고 슬펐다.
                    다음에는 타이거 킹을 볼 생각이다.
                 </Text>
                 <Text style={styles.date}>
                     2021년 5월 5일
                 </Text>
             </ScrollView>
         </SafeAreaView>
     )
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
     content: {
         padding: 20,
         fontSize: 16,
         lineHeight: 20,
         color: '#424242',
     },
     date: {
         padding: 20,
         paddingTop: 20,
         fontSize: 12,
         color: '#bdbdbd',
     }
 })

 export default ViewScreen