import React, {useState} from "react";
import styles from "../EditPatient/EditPatient.module.css";
import iconClose from "../../../assets/dashboard/close-icon.svg";
import iconInput from "../../../assets/dashboard/input-icon.svg";
import { useDispatch } from "react-redux";
import { postPatient } from "../../../../../Redux/actions/generalActionsPatients";

const CreatePatient = ({onClick}) => {
  const dispatch = useDispatch();

  const initialInputs = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    image: ""
  };

  const [input, setInput] = useState(initialInputs);
  const [inputErrors, setInputErrors] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setInputErrors(
      validateInput({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };


    /** Basic Regex for Validate Inputs */
    const noEmpty = /\S+/;
    const validateText = /^(?=.*?[A-Za-z])[A-Za-z+\s]+$/;
    const validateUrl = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
    const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  
    const validateInput = (input) => {
      let errors = {};
      if (
        !noEmpty.test(input.name) ||
        !validateText.test(input.name) ||
        input.name.length < 4
      ) {
        errors.name = "Solo se permiten letras.";
      }
      if (
        !noEmpty.test(input.email) ||
        !validateEmail.test(input.email)
      ) {
        errors.email = "Formato de email incorrecto";
      }
      if (
        !noEmpty.test(input.phoneNumber)
      ) {
        errors.phoneNumber = "Formato de teléfono incorrecto";
      }
      if (
        !noEmpty.test(input.image) || !validateUrl.test(input.image)
      ) {
        errors.image = "Url de imagen icorrecta";
      }
      return errors;
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !inputErrors.name &&
      !inputErrors.email &&
      !inputErrors.phoneNumber &&
      !inputErrors.image
    ) {
      dispatch(postPatient(input));
      setInput(initialInputs);
      onClick();
    } else {
      console.log("error");
    }
  };

  
  return (
    <form className={styles.Form} onSubmit={(e) => {handleSubmit(e);}}>
          <img src={iconClose} alt="alt-close-icon" className={styles.ButtonClose} onClick={onClick}/>
          <h2 className={styles.TitleModal}>Crear un Paciente</h2>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.name ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.name}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Nombre:</label>
            <input
              className={styles.Input}
              type="text"
              name="name"
              placeholder="Escribe tu nombre..."
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.email ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.email}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Email:</label>
            <input
              className={styles.Input}
              type="text"
              name="email"
              placeholder="Escribe tu email..."
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.password ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.password}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Password:</label>
            <input
              className={styles.Input}
              type="password"
              name="password"
              placeholder="Escribe tu password..."
              value={input.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.phoneNumber ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.phoneNumber}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Teléfono:</label>
            <input
              className={styles.Input}
              type="text"
              name="phoneNumber"
              placeholder="Escribe tu teléfono..."
              value={input.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.InputContainer}>
            <span
              className={inputErrors.image ? styles.Errors : styles.NoErrors}
            >
              {inputErrors.image}
            </span>
            <label><img src={iconInput} alt="icon-label-input" />Foto:</label>
            <input
              className={styles.Input}
              type="text"
              name="image"
              placeholder="Url de tu foto..."
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
          </div>

      <button className={styles.ButtonSubmit} type="submit">
        Crear Paciente
      </button>

    </form>
  );
};


export default CreatePatient;