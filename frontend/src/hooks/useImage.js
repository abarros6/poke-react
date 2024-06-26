import { useEffect, useState } from 'react'

const useImage = (fileNumber) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/pokemonImages/${fileNumber}.png`)
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [fileNumber])

    return {
        loading,
        error,
        image,
    }
}

export default useImage
