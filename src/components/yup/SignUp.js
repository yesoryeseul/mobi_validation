import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import OneInput from "./one-input";
import { schema } from "consts/schema";
import { Button } from "@mui/material";

const SignUpForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  /*
    1. yupResolver: yup 라이브러리의 스키마 유효성 검사를 react-hook-form과 통합
   */

  const onSubmit = (data) => {
    console.log("onSubmit", data);
    alert(`${data.email.substring(0, data.email.indexOf("@"))} 님 환영합니다`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>회원가입</h2>
      <OneInput control={control} name="email" label="Email" errors={errors} />
      <OneInput
        control={control}
        name="password"
        label="Password"
        errors={errors}
      />
      <OneInput
        control={control}
        name="passwordConfirm"
        label="Password Confirm"
        errors={errors}
      />
      <OneInput control={control} name="phone" label="phone" errors={errors} />
      <OneInput control={control} name="age" label="Age" errors={errors} />
      <Button variant="outlined" type="submit">
        회원가입
      </Button>
    </form>
  );
};

export default SignUpForm;
