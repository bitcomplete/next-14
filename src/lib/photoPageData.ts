const KNOWN_ID = 'old-photo'

interface PhotoPageMetadata {
    title: string
    description: string
}

interface DetailedPhotoPageData {
    alt: string
    src: string
    title: string
    description: string
}

export async function getMetadata(id: string): Promise<PhotoPageMetadata> {
    // This is async data for the layout component and any delay will just make everything slower
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Resolving photo page metadata for photo "${id}"`)
            if (id != KNOWN_ID) {
                reject(`Unknown id "$id"`)
            }
            resolve({
                title: "Old photo",
                description: "A photo taken a long time ago"
            })
        }, 500)
    })
}

/**
 * This is async data for the layout component and any delay will result in showing the loading component
 * the first time the page is navigated to or loaded
 * @see https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-overview.png&w=3840&q=75&dpl=dpl_A1BZA979GyP8KNbnbYY3PRcpuhZF
 */

export async function getDetailedData(id: string): Promise<DetailedPhotoPageData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Resolving full photo data for "${id}"`)
            if (id != KNOWN_ID) {
                reject(`Unknown id "$id"`)
            }
            resolve({
                title: "Old photo",
                description: "A photo taken a long time ago",
                alt: "A random photo",
                src: "https://picsum.photos/200/300"
            })
        }, 5000)
    })
}
