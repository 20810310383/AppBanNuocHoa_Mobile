import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function DrinkItem(props) {
  const { item, navigation, index } = props;
  const goToDetail = () => {
    if (navigation) {
      navigation.navigate('DrinkDetailScreen', {
        item: item,
      });
    }
  };
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={{
          ...styles.container,
          backgroundColor: 'rgba(225,225,225,.50)',
          borderColor: 'black',
          borderWidth: '1px',
        }}
        onPress={goToDetail}
      >
        <Image style={styles.imageStyle} source={{ uri: item?.image }} />
        <View style={styles.infoContainer}>
          <Text
            numberOfLines={1}
            style={{
              color: '#000',
              fontWeight: 'bold',
              marginVertical: 8,
            }}
          >
            {item?.name}
          </Text>
          <View style={{
            flexDirection: 'row'
          }}>
            <Text style={{ color: 'black', fontWeight: 'bold', flex: 1 }}>
              {item?.price} VND
            </Text>
            <View
              style={{
                padding: 2,
                backgroundColor: 'orange',
                borderRadius: 8,
                alignItems: 'center',
                position: 'absolute',
                bottom: -5,
                right: -5,
              }}
            >
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: '#fff',
                }}
                source={require('../../assets/Basket.png')}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default DrinkItem;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 230,
    borderRadius: 14,
  },
  container: {
    width: 260,
    height: 300,
    borderRadius: 14,
    // overflow: 'hidden',
    backgroundColor: '#fff',
    marginLeft: 12,
    flex: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },


  infoContainer: {
    paddingHorizontal: 12,
    marginBottom: 12,
  },
});
