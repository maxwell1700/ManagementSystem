import {
    Controller,
    useFormContext,
  } from "react-hook-form"

  import {
    
    TextField
    
  } from "@material-ui/core";
const BasicForm = () => {
    const { control } = useFormContext();
    return (
      <>

      <h1> What is your name</h1>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
  
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
  
      </>
    );
  };

  export default BasicForm;