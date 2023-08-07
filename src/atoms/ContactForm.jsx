import React, {useState} from 'react'
import { Input, Textarea } from '/src/atoms/Input'
import ButtonGrey from '/src/atoms/ButtonGrey'

import person from '/src/assets/icons/contactForm/person.svg'
import asunto from '/src/assets/icons/contactForm/asunto.svg'
import phoneForm from '/src/assets/icons/contactForm/icon-telefono-form.svg'
import emailForm from '/src/assets/icons/contactForm/icon-mail-form.svg'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        asunto: '',
        telefono: '',
        email: '',
        mensaje: '',
      });
      const [isFormValid, setIsFormValid] = useState(false);
       const [errors, setErrors] = useState({
        nombre: '',
        asunto: '',
        telefono: '',
        email: '',
        mensaje: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        validateField(name, value);
      };
    
      const handleInputBlur = (event) => {
        const { name, value } = event.target;
        validateField(name, value);
        validateForm()
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
          console.log('Form Data:', formData);
          // Here, you can perform further actions like sending the data to a server or processing it.
        }
      };
    
      const validateForm = () => {
        const newErrors = {};
    
        // Validate each field and set error messages
        Object.keys(formData).forEach((fieldName) => {
          validateField(fieldName, formData[fieldName], newErrors);
        });
    
        setErrors(newErrors);
    
        // Check if all errors are empty
        const allErrorsEmpty = Object.values(newErrors).every((error) => !error);
        setIsFormValid(allErrorsEmpty);
    
        // Return true if no errors, else false
        return allErrorsEmpty;
      };
    
      const validateField = (fieldName, value, newErrors = {}) => {
        // Add your specific validation logic for each field here
        if (!value.trim()) {
          newErrors[fieldName] = 'Este campo es requerido';
        } else if (fieldName === 'email' && !isValidEmail(value)) {
          newErrors[fieldName] = 'Ingrese un correo electrónico válido';
        } else {
          newErrors[fieldName] = ''; // Clear the error message if the value is valid
        }
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: newErrors[fieldName],
        }));
      };
    
      const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      };
    
    
  return (
    <form action="" className="flex w-full flex-wrap gap-8" onSubmit={handleSubmit}>

    <div className="w-full sm:w-[46%]">
      <Input type='text' name="nombre" placeHolder="Nombre" icon={person} onChange={handleInputChange} 
      onBlur={handleInputBlur}/>
      {errors.nombre && <p className="text-white px-4 pt-1">{errors.nombre}</p>}
    </div>
    <div className="w-full sm:w-[46%]">
      <Input type='text' name="asunto" placeHolder="Asunto" icon={asunto} onChange={handleInputChange} 
      onBlur={handleInputBlur}/>
      {errors.asunto && <p className="text-white px-4 pt-1">{errors.asunto}</p>}
    </div>
    <div className="w-full sm:w-[46%]">
      <Input type='number' name="telefono" placeHolder="Télefono" icon={phoneForm} onChange={handleInputChange} 
      onBlur={handleInputBlur}/>
      {errors.telefono && <p className="text-white px-4 pt-1">{errors.telefono}</p>}
    </div>
    <div className="w-full sm:w-[46%]">
      <Input type='email' name="email" placeHolder="Email" icon={emailForm} onChange={handleInputChange} 
      onBlur={handleInputBlur}/>
      {errors.email && <p className="text-white px-4 pt-1">{errors.email}</p>}
    </div>
    <div className="w-full">
      <Textarea placeHolder="Mensaje... " name="mensaje" id="" cols="20" rows="10" onChange={handleInputChange} 
      onBlur={handleInputBlur}/>
      {errors.mensaje && <p className="text-white px-4 pt-1">{errors.mensaje}</p>}
    </div>
    <div>
      <ButtonGrey text={'Enviar mensaje'} disabled = {!isFormValid} type="submit"/>
    </div>
  </form>
  )
}
