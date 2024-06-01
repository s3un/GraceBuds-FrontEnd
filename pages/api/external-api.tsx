import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

export default async function bibleAPI(req: NextApiRequest, res: NextApiResponse ) {
    try {
        const response = await axios.get('https://api.scripture.api.bible/v1/bibles');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ erro: "failed to fetch data"})
    }
}

