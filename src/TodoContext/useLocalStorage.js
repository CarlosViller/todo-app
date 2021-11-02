import { useState, useEffect } from 'react'

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(item))
                    parsedItem = item
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }
                setLoading(false)

            } catch (error) {
                setError(error)
            }
        }, 1000)
    }, [])

    const saveItem = newItem => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem))
            setItem(newItem)
        } catch (error) {
            setError(error)
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}

export default useLocalStorage
