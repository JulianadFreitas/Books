import Image from 'next/image'
import styles from '../styles/components/Card.module.css'

export default function Card ({ book }) {
  return (
    <a href='https://nextjs.org/docs' className={styles.card}>
      <h2>{book.title}</h2>
      <div className={styles.bookImageContainer}>
        <Image src={book.image} width={100} height={150}></Image>
      </div>
      <h3>Escrito por {book.author}</h3>
      <sub>Resumo de {book.summaryAuthor}</sub>
    </a>
  )
}
