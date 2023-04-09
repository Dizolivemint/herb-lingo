import Layout from '@/components/layout'
import Container from '@/components/container'
import Button from '@/components/button'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Course: React.FC = () => {
  const router = useRouter()
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const { id } = router.query
    if (id) {
      fetch(`/api/course/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCourse(data)
          setLoading(false)
        })
    }
  }, [router.query])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Container>
        <h1>{course.name}</h1>
      </Container>
      <Container>
        <Image
          src="/images/demo.png"
          alt="Next.js Logo"
          width={200}
          height={200}
        />
      </Container>
      <Container>
        <p>{course.description}</p>
      </Container>
      <Container>
        <Button column>Start</Button>
      </Container>
    </Layout>
  )
}