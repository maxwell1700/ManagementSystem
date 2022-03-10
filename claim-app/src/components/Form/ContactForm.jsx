import {
    Controller,
    useFormContext,
  } from "react-hook-form"

  import {
    
    TextField
    
  } from "@material-ui/core";

const ContactForm = () => {
    const { control } = useFormContext();
    return (
      <>
        <h1> What are your contacxt details</h1>
        <Controller
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
  
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };

  export default ContactForm;