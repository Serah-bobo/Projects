import Apple from '../Photos/Apple.jpeg'
import Banana from '../Photos/Banana.jpeg'
import grapes from '../Photos/grapes.jpeg'
import Orange from '../Photos/Orange.jpeg'
const Data=[
    {
        id:1,
      "name": "Apple",
      "image":Apple ,
      "nutrition": {
        "calories": 52,
        "carbohydrates": 14,
        "fiber": 2.4,
        'price':'$60',
        'quantity':'1 kg'
      },
      "categories": ["Fruits", "Fresh Produce"]
    },
    {
        id:2,
      "name": "Banana",
      "image":Banana,
      "nutrition": {
        "calories": 89,
        "carbohydrates": 23,
        "fiber": 2.6,
        'price':'$50',
        'quantity':'1 kg'
      },
      "categories": ["Fruits", "Fresh Produce"]
    },
    {
        id:3,
      "name": "Orange",
      "image":Orange,
      "nutrition": {
        "calories": 62,
        "carbohydrates": 15,
        "fiber": 3.1,
        'price':'$65',
        'quantity':'1 kg'
      },
      "categories": ["Fruits", "Fresh Produce"]
    },
    {
        id:4,
      "name": "Grapes",
      "image": grapes,
      "nutrition": {
        "calories": 69,
        "carbohydrates": 18,
        "fiber": 0.9,
        'price':'$80',
        'quantity':'1 kg'
      },
      "categories": ["Fruits", "Fresh Produce"]
    }
]  


export default Data
