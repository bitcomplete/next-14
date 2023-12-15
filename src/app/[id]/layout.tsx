export default function PhotoPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>
        This is the nav
      </nav>
      <div>
        {children}
      </div>
    </div>
  )
}
