export default function Layout({
    children,
    page1,
    page2,
    errorAfterLoaded,
  }: {
    children: React.ReactNode
    page1: React.ReactNode
    page2: React.ReactNode
    errorAfterLoaded: React.ReactNode
  }) {
    return (
      <>
        {children}
        {page1}
        {page2}
        {errorAfterLoaded}
      </>
    )
}