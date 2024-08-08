import { useContext } from "react"
import AddProductFormContext from "../context/AddProductFormContext"

const useAddProductFormContext = () => {
    return useContext(AddProductFormContext)
}

export default useAddProductFormContext