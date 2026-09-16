import { useNavigate } from "react-router-dom";
import { useSignupStore } from "../../store/SignupStore.js";

function SignupLayout({ children, showGettingReady = false }) {
  const navigate = useNavigate();

  const {
    currentStep,
    previousStep,
    isLoading,
  } = useSignupStore();

  const handleBack = () => {
    if (currentStep === 1) {
      navigate("/terms");
      return;
    }

    previousStep();
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <div
        className="
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-5xl
          flex-col
          px-6
          py-8

          sm:px-10
          sm:py-10

          lg:px-14
        "
      >

        {/* ================= HEADER ================= */}

        <header className="flex shrink-0 items-start justify-between">

          {/* Logo */}

          <div
            className="
              font-serif
              text-5xl
              font-bold
              leading-none
              tracking-[-0.08em]
            "
          >
            E
            <span className="relative -top-5 ml-1 text-2xl">
              •
            </span>
          </div>


          {/* Getting Ready */}

          {showGettingReady && (
            <div
              className="
                pt-2
                text-sm
                font-bold
                uppercase
                sm:text-base
              "
            >
              GETTING READY
            </div>
          )}

        </header>


        {/* ================= CONTENT ================= */}
        <div
          className="
            flex
            flex-1
            items-start
            justify-center
            pt-16

            sm:pt-20

            lg:items-center
            lg:pt-0
          "
        >

          <div className="w-full max-w-2xl">
            {children}
          </div>
        </div>


        {/* ================= BUTTONS ================= */}

        <div
          className="
            mt-auto
            flex
            shrink-0
            flex-col
            gap-4
            pt-10
            pb-2
          "
        >

          {/* NEXT / PROCEED button is handled by each screen */}

        </div>

      </div>

    </main>
  );
}

export default SignupLayout;