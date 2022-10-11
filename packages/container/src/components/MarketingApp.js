import React, { useRef, useEffect } from 'react'
import { marketingMount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate: onNavigate } = marketingMount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location
                if (pathname !== nextPathname) history.push(nextPathname)
            }
        })
        history.listen(onNavigate)
    }, [])
    return <div ref={ref} />
}