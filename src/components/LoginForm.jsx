import React from "react";
import "../styles/LoginForm.css";

import { request } from "graphql-request";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/v1";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [emailInputFocus, setEmailInputFocus] = React.useState(false);
  const [passswordInputFocus, setPassswordInputFocus] = React.useState(false);

  const onEmailValueChange = (event) => {
    setEmailValue(event.target.value);
  };

  const onPasswordValueChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleEmailOnFocus = () => {
    setEmailInputFocus(!emailInputFocus);
  };

  const handlePasswordOnFocus = () => {
    setPassswordInputFocus(!passswordInputFocus);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userValidation = await validateUser(
      event.target.email.value,
      event.target.password.value
    );

    let userId;

    if (userValidation.userExists) {
      if (userValidation.userId !== "") {
        userId = userValidation.userId;
        navigate(`/signup_login/?user_id=${userId}`);
        props.setLogin(true);
      } else {
        alert(
          `La contraseña para el usuario ${event.target.email.value} es incorrecta`
        );
      }
    } else {
      userId = await createUser(
        event.target.email.value,
        event.target.password.value
      );
      navigate(`/signup_login/?user_id=${userId}`);
      props.setLogin(true);
    }
  };

  const validateUser = async (email, password) => {
    const query = `
    query UserValidation($email: String!, $password: String!) {
      validateUser(email: $email, password: $password) {
        userExists
        userId
      }
    }
    `;

    const result = await request(endpoint, query, {
      email: email,
      password: password,
    });

    return result.validateUser;
  };

  const createUser = async (email, password) => {
    const query = `
    mutation UserRegister($input: UserInput!){
      createUser(input: $input) {
        _id
      }
    }`;

    const result = await request(endpoint, query, {
      input: {
        email: email,
        userName: email,
        password: password,
      },
    });

    return result.createUser._id;
  };

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <p className="LoginForm__title">Inicia sesión o regístrate</p>
      <div className="divider"></div>
      <h2 className="LoginForm__welcome-text">
        ¡Te damos la bienvenida a Airbnb!
      </h2>
      <div className="LoginForm__fields">
        <div
          className={`LoginForm__fields__email ${
            emailInputFocus && "LoginForm__fields__email--focused"
          }`}
        >
          <label htmlFor="email-field">CORREO ELECTRÓNICO</label>
          <input
            type="text"
            id="email-field"
            name="email"
            placeholder="john@mail.com"
            value={emailValue}
            onChange={onEmailValueChange}
            onFocus={handleEmailOnFocus}
            onBlur={handleEmailOnFocus}
          />
        </div>
        <div
          className={`LoginForm__fields__password ${
            passswordInputFocus && "LoginForm__fields__password--focused"
          }`}
        >
          <label htmlFor="password-field">CONTRASEÑA</label>
          <input
            type="password"
            id="password-field"
            name="password"
            placeholder="1xVZpew4F"
            value={passwordValue}
            onChange={onPasswordValueChange}
            onFocus={handlePasswordOnFocus}
            onBlur={handlePasswordOnFocus}
          />
        </div>
      </div>
      <p className="LoginForm__info">
        Debes verificar tu dirección de correo electrónico mediante un email.
        Por favor revisa tu bandeja y sigue las instrucciones. Política de
        privacidad.
      </p>
      <button type="submit" className="LoginForm__continue-button">
        Continuar
      </button>
    </form>
  );
};

export default LoginForm;
