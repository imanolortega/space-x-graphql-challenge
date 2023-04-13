export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="
      h-full w-full max-w-screen-2xl
      px-6 py-8 md:py-10 mx-auto
      gradients
      "
    >
      {children}
    </main>
  )
}
