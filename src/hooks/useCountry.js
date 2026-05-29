import { useEffect, useState } from "react"

export const useCountry = () => {

    const [country, setCountry] = useState([])
    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)


    const onChange = (e) => {
        setName(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault()
    }

    const getCountryForName = async (searchCountry) => {

        try {

            setIsLoading(true)
            setIsError(null)

            const response = await fetch(`https://restcountries.com/v3.1/name/${searchCountry}`)

            if (!response.ok) {
                throw new Error("Not found Country")
            }

            const data = await response.json()

            setCountry(data)


        } catch (isError) {
            setIsError("Dont Allow this Api")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {

        if (!name.trim()) {
            setCountry([]);
            return;
        }

        const timer = setTimeout(() => {
            getCountryForName(name)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }

    }, [name])

    return {
        name,
        isLoading,
        isError,
        country,
        onChange,
        onSubmit
    }

}