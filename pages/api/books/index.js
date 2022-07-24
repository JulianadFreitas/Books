// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import { OK, NOT_FOUND, BAD_REQUEST } from "http-status"

const booksBaseApiUrl = `http://localhost:3001` 

export default async function handler(req, res) {
  try {
    const bookResponse = await axios.get(`${booksBaseApiUrl}/books`)

    return res.status(OK).json(bookResponse.data)
  } catch (error) {
    if (error.response?.status === NOT_FOUND) {
      return res.status(NOT_FOUND).json()
    }

    return res.status(BAD_REQUEST).json({ message: 'Something went wrong! :C' })
  }
} 
