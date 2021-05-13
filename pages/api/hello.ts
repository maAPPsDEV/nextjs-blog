// req = HTTP incoming message, res = HTTP server response
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' })
}