import Head from "next/head";
import Cuboid from "../components/Cuboid"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
      <Head>
        <title>Cuboid</title>
        <meta
          name="description"
          content="A 3D cube rendered with Three.js in Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-8xl">Hello!</div>
        <div className="h-screen flex justify-center items-center">
          <Cuboid />
        </div>
      </main>
      <Footer />
    </>
  );
}
