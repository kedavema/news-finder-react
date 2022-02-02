import React from 'react';
import { useSelect } from '../hooks/useSelect';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css';


export const Formulario = ({setCategory}) => {

  // custom hook
  const [ category, SelectNoticias ] = useSelect('general');

  // cuando le damos submit al form pasamos la categoria a app.js
  const buscarNoticias = e => {
    e.preventDefault();

    setCategory(category);
  }

  return (
    <div className={`row ${styles.buscador}`}>
      <div className='col s12 m8 offset-m2'>
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra noticias por Categoría</h2>

          <SelectNoticias />

          <div className='input-field col s12'>
            <input 
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  setCategory: PropTypes.func.isRequired
}
