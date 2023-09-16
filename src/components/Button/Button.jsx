const Button = ({
  children,
  type = 'button',
  className,
  onClick,
  isDisabled,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
export default Button;
