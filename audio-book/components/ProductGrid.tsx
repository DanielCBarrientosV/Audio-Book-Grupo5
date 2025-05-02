import React from 'react';
import Card from './Card';

const ProductGrid = () => {
  return (
    <section className="product-grid">
      <Card image="/libro1.jpg" title="The Republic" author="By Plato" price="₹285" />
      <Card image="/libro2.jpg" title="Ancient World" author="By Susan Wise Bauer" price="₹2,598" />
      <Card image="/libro3.jpg" title="Allegory of Cave" author="By Plato" price="₹549" />
      <Card image="/libro4.jpg" title="Homeric Hymns" author="By Michael Crudden" price="₹757" />
    </section>
  );
}

export default ProductGrid;