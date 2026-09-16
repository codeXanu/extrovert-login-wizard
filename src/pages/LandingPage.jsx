import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleContinue = () => {
    setLoading(true);

    // Simulate navigation/loading
    setTimeout(() => {
      setLoading(false);
      console.log("Navigate to next page");
      Navigate("/terms");
    }, 1000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030308] font-[Poppins] text-white">

      {/* ========================================= */}
      {/* COLORFUL ABSTRACT BACKGROUND */}
      {/* ========================================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Main Blue Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d176d] via-[#1476b8] to-[#04b8b2]" />

        {/* Purple / Dark Blue Top */}
        <div
          className="
            absolute
            -top-[20%]
            left-[20%]
            h-[55%]
            w-[55%]
            rounded-full
            bg-[#25144d]
            blur-[120px]
          "
        />

        {/* Yellow / Orange Left */}
        <div
          className="
            absolute
            -left-[15%]
            top-[8%]
            h-[60%]
            w-[55%]
            rounded-full
            bg-gradient-to-br
            from-[#ffd447]
            via-[#ff812e]
            to-[#ff3d42]
            blur-[90px]
          "
        />

        {/* Red / Pink Center */}
        <div
          className="
            absolute
            left-[10%]
            top-[20%]
            h-[60%]
            w-[60%]
            rounded-full
            bg-[#ff3c62]
            opacity-90
            blur-[120px]
          "
        />

        {/* Cyan Right */}
        <div
          className="
            absolute
            right-[-10%]
            top-[8%]
            h-[65%]
            w-[55%]
            rounded-full
            bg-[#16c9cf]
            opacity-80
            blur-[120px]
          "
        />

        {/* Green Glow */}
        <div
          className="
            absolute
            right-[5%]
            top-[45%]
            h-[45%]
            w-[45%]
            rounded-full
            bg-[#38d77b]
            opacity-70
            blur-[100px]
          "
        />

        {/* Red Bottom Left */}
        <div
          className="
            absolute
            -bottom-[10%]
            -left-[10%]
            h-[50%]
            w-[60%]
            rounded-full
            bg-[#ff1f12]
            opacity-90
            blur-[100px]
          "
        />

      </div>


      {/* ========================================= */}
      {/* ABSTRACT MOUNTAIN */}
      {/* ========================================= */}

      <div
        className="
          absolute
          bottom-[8%]
          left-1/2
          h-[65%]
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-br
          from-[#1b1831]
          via-[#15162d]
          to-[#03040c]
          opacity-95
        "
        style={{
          clipPath: `
            polygon(
              0% 100%,
              8% 85%,
              16% 70%,
              26% 50%,
              35% 32%,
              42% 20%,
              48% 13%,
              54% 10%,
              60% 12%,
              64% 20%,
              67% 35%,
              70% 48%,
              78% 55%,
              88% 65%,
              100% 100%
            )
          `,
        }}
      />


      {/* Mountain Shadow */}
      <div
        className="
          absolute
          bottom-[-10%]
          left-1/2
          h-[50%]
          w-[100%]
          -translate-x-1/2
          rounded-full
          bg-black/60
          blur-[80px]
        "
      />


      {/* ========================================= */}
      {/* DARK GRADIENT OVERLAY */}
      {/* ========================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#030308]
        "
      />

      <div
        className="
          absolute
          bottom-0
          h-[55%]
          w-full
          bg-gradient-to-t
          from-[#030308]
          via-[#030308]/80
          to-transparent
        "
      />


      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <section
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-6
          py-10
        "
      >

        <div
          className="
            flex
            w-full
            max-w-2xl
            flex-col
            items-center
          "
        >

          {/* ================= LOGO ================= */}

          {/* <div className="mb-20 flex items-start gap-2"> */}

            {/* Main Logo Shape */}
            
              {/* Logo Cutout */}
              
              {/* <h1
                className="
                  mb-7
                  text-center
                  text-5xl
                  font-extrabold
                  font-serif
                  leading-none
                  tracking-[0.05em]
                  text-white
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                E
              </h1> */}

            {/* Logo Dot */}
            
            {/* <div
              className="
                mx-auto
                mt-3
                ml-0
                h-2
                w-2
                rounded-full
                bg-white
                sm:h-3.5
                sm:w-3.5
                md:h-4
                md:w-4
                lg:h-5
                lg:w-5
              "
            /> */}

          {/* </div> */}

          <div className="mb-20 flex justify-center">
              <div className="relative inline-block">

                {/* Logo E */}
                <h1
                  className="
                    mb-0
                    text-center
                    text-5xl
                    font-extrabold
                    font-serif
                    leading-none
                    tracking-[0.05em]
                    text-white
                    sm:text-6xl
                    md:text-7xl
                    lg:text-8xl
                  "
                >
                  E
                </h1>

                {/* Logo Dot */}
                <div
                  className="
                    absolute
                    right-[-3px]
                    top-[8px]
                    h-2
                    w-2
                    rounded-full
                    bg-white

                    sm:right-[-4px]
                    sm:top-[6px]
                    sm:h-2.5
                    sm:w-2.5

                    md:right-[-5px]
                    md:top-[12px]
                    md:h-3
                    md:w-3

                    lg:right-[-6px]
                    lg:top-[15px]
                    lg:h-3.5
                    lg:w-3.5
                  "
                />

              </div>
          </div>


          {/* ================= HEADINGS ================= */}

          <p
            className="
              mb-2
              text-center
              text-sm
              font-bold
              tracking-[0.12em]
              text-white/90
              sm:text-base
              md:text-lg
            "
          >
            AN APP ONLY FOR
          </p>


          <h1
            className="
              mb-7
              text-center
              text-4xl
              font-extrabold
              leading-none
              tracking-[0.05em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
            "
          >
            EXTROVERTS
          </h1>


          {/* ================= WARNING ================= */}

          <p
            className="
              mb-10
              max-w-xl
              text-center
              text-sm
              font-medium
              leading-relaxed
              text-white/70
              sm:text-base
              md:text-lg
            "
          >
            Warning: Entering may lead to spontaneous dancing and
            <br className="hidden sm:block" />
            {" "}unsolicited high-fives!
          </p>


          {/* ================= BUTTON ================= */}

          <button
            onClick={handleContinue}
            disabled={loading}
            className="
              group
              flex
              w-full
              max-w-2xl
              items-center
              justify-center
              rounded-xl
              bg-[#f2f2f2]
              px-8
              py-5
              text-sm
              font-semibold
              tracking-[0.08em]
              text-[#24242a]
              shadow-xl
              transition-all
              duration-300
              hover:scale-[1.015]
              hover:bg-white
              active:scale-[0.985]
              disabled:cursor-not-allowed
              disabled:opacity-70
              sm:text-base
            "
          >

            {loading ? (
              <div className="flex items-center gap-3">

                {/* Spinner */}
                <div
                  className="
                    h-5
                    w-5
                    animate-spin
                    rounded-full
                    border-2
                    border-[#24242a]/30
                    border-t-[#24242a]
                  "
                />

                <span>LOADING</span>

              </div>
            ) : (
              "CONTINUE"
            )}

          </button>

        </div>

      </section>


      {/* ========================================= */}
      {/* OPTIONAL DECORATIVE GRAIN */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          opacity-[0.025]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />

    </main>
  );
}