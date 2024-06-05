"use client";
import { Spinner } from "@/components/spinner";
import { useAuthContextHook } from "@/context/useAuthContext";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import OTPForm from "./OtpForm";
import TypeSelectionForm from "./TypeSelectionForm";

const DetailForm = dynamic(() => import("./AccountDetailsForm"), {
  ssr: false,
  loading: Spinner,
});

type Props = {};

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { currentStep } = useAuthContextHook();
  const [onOTP, setOnOTP] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");
  setValue("otp", onOTP);

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
      return <DetailForm errors={errors} register={register} />;
    case 3:
      return <OTPForm onOTP={onOTP} setOTP={setOnOTP} />;
  }

  return <div>RegistrationFormStep</div>;
};

export default RegistrationFormStep;
