import Image from 'next/image'
import styles from '../styles/components/BookInfos.module.css'

function BookInfo({book}) {
//console.log(book)
return(
    <div className={styles['info-container']}>
        <div><Image src= {book.image} width={100} height={150}></Image></div> 
        <div>
         <h3>Escrito por: {book.author}</h3>
         <h3>Resumido por: {book.summaryAuthor}</h3>
        </div>
    </div>
    
  )
}

export{BookInfo}