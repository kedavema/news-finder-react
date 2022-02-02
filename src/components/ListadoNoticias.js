import React from 'react';
import { Noticia } from './Noticia';
import PropTypes from 'prop-types';


export const ListadoNoticias = ({all_news}) => {
  return (
    <div className='row'>
      {
        all_news?.map( a_new => (
          <Noticia 
            key={a_new.url}
            a_new={a_new}
          />
        ))
      }
    </div>
  );
};


ListadoNoticias.propTypes = {
  all_news: PropTypes.array.isRequired
}