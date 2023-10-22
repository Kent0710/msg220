import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-violet-200 to-pink-200 text-neutral-800">
      
      <Header />
      <Main />
      <Footer />

    </main>
  )
}
