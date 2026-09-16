function SignupInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  maxLength,
  inputMode,
  readOnly = false,
  onClick,
}) {
  return (
    <div className="w-full">

      {label && (
        <label className="mb-2 block text-xs text-white/70">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        readOnly={readOnly}
        onClick={onClick}
        onChange={(event) => onChange(event.target.value)}
        className={`
          h-14
          w-full
          rounded-xl
          border
          bg-transparent
          px-4
          text-base
          text-white
          outline-none
          transition

          placeholder:text-white/20

          ${
            error
              ? "border-red-500"
              : "border-white/25 focus:border-white/60"
          }

          ${readOnly ? "cursor-pointer" : ""}
        `}
      />

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}

export default SignupInput;