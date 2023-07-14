import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FeaturedFoods = ( {featuredFoods} ) => {
  const navigation = useNavigation();

  // Sample data for featured foods
    featuredFoods = [
        { id: '1', name: 'Mulokooni wanputa', image: 'image 2.png', price: 12300, discount: 0.2, delivery: true },
        { id: '2', name: 'Banana (Luwagu)', image: 'https://example.com/food2.jpg', price: 12.99, discount: 0, delivery: true },
        { id: '3', name: 'Irish potatoes (Bumonde)', image: 'https://example.com/food3.jpg', price: 7.99, discount: 0.1, delivery: false },
        { id: '1', name: 'Fish (Kyenyanja)', image: 'https://example.com/food1.jpg', price: 9.99, discount: null, delivery: true },
        { id: '2', name: 'Beans (All categories)', image: 'https://example.com/food2.jpg', price: 12.99, discount: 0.15, delivery: 'false' },
        { id: '3', name: 'Beaf Meat (Eyante)', image: 'https://example.com/food3.jpg', price: 7.99, discount: 0.1, delivery: 'true' },
        // Add more food items as needed
  ];

  // Handle food item click
  const handleFoodItemClick = (foodId) => {
    // Navigate to the details page for the selected food item
    navigation.navigate('Details', { foodId });
  };

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'UGX' });
  };

  const truncateFoodName = (name, maxLength) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength - 3) + '...';
    }
    return name;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Foods</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {featuredFoods.map((food, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleFoodItemClick(food.id)}
          >
            <Image source={{ uri: food.image }} style={styles.foodImage} />
            {food.discount !== 0 && food.discount !== null && (
              <View style={styles.discountCard}>
                <Text style={styles.discountText}>-{food.discount * 100}%</Text>
              </View>
            )}
            {food.delivery && (
              <View style={styles.freeDeliveryContainer}>
                <Text style={styles.freeDeliveryText}>Free Delivery</Text>
              </View>
            )}
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.foodName}>
              {truncateFoodName(food.name, 20)}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.discountedPrice}>{formatPrice(food.price)}</Text>
              {food.discount !== 0 && food.discount !== null && (
                <Text style={styles.originalPrice}>{formatPrice(food.price / (1 - food.discount))}</Text>
              )}
            </View>
            {/* <Text numberOfLines={1} ellipsizeMode="tail" style={styles.foodName} styles={{color:"#FF9314"}} >
              {truncateFoodName(food.name, 20)}
            </Text>
             */}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 10,
  },
  scrollViewContent: {
    backgroundColor: 'white',
  },
  card: {
    width: 150,
    marginRight: 10,
    marginBottom: 10,
  },
  foodImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  discountCard: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  foodName: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginHorizontal: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPrice: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 5,
  },
  originalPrice: {
    fontSize: 12,
    marginHorizontal: 5,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  freeDeliveryContainer: {
    // marginTop: 6,
    // backgroundColor: 'green',
    // paddingHorizontal: 4,
    // paddingVertical: 2,
    // borderRadius: 4,
    position: 'absolute',
    bottom: 50,
    right: 8,
    backgroundColor: 'green',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    
  },
  freeDeliveryText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default FeaturedFoods;
