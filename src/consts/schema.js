// yup 활용 위한 schema(yup 유효성 검사)
import * as yup from "yup";
import { REGEX } from "./regex";

export const schema = yup.object({
  email: yup
    .string()
    .matches(REGEX.email, "이메일 형식에 맞지 않습니다")
    .required("이메일은 필수 입력 사항입니다"),
  password: yup
    .string()
    .min(8, "8자 이상 입력해주세요")
    .max(16, "16자 이하 입력해주세요")
    .matches(
      REGEX.password,
      "특수문자, 문자, 숫자를 포함한 형태의 암호를 입력해 주세요"
    )
    .required("비밀번호는 필수 입력 사항입니다"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호와 일치하지 않습니다")
    .required("비밀번호는 필수 입력 사항입니다"),
  phone: yup
    .string()
    .matches(REGEX.phone, "전화번호 형식에 맞지 않습니다")
    .required("전화번호는 필수 입력 사항입니다"),
  age: yup
    .string()
    .matches(REGEX.age, "1 ~ 99 사이의 수를 입력해주세요")
    .required("나이를 입력해주세요"),
});
