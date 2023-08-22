import { styled } from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';
export const StyledForm = styled(Form)`
  background-color: #ff0066;
  border: solid 2px black;
  padding: 5px;
  border-radius: 5px;
  color: white;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  margin: 15px auto;
  background-color: #3366ff;
  border: solid 2px black;
  width: auto;
  height: 15px;
  display: flex;
  flex-direction: column;
`;

export const StyledError = styled(ErrorMessage)`
  color: white;
`;
