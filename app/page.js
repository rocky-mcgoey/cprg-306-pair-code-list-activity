import Link from 'next/link';
import { products } from './data.js';
import CardItem from './card-item.js';

export default function Home() {
  return (
    <div>
      <main>
        <header>
          <h1>Pair Programming List Component Activity</h1>
        </header>
        <section>
          <header>
            <h2>Coffee Card Grid Layout</h2>
            <p>
              Create a set of cards and card layout component based on the
              following jsx.
            </p>
          </header>
          <div>
            {products.map((product) => (
              <CardItem key={product.id} product={product} />
            ))}

            {/* <article>
              <header>
                <div>
                  <h3>Card Title</h3>
                  <p>
                    <strong>Card subheading</strong>
                  </p>
                  <p>Price: </p>
                </div>
                <div></div>
              </header>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet, temporibus.
                </p>
                <div>
                  <Link href="#">Show more</Link>
                  <button>Add to Cart</button>
                </div>
              </div>
            </article> */}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 GROUP NAME</p>
      </footer>
    </div>
  );
}
