import ButtonHandler from "@/components/forms/sign-up/ButtonHandlers";
import SignUpFormProvider from "@/components/forms/sign-up/FormProvider";
import HighLightBar from "@/components/forms/sign-up/HightLightBar";
import RegistrationFormStep from "@/components/forms/sign-up/RegistrationStep";

const SignupPage = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
            <ButtonHandler />
          </div>
          <HighLightBar />
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignupPage;
