"use client";

import { Loader } from "@/components/loader";
import { AuthContextProvider } from "@/context/useAuthContext";
import { useSignInForm } from "@/hooks/sign-in/useSignIn";
import React from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

const SignInFormProvider = ({ children }: Props) => {
  const { methods, loading, onHandleSubmit } = useSignInForm();

  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form className="w-full" onSubmit={onHandleSubmit}>
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignInFormProvider;
