// yup 활용 위한 schema(yup 유효성 검사)
import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().email().required("이메일은 필수 입력 사항입니다."),
  password: yup.string().min(10).required("비밀번호는 필수 입력 사항입니다."),
  passwordConfirm: yup.string().required("비밀번호는 필수 입력 사항입니다."),
  phone: yup.string().required("전화번호는 필수 입력 사항입니다."),
  age: yup
    .date()
    .default(() => new Date())
    .required("나이를 입력해주세요."),
});
