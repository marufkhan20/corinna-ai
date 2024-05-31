import { AuthContextProvider } from "@/context/use-auth-context";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SignUpFormProvider = ({ children }: Props) => {
  return <AuthContextProvider></AuthContextProvider>;
};

export default SignUpFormProvider;
