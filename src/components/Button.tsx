interface ButtonProps extends React.PropsWithChildren {
  buttonText?: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  id: string,
  className?: string,
}

function Button({ 
  buttonText = 'Default Text',
  className = '',
  // type = 'button',
  // onClick,
  // id
  children,
  ...restProps
}: ButtonProps) {
  
  const combineClasses = `inline-flex items-center justify-center gap-2 rounded-lg transition  px-3 py-2 text-xs bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ${className}`
  return (
    <button 
      className={combineClasses}
      // type={type}
      // id={id}
      // onClick={onClick}
      {...restProps}
    >
      <span className="flex items-center">
        <div className="fa-classic fa-solid fa-plus fa-fw"></div>
      </span>
      {children}
      {buttonText}
    </button>
  )
}

export default Button