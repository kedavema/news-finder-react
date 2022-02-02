import React from 'react';
import { Noticia } from './Noticia';
import PropTypes from 'prop-types';


export const ListadoNoticias = ({allNews}) => {
  return (
    <div className='row'>
      {
        allNews?.map( newObj => (
          <Noticia 
            key={newObj.url}
            a_new={newObj}
          />
        ))
      }
    </div>
  );
};


ListadoNoticias.propTypes = {
  all_news: PropTypes.array.isRequired
}