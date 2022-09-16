import {useState} from 'react'

export const Storage = (key,initialValue)=>{
    const [storageValue, setStorageValue] = useState(()=>{
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.stringify(item) : initialValue
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = value =>{
        try{
            setStorageValue(value)
            localStorage.setItem(key, JSON.stringify(value))
        }catch(error){
        }
    }

    return [storageValue, setValue]
}