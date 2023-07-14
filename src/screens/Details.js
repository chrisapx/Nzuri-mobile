import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Details = ({ itemId }) => {
  

  //fetch the food item based on the oassed in id and then pass the details to the tags down for display.
  //This is the id that will be used dusing payment logic to mark the item as bought
  const item = 
    {
      id:2, 
      name:'Bogoya', 
      description:' Bogoya is rich in essential nutrients, including dietary fiber, potassium, vitamin C, vitamin B6, and magnesium. It is also a good source of energy due to its high carbohydrate content. Consuming bogoya as part of a balanced diet can contribute to overall nutritional well-being.',
      price: 145000,
      delivery: true,
      pictures: [
        {
          id: '1',
          url: 'pics.coms/image2'
        },
        {
          id: '2',
          url: 'pics.coms/image3'
        },
        {
          id: '3',
          url: 'pics.coms/image4'
        },
        {
          id: '3',
          url: 'pics.coms/image4'
        }
      ]
    }

  return (

    //TODO: Add a horinzontal scroll view of the pics and add details container,
    //Also add the food values and benefits of the food,
    //Also add the preparation steps of the product. {This should be added to the Order product details after puchase}
    //Then add the touchable opacity container with a word add to cart and navigating to orders page with the item id.

    //Then lastly, add related items in two horizontal scroll lists, One for cheaper and the other for more expensive
    <View>
      <Text>This is the details page</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  vavs: {
    flex: 1,
  },
});
