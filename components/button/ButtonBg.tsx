interface buttonProps {

  children:React.ReactNode;
}

const ButtonBg = ({children}:buttonProps) => {
  return (
    <button className="py-2 hidden sm:inline-block px-5 bg-blue-700 rounded-full text-white cursor-pointer text-[1.2rem] md:text-[1.3rem] hover:bg-blue-600">{children}</button>
  )
}

export default ButtonBg