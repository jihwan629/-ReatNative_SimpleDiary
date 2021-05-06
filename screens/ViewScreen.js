import React from 'react'
import { 
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
 } from 'react-native'
 import { SafeAreaView } from 'react-native-safe-area-context'
 import { withNavigation } from 'react-navigation'
 import { withContext } from 'react-simplified-context'
 import ViewHeader from '../components/ViewHeader'

 const ViewScreen = ({
     navigation,
     articles,
     toggle,
 }) => {
    const id = navigation.getParam('id', -1)
    const article = articles.find((a) => {
        return a.id == id
    })

     return (
         <SafeAreaView style={styles.container}>

             <ViewHeader 
                title={article.title} 
                bookmarked = {article.bookmarked}
                bookmark={() => {
                    toggle(id)
                }}
            />

             <ScrollView>
                 <TouchableOpacity
                    activeOpacity={0.8}
                    onLongPress={() => {
                        navigation.navigate('Edit', { id: id })
                    }}
                 >
                    <Text style={styles.content}>
                        {article.content}
                    </Text>
                 </TouchableOpacity>
                 
                 <Text style={styles.date}>
                     {article.date}
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

 export default withNavigation(withContext(ViewScreen))