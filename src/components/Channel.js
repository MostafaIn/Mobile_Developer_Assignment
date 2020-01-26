import React,{Component} from 'react'
import { StyleSheet,View, Text, TouchableOpacity, Dimensions,Image } from 'react-native'

import YouTube from 'react-native-youtube';


class Channel extends Component{
    state={
        isReady: false,
        isPlaying: true,
        fullscreen: false,
        status: null,
        error: null,
        screenHeight: Dimensions.get('window').height,
        screenWidth: Dimensions.get('window').width
    };

    handlePlay = () =>{
      this.setState({
        isPlaying: !this.state.isPlaying
      })
    };

    handleNext = () =>{
        if (this._youTubeRef.current) {
            this._youTubeRef.current
            .nextVideo()
        }
    };
        
    handlePrev = () =>{
      if (this._youTubeRef.current) {
        this._youTubeRef.current
        .previousVideo()
      }

    };

    _youTubeRef = React.createRef();

    render(){
      const { isPlaying, fullscreen, status, screenWidth, screenHeight } = this.state;
        return (
            <View style={styles.container}>
                <View>
                <YouTube
                    ref={this._youTubeRef}
                    videoIds={this.props.playlist}
                    play={isPlaying}
                    fullscreen={(screenHeight > screenWidth) ? fullscreen : !fullscreen} 
                    loop
                    onError={e => {this.setState({ error: e.error })}}
                    onReady={() => {this.setState({ isReady: true })}}
                    onChangeState={e => {this.setState({ status: e.state })}}
                    onChangeFullscreen={e => {this.setState({ fullscreen: e.isFullscreen })}}
                    style={styles.player}
                />
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.handlePrev}>
                      <Image source={require('../images/previous.png')} style={styles.controllerImg} />
                      <Text style={{textAlign:'center',color:'#747474'}}>prev</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handlePlay}>
                      {status == 'playing' ? 
                        <View>
                          <Image source={require('../images/pause.png')} style={styles.controllerImg} />
                          <Text style={{textAlign:'center'}}>pause</Text>
                        </View>
                        :
                        <View>
                        <Image source={require('../images/play.png')} style={styles.controllerImg} />
                        <Text style={{textAlign:'center',color:'#747474'}}>play</Text>
                        </View>
                      }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleNext}>
                    <Image source={require('../images/next.png')} style={styles.controllerImg} />
                    <Text style={{textAlign:'center',color:'#747474'}}>next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
}

export default Channel

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    player:{
      alignSelf:'stretch',
      height:400,
    },
    btns: {
      flexDirection: 'row',
      justifyContent:'space-evenly',
      padding: 20,
    },
    controllerImg:{
      width:40,
      height:40
    },
    controllerTitle:{
      textAlign:'center',
      color:'#747474'
    }
});
