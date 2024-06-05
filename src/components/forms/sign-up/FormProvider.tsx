"use client";
import { Loader } from "@/components/loader";
import { AuthContextProvider } from "@/context/useAuthContext";
import { useSignUpForm } from "@/hooks/sign-up/useSignUp";
import { ReactNode } from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  children: ReactNode;
};

const SignUpFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignUpForm();
  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="w-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignUpFormProvider;
