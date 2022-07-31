// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import { OK, NOT_FOUND, BAD_REQUEST } from "http-status"

const booksBaseApiUrl = `http://0100-2804-14d-5e82-875f-f415-b228-fcf6-356e.sa.ngrok.io`
export default async function handler(req, res) {
  try {
    const bookId = req.query.id 
    const bookResponse = await axios.get(`${booksBaseApiUrl}/books/${bookId}`)

    return res.status(OK).json(bookResponse.data)
  } catch (error) {
    console.log(error.message)
    if (error.response?.status === NOT_FOUND) {
      return res.status(NOT_FOUND).json()
    }

    return res.status(BAD_REQUEST).json({ message: 'Something went wrong! :C' })
    
  }
}