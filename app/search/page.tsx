import NaviBar from "../components/NaviBar";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";

export default function Home() {
    
      return (
        <main className="">
          <NaviBar/>
          <SearchBar/>
          <div>
            <h2>Searched recipies</h2>
            {/* iterrated */}
              <RecipeCard/> 
          </div>
          <Footer/>
        </main>
      );
    }
    