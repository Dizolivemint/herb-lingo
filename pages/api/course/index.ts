import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id?: string
  title?: string
  description?: string
  image?: string
  price?: string
  author?: string
  authorImage?: string
  authorDescription?: string
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


  res.status(200).json({ title: 'Herb ID' })
}