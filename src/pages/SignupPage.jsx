import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignupLayout from "../components/signup/SignupLayout.jsx";
import SignupInput from "../components/signup/SignupInput.jsx";
import SignupButtons from "../components/signup/SignupButtons.jsx";
import PronounsModal from "../components/signup/PronounsModel.jsx";

import { useSignupStore } from "../store/SignupStore.js"

import {
  validateEmail,
  validateOtp,
  validateUsername,
  validateName,
  validateAge,
  validatePronouns,
} from "../utils/SignupValidation.js"

function SignupPage() {

  const {
    currentStep,

    email,
    newsletter,
    otp,
    username,
    name,
    age,
    pronouns,
    referralCode,

    isLoading,
    error,

    setEmail,
    setNewsletter,
    setOtp,
    setUsername,
    setName,
    setAge,
    setPronouns,
    setReferralCode,

    nextStep,
    previousStep,
    setLoading,
    setError,
  } = useSignupStore();

  const navigate = useNavigate();


  const [showPronouns, setShowPronouns] =
    useState(false);


  // =====================================================
  // STEP VALIDATION
  // =====================================================

  const validateCurrentStep = () => {

    let validationError = "";


    if (currentStep === 1) {
      validationError = validateEmail(email);
    }


    if (currentStep === 2) {
      validationError = validateOtp(otp);
    }


    if (currentStep === 3) {
      validationError = validateUsername(username);
    }


    if (currentStep === 4) {
      validationError = validateName(name);
    }


    if (currentStep === 5) {
      validationError = validateAge(age);
    }


    if (currentStep === 6) {
      validationError = validatePronouns(pronouns);
    }


    if (validationError) {
      setError(validationError);
      return false;
    }


    setError("");
    return true;
  };


  // =====================================================
  // NEXT
  // =====================================================

  const handleNext = () => {

    if (!validateCurrentStep()) {
      return;
    }


    setLoading(true);


    // Simulate frontend API request

    setTimeout(() => {

      setLoading(false);

      nextStep();

    }, 800);
  };


  // =====================================================
  // FINAL SIGN UP
  // =====================================================

  const handleSignup = () => {

    if (!validateCurrentStep()) {
      return;
    }


    setLoading(true);


    setTimeout(() => {

      setLoading(false);

      // We'll replace this with success page
      // after creating it.

      nextStep();

    }, 1200);
  };


  // =====================================================
  // COMMON ERROR
  // =====================================================

  const ErrorMessage = () => {

    if (!error) {
      return null;
    }

    return (
      <p className="mt-3 text-sm text-red-400">
        {error}
      </p>
    );
  };


  // =====================================================
  // STEP 1 — EMAIL
  // =====================================================

  if (currentStep === 1) {

    return (
      <SignupLayout>

        <div className="max-w-2xl">

          <h1 className="mb-8 text-2xl font-bold sm:text-3xl">
            Enter your email
          </h1>


          <SignupInput
            label=""
            placeholder="EMAIL"
            value={email}
            onChange={setEmail}
            type="email"
            error={error}
          />


          <button
            type="button"
            onClick={() =>
              setNewsletter(!newsletter)
            }
            className="
              mt-4
              flex
              items-center
              gap-3
              text-left
              text-base
            "
          >

            <span
              className={`
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                border

                ${
                  newsletter
                    ? "border-white bg-white"
                    : "border-white/30"
                }
              `}
            >
              {newsletter && (
                <span className="text-black">
                  ✓
                </span>
              )}
            </span>

            <span>
              I'd like to subscribe to your newsletter
            </span>

          </button>


          <SignupButtons
            primaryText="PROCEED"
            secondaryText="BACK"
            onPrimary={handleNext}
            onSecondary={() => navigate("/terms")}
            loading={isLoading}
          />

        </div>

      </SignupLayout>
    );
  }


  // =====================================================
  // STEP 2 — OTP
  // =====================================================

  if (currentStep === 2) {

    return (
      <SignupLayout>

        <div className="max-w-2xl">

          <p className="mb-8 text-sm text-white/80">
            ENTER OTP
          </p>


          <div className="flex gap-2 sm:gap-4">

            {Array.from({ length: 6 }).map(
              (_, index) => (
                <input
                  key={index}
                  value={otp[index] || ""}
                  maxLength={1}
                  inputMode="numeric"
                  onChange={(event) => {

                    const value =
                      event.target.value.replace(
                        /\D/g,
                        ""
                      );

                    const otpArray =
                      otp.split("");

                    otpArray[index] = value;

                    setOtp(
                      otpArray
                        .join("")
                        .slice(0, 6)
                    );
                  }}
                  className="
                    h-12
                    min-w-0
                    flex-1
                    border-b
                    border-white/30
                    bg-transparent
                    text-center
                    text-xl
                    text-white
                    outline-none
                    focus:border-white
                  "
                />
              )
            )}

          </div>


          <div className="mt-5 text-right">

            <button
              type="button"
              className="text-sm text-white/40"
            >
              Resend OTP
            </button>

          </div>


          <ErrorMessage />


          <SignupButtons
            primaryText="VERIFY"
            secondaryText="GO BACK"
            onPrimary={handleNext}
            onSecondary={previousStep}
            loading={isLoading}
          />


          <p className="mt-4 text-xs text-white/30">
            ⓘ A 6-digit OTP has been sent to {email}.
          </p>

        </div>

      </SignupLayout>
    );
  }


  // =====================================================
  // STEP 3 — USERNAME
  // =====================================================

  if (currentStep === 3) {

    return (
      <SignupLayout showGettingReady>

        <div className="max-w-2xl">

          <h1 className="mb-8 text-2xl font-bold leading-tight sm:text-3xl">
            Create a username that fits your vibe!
          </h1>


          <SignupInput
            label="USERNAME"
            placeholder=""
            value={username}
            onChange={setUsername}
            maxLength={30}
            error={error}
          />


          <p className="mt-5 text-sm leading-6 text-white/70">
            All your Superlatives and Invites will come
            your way with this name, so make it
            unforgettable!
          </p>


          <SignupButtons
            onPrimary={handleNext}
            onSecondary={previousStep}
            loading={isLoading}
          />

        </div>

      </SignupLayout>
    );
  }


  // =====================================================
  // STEP 4 — NAME
  // =====================================================

  if (currentStep === 4) {

    return (
      <SignupLayout showGettingReady>

        <div className="max-w-2xl">

          <h1 className="mb-8 text-2xl font-bold leading-tight sm:text-3xl">
            "Name, please, for the party check!"
          </h1>


          <SignupInput
            label="NAME"
            value={name}
            onChange={setName}
            maxLength={50}
            error={error}
          />


          <p className="mt-5 text-sm leading-6 text-white/70">
            This is the name shown as on members and
            requests. Cannot be changed later.
          </p>


          <SignupButtons
            onPrimary={handleNext}
            onSecondary={previousStep}
            loading={isLoading}
          />

        </div>

      </SignupLayout>
    );
  }


  // =====================================================
  // STEP 5 — AGE
  // =====================================================

  if (currentStep === 5) {

    return (
      <SignupLayout showGettingReady>

        <div className="max-w-2xl">

          <h1 className="mb-8 text-2xl font-bold leading-tight sm:text-3xl">
            How many years have you been partying?
          </h1>


          <SignupInput
            label="AGE"
            value={age}
            onChange={(value) =>
              setAge(
                value.replace(/\D/g, "")
              )
            }
            inputMode="numeric"
            maxLength={3}
            error={error}
          />


          <p className="mt-5 text-sm leading-6 text-white/70">
            We need your age to verify your eligibility
            and help others know who they're connecting
            with.
          </p>


          <SignupButtons
            onPrimary={handleNext}
            onSecondary={previousStep}
            loading={isLoading}
          />

        </div>

      </SignupLayout>
    );
  }


  // =====================================================
  // STEP 6 — PRONOUNS
  // =====================================================

  if (currentStep === 6) {

    return (
      <SignupLayout showGettingReady>

        <div className="max-w-2xl">

          <h1 className="mb-8 text-2xl font-bold leading-tight sm:text-3xl">
            Which pronouns feel right for you?
          </h1>


          <SignupInput
            label="PRONOUNS"
            value={pronouns.join(", ")}
            readOnly
            onClick={() => setShowPronouns(true)}
            error={error}
          />


          <p className="mt-5 text-sm leading-6 text-white/70">
            Select the pronouns that feel right for you.
          </p>


          <SignupButtons
            onPrimary={handleNext}
            onSecondary={previousStep}
            loading={isLoading}
          />

        </div>


        {showPronouns && (
          <PronounsModal
            selected={pronouns}
            onClose={() =>
              setShowPronouns(false)
            }
            onSave={setPronouns}
          />
        )}

      </SignupLayout>
    );
  }


  // =====================================================
  // STEP 7 — REFERRAL
  // =====================================================

  if (currentStep === 7) {

    return (
      <SignupLayout showGettingReady>

        <div className="max-w-2xl">

          <div
            className="
              text-xl
              font-extrabold
              uppercase
              leading-[1.45]
              sm:text-2xl
            "
          >

            <p>
              KINDNESS = GOOD{" "}
              <span className="text-[#b13cff]">
                HAIR DAY
              </span>
            </p>

            <p>
              SIP IN?{" "}
              <span className="text-[#b13cff]">
                CHIP IN.
              </span>
            </p>

            <p>
              GHOSTING IS FOR{" "}
              <span className="text-[#b13cff]">
                HALLOWEEN.
              </span>
            </p>

            <p>
              OUTFITS LOUD,{" "}
              <span className="text-[#b13cff]">
                INTENTIONS
              </span>{" "}
              CLEAR.
            </p>

            <p>
              JOINING? FREE. HOSTING?{" "}
              <span className="text-[#b13cff]">
                ALSO
              </span>{" "}
              FREE.
            </p>

            <p>
              EARLY IS{" "}
              <span className="text-[#b13cff]">
                ICONIC.
              </span>
            </p>

            <p>
              YES.{" "}
              <span className="text-[#b13cff]">
                SPELLING
              </span>{" "}
              MISTAKE.
            </p>

          </div>


          <div className="mt-8">

            <SignupInput
              label="ENTER INVITE CODE (optional)"
              value={referralCode}
              onChange={setReferralCode}
              maxLength={30}
            />

            <p className="mt-2 text-xs text-white/40">
              Enter invite code and get up to +30 HVTs!
            </p>

          </div>


          <SignupButtons
            primaryText="SIGN UP"
            secondaryText="BACK"
            onPrimary={handleSignup}
            onSecondary={previousStep}
            loading={isLoading}
          />

        </div>

      </SignupLayout>
    );
  }


  return null;
}

export default SignupPage;