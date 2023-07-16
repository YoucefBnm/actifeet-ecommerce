import { useEffect, useState } from "react";

export function shopFiltersOpen (title) {
    const [isOpen, setIsOpen] = useState()

    useEffect(() => {
        if(title==='gender' || title==='category') {
            setIsOpen(true)
        } 
        setIsOpen(false)
    },[])
    
    return {isOpen, setIsOpen}
}