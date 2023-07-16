import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import OneInput from "./one-input";
import { schema } from "consts/schema";

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
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>회원가입</h2>
      <OneInput control={control} name="email" label="Email" errors={errors} />
      <OneInput
        control={control}
        name="password"
        label="Password"
        // value={value}
        errors={errors}
      />
      <OneInput
        control={control}
        name="passwordConfirm"
        label="Password Confirm"
        // value={value}
        errors={errors}
      />
      <OneInput
        control={control}
        name="age"
        label="Age"
        // value={value}
        errors={errors}
      />
      <input type="submit" />
    </form>
  );
};

export default SignUpForm;
