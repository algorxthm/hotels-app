import React, { Component } from 'react'
import { StyleSheet, View,Image,TouchableOpacity } from 'react-native'

export default class SavoyHotel extends Component {
    render() {
        return (
            <View>
               
                <TouchableOpacity>
                <Image style={styles.icon} source={require('../Assets/kimberleyDowntown.jpg')} />
                </TouchableOpacity>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
            icon:{
                width: 149,
                height: 145,
                marginTop: '12%',
                borderRadius: 20
                
            },
            
})
