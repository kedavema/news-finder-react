import React, { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListadoNoticias } from './components/ListadoNoticias';

function App() {

  const [category, setCategory] = useState('');

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {

    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=bc38330fc9cb463583b815ea51472d10`;
      const res = await fetch(url);
      const {articles} = await res.json();
      setNoticias(articles);
    }
    consultarAPI();

  }, [category]);
  

  return (
    <>
      <Header 
        title={"Buscador de Noticias"} 
      />

      <div className='container white'>
        <Formulario setCategory={ setCategory } />
      </div>

      <ListadoNoticias 
        noticias={noticias}
      />
    </>
  );
}

export default App;
