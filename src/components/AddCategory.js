import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    //La caja de texto debe tener un estado 
    const [inputValue, setInputValue] = useState('');

    //Función que se ejecuta cada vez que el usuario escribe en el input
    const handleInputChange = e => {
        
        setInputValue( e.target.value );
    }

    const handleSubmit = e => {

        e.preventDefault();

        if(inputValue.trim().length > 2){
             
            //setCategories se puede llamar con un callback porque tiene el estado anterior
            setCategories( cats => [inputValue, ...cats]);

            setInputValue('');
        }
    }

  return (
    <form onSubmit={ handleSubmit }>
        <input    
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
        />
    </form>
  )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;