import React from "react";
import { View, Text } from "react-native";
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {styles} from './styles';
import { router } from 'expo-router';

interface DefaultHeaderProps {
  title: string;
  showSettingButton: boolean;
  showBackButton?: boolean; /// 任意プロパティ
}

const DefaultHeader: React.FC<DefaultHeaderProps> = ({
  title,
  showSettingButton,
  showBackButton = false,
}) => {
    return (
        <Header
            leftComponent={
            <View style={{flexDirection: 'row'}}>
                {showBackButton ? <Icon 
                    name='arrow-left' 
                    color='#eeeeee' 
                    style={styles.iconContainer} 
                    onPress={()=>{router.back()}}
                />:<></>}
                <Text style={{
                    fontSize:20,
                    color:"#eeeeee",
                    fontWeight:"bold",
                    padding:10
                }}>{title}</Text>
            </View>
            }
            rightComponent={ 
                showSettingButton ? <Icon 
                    name='arrow-right' 
                    color='#eeeeee' 
                    style={styles.iconContainer} 
                    onPress={()=>{router.navigate("../settings")}}
                /> : <></>
            }
            backgroundColor="#222222"
            leftContainerStyle={styles.leftContainer}
        />
    );
};

export default DefaultHeader;
