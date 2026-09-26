import React from 'react'
import { SplitScreen } from './SplitScreen';
import {LargePerson} from './LargePerson';
import { SmallPerson } from './SmallPerson';
import { RegularList } from './RegularList';


const products = [
  {
    name: "Wireless Headphones",
    price: 2499,
    description: "Over-ear wireless headphones with noise cancellation and deep bass.",
    rating: 4.5
  },
  {
    name: "Smart Watch",
    price: 3999,
    description: "Fitness smartwatch with heart-rate monitoring, GPS, and notifications.",
    rating: 4.3
  },
  {
    name: "Mechanical Keyboard",
    price: 2999,
    description: "RGB mechanical keyboard with tactile switches and a compact design.",
    rating: 4.7
  },
  {
    name: "Wireless Mouse",
    price: 1299,
    description: "Ergonomic wireless mouse with adjustable DPI and long battery life.",
    rating: 4.4
  },
  {
    name: "Laptop Backpack",
    price: 1799,
    description: "Water-resistant backpack with a dedicated laptop compartment.",
    rating: 4.6
  },
  {
    name: "Bluetooth Speaker",
    price: 2199,
    description: "Portable Bluetooth speaker with powerful sound and 12-hour battery life.",
    rating: 4.2
  },
  {
    name: "USB-C Hub",
    price: 1499,
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card support.",
    rating: 4.5
  },
  {
    name: "Webcam",
    price: 1999,
    description: "Full HD webcam with built-in microphone for meetings and streaming.",
    rating: 4.1
  },
  {
    name: "Gaming Chair",
    price: 8999,
    description: "Ergonomic gaming chair with adjustable armrests and reclining backrest.",
    rating: 4.6
  },
  {
    name: "Power Bank",
    price: 1599,
    description: "10000mAh fast-charging power bank with dual USB output.",
    rating: 4.3
  }
];

const people = [
  {
    name: "Saurabh",
    age: 26,
    hairColor: "Black",
    hobbies: ["Coding", "Cricket", "Music"]
  },
  {
    name: "Rahul",
    age: 24,
    hairColor: "Black",
    hobbies: ["Gaming", "Traveling", "Photography"]
  },
  {
    name: "Amit",
    age: 28,
    hairColor: "Brown",
    hobbies: ["Reading", "Football", "Cooking"]
  },
  {
    name: "Priya",
    age: 25,
    hairColor: "Black",
    hobbies: ["Dancing", "Painting", "Music"]
  },
  {
    name: "Neha",
    age: 23,
    hairColor: "Brown",
    hobbies: ["Yoga", "Reading", "Traveling"]
  },
  {
    name: "Vikash",
    age: 27,
    hairColor: "Black",
    hobbies: ["Cricket", "Cycling", "Gaming"]
  },
  {
    name: "Sneha",
    age: 26,
    hairColor: "Black",
    hobbies: ["Photography", "Dancing", "Cooking"]
  },
  {
    name: "Rohit",
    age: 30,
    hairColor: "Brown",
    hobbies: ["Football", "Running", "Movies"]
  },
  {
    name: "Pooja",
    age: 22,
    hairColor: "Black",
    hobbies: ["Singing", "Drawing", "Reading"]
  },
  {
    name: "Akash",
    age: 29,
    hairColor: "Black",
    hobbies: ["Coding", "Traveling", "Chess"]
  }
];

const LeftHandComponent = ()=>{
  return (
    <h1 className='font-bold text-4xl bg-purple-500'>Left Hand Component</h1>
  )
}
const RightHandComponent = ()=>{
  return (
    <h1 className='font-bold text4xl bg-amber-950 text-red-800'>Right Hand Component</h1>
  )
}



function App() {
  
   
  return (
    <div >
       <SplitScreen left={LeftHandComponent} right={RightHandComponent}/>

       <div>
          <RegularList 
            items={people}
            resourceName="person"
            itemComponent={LargePerson}
          />
           <RegularList 
            items={people}
            resourceName="person"
            itemComponent={SmallPerson}
          />
       </div>
    </div>
  )
}

export default App