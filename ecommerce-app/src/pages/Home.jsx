import { Link } from "react-router-dom";
function Home() {
  return (
    <main>
      <section>
        <h1>Fox Racing Store</h1>
        <p>Bienvenido a la tienda oficial</p>
      </section>

      <section className="carousel">
        <img src="/img/promo1.JPG" alt="Promo 1" />
        <img src="/img/promo2.JPG" alt="Promo 2" />
        <img src="/img/promo3.JPG" alt="Promo 3" />
      </section>

      <section className="categories">
        <Link to="/products" className="category">
          <img src="/img/cascoHome.JPG" alt="Moto Helmet" />
          <p>Moto Helmet</p>
        </Link>
        <Link to="/products" className="category">
          <img src="/img/fanwear.JPG" alt="FanWear" />
          <p>FanWear</p>
        </Link>
        <Link to="/products" className="category">
          <img src="/img/suscription.JPG" alt="Accessories" />
          <p>Accesorios</p>
        </Link>
      </section>
    </main>
  );
}
export default Home;
