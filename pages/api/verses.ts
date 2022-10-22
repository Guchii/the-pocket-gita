import verses from '../../gita/data/verse.json'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const handler: NextApiHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    return res.status(200).json(verses)
}

export default handler
