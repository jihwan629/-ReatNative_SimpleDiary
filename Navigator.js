import React from 'react'
import { createAppContainer } from 'react-navigation'
import { ceateBottomTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import ListScreen from './screens/ListScreen'
import BookmarkScreen from './screens/BookmarkScreen'

const TabNavigator = createBottomTabNavigator({
    List: {
        screen: ListScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons name="md-list" size={25} color={tintColor} 
                />
            },
            tabBarLabel: '목록',
        }
    },

    Bookmark: {
        screen: BookmarkScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons name="md-heart" size={25} color={tintColor} 
                />
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: '#424242',
        inactiveTintColor: '#9e9e9e',
        showLabel: false,
        style: {
            backgroundColor: '#ffffff',
            borderTopColor: '#bdbdbd',
        }
    }
}) 

export default createAppContainer(TabNavigator)