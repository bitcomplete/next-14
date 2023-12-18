import PhotoPageContent from "@/components/PhotoPageContent"
import { getDetailedData } from "@/lib/photoPageData"

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function PhotoPage({params: { id }}: Props) {
  // This will only execute on the server:
  console.log("Photo page - you should see this in the server logs only, for all full page loads and once during the first client-side navigation to this page.")

  const { title, description, alt, src } = await getDetailedData(id)

  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>
      <div>
        <PhotoPageContent alt={alt} src={src} description={description} />
      </div>
    </section>
  )
}
