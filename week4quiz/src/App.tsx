import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Cars from './components/Cars';
import Search from './components/Search';

type CarListProps = {
  id: string;
  make: string;
  model: string;
  color: string;
}[];

// turn IDs into strings 
const App = () => {
  const [search, setSearch] = useState('');
  const [carList, setCarList] = useState<CarListProps>([ {

    id: '1',
 
   make: 'Audi',
 
   model: 'A4',
 
    color: 'green'
 
  },
 
  {
 
    id: '2',
 
    make: 'Honda',
 
    model: 'Accord',
 
    color: 'purple'
 
  },
 
  {
 
    id: '3',
 
    make: 'Ford',
 
    model: 'Bronco',
 
    color: 'red'
 
  }
 
 ]);


  const handleDelete = (id: string) => {
    setCarList((prev) => prev.filter((g) => g.id !== id));
  };

  const filterTask = (make: string) => {
    if (make) {
        setSearch(make);
    } else {
        setSearch('');
    }
};

  
  
    return (
      <div>
      <Header title="My Car List"/>
      <Search filterTasks={filterTask} />
      {carList.filter((t) => t.make.toLowerCase().includes(search.toLowerCase()))
        .map((g) => (
        <Cars make={g.make}
          model={g.model}
          color={g.color}
          onDelete={handleDelete}
          id={g.id}
          key={g.id.toString()}    
          />
          
      ))}
    </div>
    );
  };
  
  export default App;