interface buttonProps {

  children:React.ReactNode;
}

const ButtonBorder = ({children}:buttonProps) => {
  return (
    <button className="py-3 px-5 border border-blue-700 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white transition-all">{children}</button>
  )
}

export default ButtonBorder