import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function TabAccountScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle" style={{fontSize:100,padding:10, paddingTop:30}}/>
      <TextInput style={{borderWidth:1,width:"75%",height:30,borderRadius:100,fontSize:18}} placeholder='名前' textAlign='center'/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height:"100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});