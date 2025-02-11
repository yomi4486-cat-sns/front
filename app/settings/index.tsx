import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import DefaultHeader from '../Header';
import { SettingsButtonItem } from './items';
import { useContext } from 'react';

export default function SettingsScreen() {
  return (
    <View style ={{height:"100%"}}>
        <DefaultHeader title="設定" showSettingButton={false} showBackButton={true}/>
        <View style={{borderBottomColor: 'gray',borderBottomWidth: 1,width:"50%",}}>
            <Text style={{paddingLeft:20,paddingTop:10,fontSize: 20,fontWeight: 'bold',marginBottom: 10,}}>基本</Text>
        </View>
        <SettingsButtonItem title="ログアウト" denger={true} event={()=>{}}/>
    </View>
  );
}