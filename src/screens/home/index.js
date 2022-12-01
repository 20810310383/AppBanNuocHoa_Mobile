import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View,Image } from 'react-native';
import ProductItem from '../../components/ProductItem';
import data from '../../data/product.json';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const renderItem = ({ item, index }) => {
    return <ProductItem item={item} index={index} navigation={navigation} />;
  };
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View>
      <Image
        style={{
          alignSelf: 'center',
          height: 180,
          resizeMode: 'contain',
          width: 333,
        }}
        source={require('../../../assets/LOGOTQ-removebg-preview.png')}
      />
      <ScrollView
        style={{
          paddingHorizontal: 12,
          marginTop: StatusBar.currentHeight + 0,
          height: "80%",
          width: "100%",
        }}
        resizeMode='stretch'
      >
        <View
          style={{
            backgroundColor: '#FFCCCC',
            padding: 20,
            borderRadius: 12,
          }}
        >

          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={{ fontSize: 22 }}>{`Xin chào, ${user && user.name}!`}</Text>

          </View>
          <View style={{ width: "100%", height: 10 }}>
          </View>
          <Text style={{ fontSize: 18 }}>Chào mừng đến với thế giới của hương thơm !!!</Text>

        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Tất cả sản phẩm</Text>

          <FlatList
            data={data}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
}
