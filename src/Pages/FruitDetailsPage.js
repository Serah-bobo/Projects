import { useParams } from "react-router-dom";
import Data from "../data/Data";
       
import { Link } from "react-router-dom";
const FruitDetailsPage = ({fruits}) => {
    
    const {id}= useParams();
  const fruit=Data.find(fruit=>fruit.id===id);
   
        
        <div className="container mx-auto py-8">
             <Link to={`/fruits/${fruit.id}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{fruit.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img src={fruit.image} alt={fruit.name} className="w-full h-auto" />
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Nutritional Information</h3>
                  <p className="text-gray-700">Calories: {fruit.nutrition.calories}</p>
                  <p className="text-gray-700">Carbohydrates: {fruit.nutrition.carbohydrates}g</p>
                  <p className="text-gray-700">Fiber: {fruit.nutrition.fiber}g</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Categories</h3>
                  <ul>
                    {fruit.categories.map((category) => (
                      <li key={category.id} className="text-gray-700">{category}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      return (
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse Fruits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ul>
          {Data.map((fruit) => (
              <li key={fruit.id} fruit={fruit} ></li>
            ))}
          </ul>
            
          </div>
        </div>
      );
      
}

export default FruitDetailsPage
