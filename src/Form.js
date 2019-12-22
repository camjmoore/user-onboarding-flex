import React from 'react';
import { withFormik, Form, Field } from 'formik'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const FormDiv = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-content: center;
  background: papayaWhip;
  border-radius: 15px;
  margin: 5% auto;
  width: 350px;
  height: 350px;
`
const StyledForm = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const StyledLabel = styled.label`
  margin-left: 0;
  margin-right: 0;
  margin-top: 2%;
  margin-bottom: 2%;

`
const SubmitButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;
  width: 15vh;
  margin-left: 0;
  margin-right: 0;
  margin-top: 2%;
  margin-bottom: 2%;
`
const UserForm = (props) => {
  
  //<Field/> replaces <input/> and includes onchange as a prop

  //<Field></Field> for checkboxes

  //basic form review- htmlFor --> id="" connection

  return(
    <FormDiv>
      <Form>
        <StyledForm>
          <StyledLabel htmlFor = "name">
            Name:
            <Field
              id = "name"
              type = "text"
              name = "name"
            />
          </StyledLabel>

          <StyledLabel htmlFor = "email">
            Email:
            <Field
              id = "email"
              type = "text"
              name = "email"
            />
          </StyledLabel>

          <StyledLabel htmlFor = "password">
            Password:
            <Field
              id = "password"
              type = "text"
              name = "password"
            />          
          </StyledLabel>

          <StyledLabel className="checkbox-container" htmlFor="terms">
            Terms of Service:
            <Field id="terms" type="checkbox" name="terms" check={props.values.terms}></Field>
            <span className="checkmark" />

          </StyledLabel>
          
          {/* A Submit button to send data to the server. */}
          <SubmitButton type = "submit">Submit</SubmitButton>
        </StyledForm>

      </Form>
    </FormDiv>
  )

}

const FormikForm = withFormik({
  mapPropsToValues(props) {
    return  {
      name: props.name || "",
      email: props.email || "",
      password: props.password || "",
      terms: false
    };
  }
})(UserForm);

export default FormikForm;