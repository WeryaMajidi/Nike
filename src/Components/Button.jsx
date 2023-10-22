function Button({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none gap-2 border ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "border-coral-red bg-coral-red text-white"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="rounded-full w-5 h-5" />
      )}
    </button>
  );
}

export default Button;
