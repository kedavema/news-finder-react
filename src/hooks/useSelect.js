import React, {useState} from 'react';

export const useSelect = ({ initialState }) => {

  const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' }
  ]

  // state del custom hook
  const [state, setState] = useState(initialState)
  
  const SelectNoticias = () => (

    <select
      className='browser-default'
      defaultValue={initialState}
      value={ state }
      onChange={e => { setState(e.target.value) }}
    >

      {
        OPCIONES?.map( an_option => (
          <option
            key={ an_option.value }
            value={ an_option.value }
          >
            {an_option.label}
          </option>
        ))
      }
    </select>

  );

  return [state, SelectNoticias];

};
