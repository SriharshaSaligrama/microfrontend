import React, { useRef, useEffect } from 'react'
import { marketingMount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = marketingMount(ref.current)
        history.listen(onParentNavigate)
    }, [])
    return <div ref={ref} />
}