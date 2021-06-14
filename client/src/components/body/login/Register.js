import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notifications/Notifications";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
  isMatchOptionalProf,
  isMatchOptionalSecret,
} from "../../utils/validation/Validation";

import TextField from "@material-ui/core/TextField";

const initialState = {
  name: "",
  email: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
  ps_password: "",
};

function Register() {
  const [user, setUser] = useState(initialState);
  const pswdProfesor = "prof";
  const pswdSecretar = "secret";

  const {
    name,
    email,
    password,
    cf_password,
    ps_password,
    role,
    err,
    success,
  } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(name) || isEmpty(password) || isEmpty(role))
      return setUser({ ...user, err: "Completati campurile", success: "" });

    if (!isEmail(email))
      return setUser({ ...user, err: "Email invalid", success: "" });

    if (isLength(password))
      return setUser({
        ...user,
        err: "Parola trebuie sa fie minim 6 caractere",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setUser({ ...user, err: "Parola nu coincide", success: "" });

    if (role === "2") {
      if (!isMatchOptionalProf(ps_password, pswdProfesor)) {
        return setUser({
          ...user,
          err: "Parola optionala nu coincide",
          success: "",
        });
      }
    }
    if (role === "3") {
      if (!isMatchOptionalSecret(ps_password, pswdSecretar)) {
        return setUser({
          ...user,
          err: "Parola optionala nu coincide",
          success: "",
        });
      }
    }
    try {
      const res = await axios.post("/user/register", {
        name,
        email,
        password,
        role,
      });

      setUser({ ...user, err: "", success: res.data.msg });
    } catch (err) {
      console.log("hello");

      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="login__page">
      <h2>Înregistrare</h2>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}

      <form onSubmit={handleSubmit}>
        <div className="form__item" style={{ marginTop: 20 }}>
          <TextField
            required
            id="name"
            label="Nume utilizator"
            size="medium"
            name="name"
            placeholder="Introduceti Numele complet"
            value={name}
            variant="outlined"
            onChange={handleChangeInput}
            style={{ width: 450 }}
          />
        </div>

        <div className="form__item">
          <TextField
            required
            id="email"
            label="Email utilizator"
            size="medium"
            name="email"
            placeholder="Introduceti Email"
            value={email}
            variant="outlined"
            onChange={handleChangeInput}
            style={{ width: 450 }}
          />
        </div>

        <div className="form__item">
          <TextField
            required
            id="password"
            type="password"
            label="Parola utilizator"
            size="medium"
            name="password"
            placeholder="Introduceti Parola"
            value={password}
            variant="outlined"
            onChange={handleChangeInput}
            style={{ width: 450 }}
          />
        </div>

        <div className="form__item">
          <TextField
            required
            id="cf_password"
            type="password"
            label="Confirmare Parola"
            size="medium"
            name="cf_password"
            placeholder="Reintroduceti Parola"
            value={cf_password}
            variant="outlined"
            onChange={handleChangeInput}
            style={{ width: 450 }}
          />
        </div>

        <div className="form__item">
          <TextField
            id="ps_password"
            type="password"
            label="Optional"
            size="medium"
            name="ps_password"
            placeholder="Parola Profesor / Secretar"
            value={ps_password}
            variant="outlined"
            onChange={handleChangeInput}
            style={{ width: 450 }}
          />
        </div>

        <div className="role__row">
          <div className="row__items">
            <input
              type="radio"
              id="role0"
              value="0"
              name="role"
              onChange={handleChangeInput}
            />
            <label htmlFor="role0">Elev</label>
          </div>
          <div className="row__items">
            <input
              type="radio"
              id="role2"
              value="2"
              name="role"
              onChange={handleChangeInput}
            />
            <label htmlFor="role2">Profesor</label>
          </div>
          <div className="row__items">
            <input
              type="radio"
              id="role3"
              value="3"
              name="role"
              onChange={handleChangeInput}
            />
            <label htmlFor="role3">Secretar</label>
          </div>
        </div>

        <div className="row">
          <button type="submit">Înregistrare</button>
        </div>
      </form>

      <p>
        Deja sunteți înregistrat? <Link to="/login"> Login</Link>
      </p>
    </div>
  );
}

export default Register;
