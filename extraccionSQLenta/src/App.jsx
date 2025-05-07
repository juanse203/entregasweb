import { useState, useEffect } from 'react'
// import { doc, getDoc } from "firebase/firestore";  // para un documento
import { collection, query, where, getDocs } from "firebase/firestore";  // para varios documentos
import db from './FireBase/FireBase'
import './App.css'
import Header from './Componentes/Header/Header';
import Cards from './Componentes/Cards/Cards'

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const getPets = async () => {
      //------ OBTENER VARIOS DOCUMENTOS DE FIREBASE ------
      const q = query(collection(db, "animales"));

      const querySnapshot = await getDocs(q);
      const filteredPets = [];
      querySnapshot.forEach((doc) => {
        filteredPets.push({
          id: doc.id,
          ...doc.data()
        });
      });
      console.log(filteredPets);
      setPets(filteredPets);
    }
    getPets();
  }, [])

  return (
    <main>
      <Header></Header>
      {/* {pets != null ? <CardPet pet={pets} /> : <h6>Cargando...</h6>} //PARA PINTAR UN OBJETO  */}
      {
        // pets.length > 0 ? pets.map((pet) => (
          //   <CardPet key={pet.id} pet={pet} />
          // )) : <h6>Cargando...</h6>
          pets.map((item) => (
          <Cards key={item.id} pet={item} />
        ))
      }
    </main>
  )
}

export default App