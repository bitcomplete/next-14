'use client'

import {useEffect} from "react"

interface Props {
    description: string
}

/**
 * This component is going to render on the server as static HTML (much like a server component) but we are allowed to
 * use useEffect and other client-side-only tools.
 * @see https://nextjs.org/docs/app/building-your-application/rendering/client-components
 * @constructor
 */
export default function PhotoPageContent({ description }: Props) {
    console.log("PhotoPageContent - you should see this in both server logs (for full page loads) and in the client console.")

    useEffect(() => {
        console.log("PhotoPageContent useEffect - you should only see this on the client.")
    }, [])


    return (
        <p>{description}</p>
    )
}
