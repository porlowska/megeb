import RecipeSection from "./RecipeSection";
import SearchBar from "./SearchBar";
import { useState } from "react";
import data from "../../api/endpoint-test";
import axios from "axios";
import extractData from "@/app/api/extractData";

// create .env file for keys!!

const RecipeSearch = () => {
  let extractedData;
  const [recipes, setRecipes] = useState(data.recipes);
  const [isSearched, setisSearched] = useState(false);

  const handleSearch = async (
    // searchBy,
    input,
    category,
    cuisine,
    diet,
    intolerances,
  ) => {
    const options =
      // searchBy === "recipe name"
      {
        method: "GET",
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
        params: {
          query: input,
          cuisine: cuisine,
          diet: diet,
          intolerances: intolerances,
          type: category,
          instructionsRequired: "true",
          addRecipeInformation: "true",
          fillIngredients: "true",
          number: "10",
        },
        headers: {
          "x-rapidapi-key":
            "06c5b738f4mshc8d3980a4797856p1bc186jsn6b1d2e762eba",
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
    // : {
    //     method: "GET",
    //     url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
    //     params: {
    //       ingredients: input,
    //       number: "2",
    //     },
    //     headers: {
    //       "x-rapidapi-key":
    //         "06c5b738f4mshc8d3980a4797856p1bc186jsn6b1d2e762eba",
    //       "x-rapidapi-host":
    //         "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //     },
    //  };

    try {
      const response = await axios.request(options);
      extractedData = extractData(response.data.results);
      setisSearched(true);
      localStorage.clear();
      setRecipes(extractedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} errorMessage={"error"} />
      <RecipeSection recipes={recipes} isSearched={isSearched} />
    </div>
  );
};

export default RecipeSearch;
