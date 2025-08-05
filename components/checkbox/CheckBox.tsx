import { FaCheck } from "react-icons/fa6"

interface checkProps {
    desc:string;
}

const CheckBox = ({desc}:checkProps) => {
  return (
    <div className="flex items-start gap-4 mb-4">
        <div className="h-9 w-9 flex justify-center items-center rounded-full bg-blue-700 p-2">
        <FaCheck className="text-2xl text-white" />
        </div>
        <p>{desc}</p>
    </div>
  )
}

export default CheckBox