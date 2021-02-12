import { makeStyles } from "@material-ui/core/styles";
import React from "react"; // we need this to make JSX compile
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Controller, useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const useStyles = makeStyles({
  paper: {
    width: 500,
    height: 300,
    padding: 20,
    alignContent: ''
  },
});

type Inputs = {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
};

const ProfileDialog: React.FC<{
  onSave: () => void;
}> = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit = (data: Inputs) => console.log(data);

  console.log(errors); // watch input value by passing the name of it
  return (
    <Paper className={classes.paper} elevation={10}>
      <h2>Профиль</h2>
      <p>Введите платежные данные</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={TextField}
          control={control}
          defaultValue="Loft"
          rules={{ required: true }}
          name="name"
          label="Имя владельца"
          error={!!errors.name}
          helperText={errors.name && "Invalid name"}
        />
        <TextField
          name="cardNumber"
          label="Номер карты"
          defaultValue="1234 1234 1234 1234"
          inputRef={register({ required: true })}
        />
        <TextField
          name="expiryDate"
          label="MM/YY"
          defaultValue="05/08"
          inputRef={register({ required: true })}
        />
        <TextField
          name="cvc"
          label="CVC"
          defaultValue="667"
          inputRef={register({ required: true })}
        />

        <StyledButton myDisabled variant="contained" type="submit" color='primary'>
          Сохранить
        </StyledButton>
      </form>
    </Paper>
  );
};

const StyledButton = styled(Button)<{myDisabled: boolean}>`
  border-radius: 20px;

  background: ${props => props.myDisabled && "grey"}
`;

export default ProfileDialog;
