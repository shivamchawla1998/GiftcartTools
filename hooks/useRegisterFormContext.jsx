import { useContext } from "react"
import RegisterFormContext from "../context/RegisterFormContext"

const useRegisterFormContext = () => {
    return useContext(RegisterFormContext)
}

export default useRegisterFormContext