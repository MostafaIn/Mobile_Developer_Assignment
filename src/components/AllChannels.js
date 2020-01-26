import React,{Fragment,Component} from 'react'
import { StyleSheet , View, Text, TouchableOpacity, Image } from 'react-native'

import {channelsList} from '../../channelsList';
import Channel from './Channel';


class AllChannels extends Component{
    state={
        playlist: null,
    }

    componentDidMount (){
        {channelsList
            .map((item,index) => (index === 0) 
            && this.setState({ 
                playlist: item.playlist,
            })
            )
        }
    };

    render(){
        const {playlist} = this.state;
        return (
            <Fragment>
            <View style={styles.videoContainer}>
                {(playlist) ? <Channel playlist={this.state.playlist}/> : null}
            </View>
            <View style={styles.channelContainer}>
                {channelsList.map( item => <View key={item.id}>
                    <TouchableOpacity 
                        onPress={()=> this.setState({ playlist: item.playlist })} 
                        style={(playlist === item.playlist) ? styles.selectedChannelIcon : styles.ChannelIcon}
                    >
                    <Image source={item.icon} style={styles.channelImg}/>
                    <Text style={styles.title}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text> </Text>
                </View>)}
            </View>
            </Fragment>
        )
    }
    
}
export default AllChannels;
 
const styles = StyleSheet.create({
    videoContainer:{
        flex:2,
        justifyContent: 'space-evenly',
        flexDirection:'row',
        alignItems:'flex-end',
        marginTop:40
    },
    channelContainer:{
        flex:1,
        justifyContent: 'space-evenly',
        flexDirection:'row',
        margin:10,
        alignItems:'flex-end',
    },
    ChannelIcon:{
        width:90,
        height:80,
        borderColor:'#333',
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:15,
        padding:10,
    },
    selectedChannelIcon:{
        width:90,
        height:80,
        backgroundColor:'#bcc',
        borderColor:'#1d4fc4',
        borderStyle:'solid',
        borderWidth:3,
        padding:10,
    },
    channelImg:{
        width:20,
        height:20
    },
    title:{
        position:'relative',
        fontSize:14,
        textAlign:'center',
        color:'#333',
        paddingTop:10,
    }
});