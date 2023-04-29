import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id?: string
  title?: string
  description?: string
  image?: string
  price?: string
  authorId?: string
  message?: string
  modules?: [
    {
      moduleType?: string
      moduleTitle?: string
      moduleDescription?: string
      moduleImage?: string
      moduleData?: {
        dataType: string
        dataContent: string[]
      }
    }
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const course: Data = {
    id: '1',
    title: 'Herb ID',
    description: 'Identify herbs in your area',
    image: 'https://fastly.picsum.photos/id/382/200/200.jpg?hmac=1RBvTrTJY2s3gldIAai5u3hsPDx6IEzsQg9uUC-MARo',
    price: 'Free',
    authorId: 'c2d7d7cb-6eb0-4c52-95df-b0677605b665'
  }

  res.status(200).json(course)
}