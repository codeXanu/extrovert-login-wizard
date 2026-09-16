function SignupButtons({
  primaryText = "NEXT",
  secondaryText = "BACK",
  onPrimary,
  onSecondary,
  primaryDisabled = false,
  loading = false,
}) {
  return (
    <div className="mt-10 flex flex-col gap-4">

      {/* Primary */}

      <button
        type="button"
        onClick={onPrimary}
        disabled={primaryDisabled || loading}
        className="
          flex
          h-14
          w-full
          items-center
          justify-center
          rounded-xl
          bg-white
          px-6
          text-base
          font-medium
          text-black
          transition

          hover:bg-white/90
          active:scale-[0.99]

          disabled:cursor-not-allowed
          disabled:text-black/30
        "
      >
        {loading ? (
          <span
            className="
              h-5
              w-5
              animate-spin
              rounded-full
              border-2
              border-black/20
              border-t-black
            "
          />
        ) : (
          primaryText
        )}
      </button>


      {/* Secondary */}

      <button
        type="button"
        onClick={onSecondary}
        disabled={loading}
        className="
          h-14
          w-full
          rounded-xl
          border
          border-white
          bg-transparent
          px-6
          text-base
          font-medium
          text-white
          transition

          hover:bg-white/5
          active:scale-[0.99]

          disabled:opacity-50
        "
      >
        {secondaryText}
      </button>

    </div>
  );
}

export default SignupButtons;