import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TermsPage() {
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/signup");
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================================================= */}
      {/* MAIN TERMS INTRO SCREEN */}
      {/* ================================================= */}

      {/* ================================================= */}
{/* MAIN TERMS INTRO SCREEN */}
{/* ================================================= */}

<div className="relative mx-auto flex h-screen w-full max-w-5xl flex-col overflow-hidden px-6 sm:px-10 lg:px-14">

  {/* ================= LOGO ================= */}

  <header className="shrink-0 pt-8 sm:pt-10 lg:pt-12">
    <div
      className="
        font-serif
        text-5xl
        font-bold
        leading-none
        tracking-[-0.08em]
        text-white
        sm:text-6xl
      "
    >
      E
      <span className="relative -top-8 -sm:top-20 ml-1 text-2xl">
        •
      </span>
    </div>
  </header>


  {/* ================= INTRO TEXT ================= */}

  <section
     className="
      flex
      min-h-0
      flex-1
      items-center
      overflow-hidden
      pt-10
      pb-6

      sm:pt-12
      sm:pb-8

      lg:pt-16
    "
  >
    <p
      className="
        text-[17px]
        font-extrabold
        uppercase
        leading-[1.42]
        tracking-[-0.01em]

        sm:text-xl
        sm:leading-[1.45]

        md:text-2xl

        lg:text-3xl
        xl:text-[34px]
      "
    >
      BY USING THIS APP, YOU'RE AGREEING TO KEEP THINGS FUN,
      SAFE, AND RESPECTFUL... AND ALSO AGREEING TO OUR TERMS
      AND CONDITIONS. POLITENESS IS A MUST—TREAT OTHERS HOW
      YOU'D WANT TO BE TREATED. EVERYONE HERE IS LOOKING FOR
      REASONS TO{" "}

      <span className="text-[#b13cff]">
        PARTY
      </span>

      , SO BRING YOUR BEST VIBE AND EXPECT THE SAME FROM
      OTHERS. LET'S PARTY RESPONSIBLY AND MAKE EVERY
      EXPERIENCE A GREAT ONE!
    </p>
  </section>


  {/* ================================================= */}
  {/* BOTTOM ACTION */}
  {/* ================================================= */}

  <div
    className="
      mt-auto
      flex
      shrink-0
      w-full
      flex-col
      items-center
      pb-7
      pt-8

      sm:pb-9
      sm:pt-10
    "
  >

    {/* Terms Link */}

    <p
      className="
        mb-4
        text-center
        text-xs
        text-white/60

        sm:mb-5
        sm:text-sm

        md:text-base
      "
    >
      To proceed, accept{" "}

      <button
        type="button"
        onClick={() => setShowTerms(true)}
        className="
          font-medium
          text-white
          underline
          underline-offset-4
          transition-colors
          hover:text-[#b13cff]
        "
      >
        Terms and Conditions
      </button>
    </p>


    {/* Accept Button */}

    <button
      type="button"
      onClick={handleAccept}
      className="
        w-full
        max-w-[400px]
        rounded-xl
        bg-white
        px-8
        py-3.5
        text-sm
        font-medium
        tracking-wide
        text-black
        transition-all
        duration-200
        hover:scale-[1.01]
        hover:bg-gray-100
        active:scale-[0.98]

        sm:py-4
        sm:text-base
      "
    >
      ACCEPT
    </button>

  </div>

</div>


      {/* ================================================= */}
      {/* TERMS & CONDITIONS MODAL */}
      {/* ================================================= */}

      {showTerms && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            px-0
            backdrop-blur-sm
            sm:px-6
          "
        >

          {/* ================= DIALOG ================= */}

          <div
            className="
              relative
              flex
              h-screen
              w-full
              flex-col
              bg-[#050505]

              sm:h-[94vh]
              sm:max-w-[720px]
              sm:rounded-2xl
              sm:border
              sm:border-white/10
              sm:shadow-2xl
            "
          >

            {/* ================= MODAL HEADER ================= */}

            <div
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-5
                sm:px-8
              "
            >

              <h2 className="text-lg font-semibold sm:text-xl">
                Terms and Conditions
              </h2>

              <button
                type="button"
                onClick={() => setShowTerms(false)}
                aria-label="Close terms"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-xl
                  text-white
                  transition
                  hover:bg-white/20
                "
              >
                ×
              </button>

            </div>


            {/* ================= MODAL CONTENT ================= */}

            <div
              className="
                flex-1
                overflow-y-auto
                px-6
                py-7

                sm:px-8
                sm:py-8
              "
            >

              {/* Introduction */}

              <div className="mb-10">

                <h3 className="mb-3 text-xl font-bold">
                  Welcome to Extroverts!
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  Please take a moment to read these to ensure a safe
                  and enjoyable experience for everyone:
                </p>

              </div>


              {/* Respect and Kindness */}

              <div className="mb-8">

                <h3 className="mb-2 font-bold text-white">
                  Respect and Kindness:
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  Treat everyone with respect and courtesy. Personal
                  boundaries must be respected at all times.
                </p>

              </div>


              {/* Personal Contributions */}

              <div className="mb-8">

                <h3 className="mb-2 font-bold text-white">
                  Personal Contributions:
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  Each attendee is responsible for their own expenses
                  (food, drinks, etc.).
                </p>

              </div>


              {/* App Responsibility */}

              <div className="mb-8">

                <h3 className="mb-2 font-bold text-white">
                  App's Responsibility:
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  The app connects people, we do not interfere between
                  personal interactions or relations during the event.
                </p>

              </div>


              {/* Harassment */}

              <div className="mb-8">

                <h3 className="mb-2 font-bold text-white">
                  Zero Tolerance for Harassment:
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  Any form of harassment (verbal, physical, or sexual)
                  is not tolerated. Respectful behavior is essential.
                </p>

              </div>


              {/* Sexual Conduct */}

              <div className="mb-8">

                <h3 className="mb-2 font-bold text-white">
                  Sexual Conduct:
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  All interactions must be consensual and respectful
                  of personal boundaries.
                </p>

              </div>


              {/* Safety */}

              <div className="mb-8">

                <h3 className="mb-2 font-bold text-white">
                  Safety First:
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  Prioritize your safety and well-being. If you feel
                  unsafe, leave or seek assistance.
                </p>

              </div>


              {/* Alcohol */}

              <div className="mb-8">

                <h3 className="mb-2 font-bold text-white">
                  Alcohol & Substances:
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  Drink responsibly and look out for one another.
                </p>

              </div>


              {/* Recordings */}

              <div className="mb-8">

                <h3 className="mb-2 font-bold text-white">
                  No Unapproved Recordings:
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  Respect privacy—no recordings without consent.
                </p>

              </div>


              {/* Right to Leave */}

              <div className="mb-8">

                <h3 className="mb-2 font-bold text-white">
                  Right to Leave:
                </h3>

                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  You can leave or disconnect at any time if you feel
                  uncomfortable.
                </p>

              </div>


              {/* Closing */}

              <div className="pb-8">

                <p className="font-semibold leading-7 text-white">
                  Thank you for helping us maintain a fun, respectful
                  environment for everyone!
                </p>

              </div>

            </div>


            {/* ================= MODAL FOOTER ================= */}

            <div
              className="
                shrink-0
                border-t
                border-white/10
                px-6
                py-5
                sm:px-8
              "
            >

              <button
                type="button"
                onClick={() => setShowTerms(false)}
                className="
                  w-full
                  rounded-xl
                  bg-white
                  px-6
                  py-4
                  font-medium
                  text-black
                  transition
                  hover:bg-gray-100
                  active:scale-[0.98]
                "
              >
                CLOSE
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default TermsPage;