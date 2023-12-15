interface PhotoPageMetadata {
    title: string
    description: string
}

export async function getMetadata(id: string): Promise<PhotoPageMetadata> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Resolving photo page metadata for photo "${id}"- If this was using fetch, it would only ever go to the network once because Next caches it`)
            resolve({
                title: "Old photo",
                description: "A photo taken a long time ago"
            })
        }, 1000)
    })
}
