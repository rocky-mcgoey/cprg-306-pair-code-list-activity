import Link from 'next/link';

export default function CardItem({
  product: { title, subtitle, description, price, imgPath, cta },
}) {
  return (
    <article className="border-2 border-gray-300 p-4">
      <header>
        <div>
          <h3>{title}</h3>
          <p>
            <strong>{subtitle}</strong>
          </p>
          <p>Price: ${price}</p>
        </div>
        <div>{imgPath}</div>
      </header>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <Link href="#">Show more</Link>
        <button>{cta}</button>
      </div>
    </article>
  );
}
