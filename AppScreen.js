import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl, TextInput } from 'react-native';
import Food from './Food';
const myRecipes = [
  {
    recipe: {
      label: 'Chicken Biriyani',
      //x: 'Pizza Margherita',
      dishType: ['Main Course'],
      //ingredientLines: ['Ingredient 1', 'Ingredient 2'],
      url: 'https://www.indianhealthyrecipes.com/hyderabadi-biryani-recipe/'
    }
  },
  {
    recipe: {
      label: 'Paneer Butter Masala',
      //image: 'URL_TO_IMAGE',
      dishType: ['Side'],
      //ingredientLines: ['Ingredient 1', 'Ingredient 2'],
      url: 'https://www.cookwithmanali.com/paneer-butter-masala-recipe/'
    }
  },
  {
    recipe: {
      label: 'Kodi pulusu',
     // image: 'URL_TO_IMAGE',
      dishType: ['Curry'],
      //ingredientLines: ['Ingredient 1', 'Ingredient 2'],
      url: 'https://www.indianhealthyrecipes.com/chicken-curry'
    }
  },
  {
    recipe: {
      label: 'GulabJamoon',
     // image: 'URL_TO_IMAGE',
      dishType: ['Dessert'],
      //ingredientLines: ['Ingredient 1', 'Ingredient 2'],
      url: 'https://www.indianhealthyrecipes.com/gulab-jamun-recipe-using-milk-powder/'
    }
  },
  // Add 4 more recipes here
];

// Define your App component
const AppScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(myRecipes);

  const filterRecipes = () => {
    if (!searchQuery.trim()) {
      // If search query is empty, show all recipes
      setFilteredRecipes(myRecipes);
    } else {
      // Filter recipes based on search query
      const filtered = myRecipes.filter(recipe => recipe.recipe.label.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredRecipes(filtered);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 30 }}>
      <View style={{ backgroundColor: '#32CD32', padding: 20, marginBottom: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 5 }}>
        YC Food Recipe App
        </Text>
      </View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingLeft: 10, marginBottom: 10 }}
        placeholder="Search recipes..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        onSubmitEditing={filterRecipes}
      />
      <ScrollView style={{ marginHorizontal: 20 }}>
        {filteredRecipes.length === 0 ? (
          <Text style={{ textAlign: 'center', color: '#757575', marginTop: 20 }}>
            No recipes found. Try a different search term.
          </Text>
        ) : (
          filteredRecipes.map((recipe, index) => (
            <Food key={index} recipe={recipe.recipe} />
          ))
        )}
      </ScrollView>
    </View>
  );
};
export default AppScreen;