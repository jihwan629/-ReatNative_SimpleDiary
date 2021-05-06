import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { withContext } from 'react-simplified-context'
import { Ionicons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import DeleteButton from './DeleteButton'

const ArticleItem = ({
    article: {
        id,
        title,
        content,
        date,
    },
    navigation,
    remove,
}) => {
    return (
        <Swipeable
            renderRightActions = {() =>
                <DeleteButton onPress={() => remove(id)} />
            }
        >
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                navigation.navigate('View', { id: id })
            }}
            >
                <View style={styles.container}>
                    <View style={styles.icon}>
                        <Ionicons name="md-list" size={14} color="#9e9e9e" />
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Text
                            numberOfLines={2}
                            style={styles.content}
                        >
                            {content}
                        </Text>
                        <Text style={styles.date}>
                            {date}
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        paddingBottom: 0,
    },
    icon: {
        width: 16,
        height: 16,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.select({
            ios: 1,
            android: 4,
        })
    },
    info: {
        flex: 1,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    title: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '600',
        color: '#212121',
    },
    content: {
        marginBottom: 4,
        fontSize: 14,
        color: '#9e9e9e',
        lineHeight: 18,
    },
    date: {
        fontSize: 12,
        color: '#bdbdbd',
    }
})

export default withNavigation(withContext(ArticleItem))