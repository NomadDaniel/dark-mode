import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { useForm } from "../hooks/useForm";

import Button from "../theme/Button";

const useStyles = makeStyles( theme => ( {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing( 1 ),
    marginRight: theme.spacing( 1 )
  },
  dense: {
    marginTop: theme.spacing( 2 )
  },
  menu: {
    width: 200
  }
} ) );

export default function SignupForm () {
  const classes = useStyles();

  const [ signupValues, handleChanges, clearForm ] = useForm( "signupform", {
    username: "",
    email: ""
  } );

  const handleSubmit = e => {
    e.preventDefault();
    // handleValidation()
    alert( `${ signupValues.username }, ${ signupValues.email }` );
    localStorage.setItem( "savedSignupformValues", JSON.stringify( signupValues ) );
    clearForm();
  };

  return (
    <div p={ 2 } className="form">
      <form onSubmit={ handleSubmit }>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="Username"
            className={ classes.textField }
            value={ signupValues.username }
            onChange={ handleChanges }
            margin="normal"
            variant="outlined"
            name="username"
          // onBlur={handleBlur}
          />
          <TextField
            id="outlined-email"
            label="Email"
            className={ classes.textField }
            value={ signupValues.email }
            onChange={ handleChanges }
            margin="normal"
            variant="outlined"
            name="email"
          />
          <div className="flexer">
            <Button color="red" onClick={ clearForm }>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}