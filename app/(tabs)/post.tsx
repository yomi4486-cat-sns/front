import { StyleSheet } from 'react-native';
import DefaultHeader from '../Header-post';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, } from '@/components/Themed';

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <DefaultHeader title="新規作成" showSettingButton={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
