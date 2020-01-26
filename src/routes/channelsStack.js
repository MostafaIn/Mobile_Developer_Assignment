import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {createAppContainer} from 'react-navigation';

import AllChannels from '../components/AllChannels'
import About from "../components/About";

const TabNavigator = createMaterialBottomTabNavigator(
    {
    CHANNELS:{
        screen: AllChannels,
    },
    ABOUT:{
        screen: About,
    }
    },
    {
        initialRouteName: 'CHANNELS',
        activeColor:'#fff',
        inactiveColor:'#3e2465',
        barStyle: { backgroundColor: '#0080ff'}
    } 
);

export default createAppContainer(TabNavigator);