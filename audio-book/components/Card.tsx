// components/Card.jsx
import React from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js

interface CardProps {
  image: string;
  title: string;
  author: string;
  price: string | number;
}

const Card: React.FC<CardProps> = ({ image, title, author, price }) => {
return (
    <article className="card">
      <Image 
        src={image} 
        alt={title} 
        width={300} // Ajusta el ancho según tus necesidades
        height={400} // Ajusta la altura según tus necesidades
        layout="responsive" // Hace que la imagen se ajuste al contenedor
      />
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
      <div className="card-footer">
        <span className="price">{price}</span>
        <button className="buy-button">Buy</button>
      </div>
    </article>
  );
}

export default Card;