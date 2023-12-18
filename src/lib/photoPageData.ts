const KNOWN_ID = 'old-photo'
const SOURCE_URL = "https://jsonplaceholder.typicode.com/photos/1"

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

export async function getMetadata(id: string, delay: number): Promise<PhotoPageMetadata> {
    // Thi
    return new Promise(async (resolve, reject) => {
        if (id != KNOWN_ID) {
            reject(`Unknown id "${id}"`)
        }
        const data = await fetch(SOURCE_URL).then(response => response.json()).catch(() => {
            reject("An error occurred")
        })
        setTimeout(() => {
            resolve({
                title: data.title,
                description: "A photo taken a long time ago",
            })
        }, delay)
    })
}

/**
 * This is async data for the layout component and any delay will result in showing the loading component
 * the first time the page is navigated to or loaded
 * @see https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-overview.png&w=3840&q=75&dpl=dpl_A1BZA979GyP8KNbnbYY3PRcpuhZF
 */

export async function getDetailedData(id: string): Promise<DetailedPhotoPageData> {
    return new Promise(async (resolve, reject) => {
        if (id != KNOWN_ID) {
            reject(`Unknown id "${id}"`)
        }
        const data = await fetch(SOURCE_URL).then(response => response.json()).catch(() => {
            reject("An error occurred")
        })
        setTimeout(() => {
            resolve({
                title: data.title,
                description: "A photo taken a long time ago",
                alt: "A random photo",
                src: data.thumbnailUrl

            })
        }, 3000)
    })
}
