import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  roundedCorner,
  outline,
  ...rest
}) {
  const classes = className(
    rest.className,
    "text-xs md:text-base font-bold cursor-pointer py-3 px-2 md:px-3 lg:px-6 xl:px-9 hover:shadow-md hover:bg-opacity-90 transition-all duration-300",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "first:rounded-l-full last:rounded-r-full border border-gray-200":
        roundedCorner,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
