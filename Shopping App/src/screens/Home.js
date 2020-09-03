import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,ImageBackground
} from "react-native";

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}
                    style={{marginBottom:10}}>
                    <View>
                    <ImageBackground style={{height:218,width:380}}
                        source={{uri: 'https://media.istockphoto.com/photos/books-picture-id949118068?k=6&m=949118068&s=612x612&w=0&h=JQ8TsVv0Bx36l1KwwhOaAz564l8MIDSRFebHbLqGjIA=', }}>
                        <Text style={{color:'white',fontSize:30,fontWeight:'bold',margin:10}}>Books</Text>
                    </ImageBackground>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('HouseHold')}
                    style={{marginBottom:10}}>
                    <View>
                    <ImageBackground style={{height:218,width:380}}
                        source={{uri: 'https://thumbs.dreamstime.com/z/painting-set-isolated-images-furniture-household-items-white-background-refrigerator-lamps-chandeliers-floor-lamp-191612300.jpg', }}>
                        <Text style={{color:'black',fontSize:30,fontWeight:'bold',margin:10}}>HouseHold Items</Text>
                    </ImageBackground>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Ofice')}
                    style={{marginBottom:10}}>
                    <View>
                    <ImageBackground style={{height:218,width:380}}
                        source={{uri: 'https://previews.123rf.com/images/klavapuk/klavapuk1110/klavapuk111000005/10916758-icons-of-office-equipment.jpg', }}>
                        <Text style={{color:'black',fontSize:30,fontWeight:'bold',margin:10}}>Office Equipments</Text>
                    </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
