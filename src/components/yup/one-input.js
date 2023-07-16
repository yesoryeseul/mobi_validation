import { FormHelperText, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const OneInput = ({ control, name, label, value, errors, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div style={{ marginBottom: "20px" }}>
          <TextField
            style={{ width: "400px" }}
            label={label}
            variant="standard"
            value={value}
            onChange={onChange}
            error={errors[name]} // mui ui error 밑줄 빨갛게
          />
          {errors[name] && (
            <FormHelperText style={{ textAlign: "center" }} error>
              {errors[name].message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
};

export default OneInput;
