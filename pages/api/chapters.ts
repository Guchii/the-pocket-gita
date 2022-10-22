import chapters from '../../gita/data/chapters.json'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const handler: NextApiHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    return res.status(200).json(chapters)
}

export default handler
