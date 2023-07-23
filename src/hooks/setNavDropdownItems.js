import { useState } from "react"

const setNavDropdownItems = () => {
    const [dropdownItems, setDropdownItems] = useState(null)
    const [activeTab, setActiveTab] = useState(null)

    const handleMouseEnter = (items, active) => {
        setDropdownItems(items)
        setActiveTab(active)
    }
    const handleMouseLeave = () => setDropdownItems(null)

    return {
        dropdownItems,
        activeTab,
        handleMouseEnter,
        handleMouseLeave
    }
}