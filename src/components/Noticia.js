import React from 'react';
import styles from './Noticia.module.css';
import PropTypes from 'prop-types';

export const Noticia = ({newObj}) => {

  // Extraemos los datos
  const { urlToImage, url, description, title, source } = newObj;

  const imagen = {urlToImage}?
        <div className={`card-image ${styles.box_img}`}>
          <img src={urlToImage} alt={title} height="217px"/>
          <span className='card-title'>{source.name}</span>
        </div>
    : null;

  return (
    <div className='col s12 m6 l4'>
      <div className={`card ${styles.box}`}>
          {imagen}
        <div className={`card-content ${styles.box_desc}`}>
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
        <div className={`card-action ${styles.button_dis}`}>
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className='waves-effect waves-light btn'
          >
            Ver Noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
};


Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
}