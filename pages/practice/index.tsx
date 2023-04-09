import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Image from 'next/image'
import WordWithAudio from '@/components/sound'
import Container from '@/components/container'
import Button from '@/components/button'
import { useSession } from '@supabase/auth-helpers-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const session = useSession()
  const navList = [
    { name: "About", href: "/about" },
  ]
  if (!session) {
    navList.push({ name: "Login", href: "/login" })
  } else {
    navList.push({ name: "Practice", href: "/practice" })
  }

  return (
    <>
      <Head>
        <title>Practice</title>
        <meta name="description" content="Practice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout navList={navList}>
          <Container>
            <Image
              src="images/baizhi900x600.png"
              alt="Picture of the herb Baizhi"
              width={200}
              height={200}
            />
          </Container>
          <Container>
            <WordWithAudio word="" audioFile="bai2zhi1" />
          </Container>
          <Container>
            <p>What is the Simplified Chinese character for the herb pictured?</p>
          </Container>
          <Container>
            <Button column>白芷</Button>
            <Button column>白术</Button>
            <Button column>桂枝</Button>
          </Container>
        </Layout>
      </main>
    </>
  )
}
