import Image from 'next/image'
import styles from '../styles/components/Card.module.css'

function Card({book}) {

return(
    <a href={`http://localhost:3000/books/${book.id}`} className={styles.card}>
        <h2>{book.title}</h2>
        <div className={styles.bookImageContainer}><Image src= {book.image} width={100} height={150} alt={`Image of ${book.title}`}></Image></div>
        <h3>Escrito por {book.author}</h3>
        <sub>Resumo de {book.summaryAuthor}</sub>
    </a>
  )
}

export {Card}