function Home() {
  return (
    <main>
      <section>
        <h1>Fox Racing Store</h1>
        <p>Bienvenido a la tienda oficial</p>
      </section>

      <section className="carousel">
        <img
          src="https://via.placeholder.com/800x300?text=Fox+Promo+1"
          alt="Promo 1"
        />
        <img
          src="https://via.placeholder.com/800x300?text=Fox+Promo+2"
          alt="Promo 2"
        />
        <img
          src="https://via.placeholder.com/800x300?text=Fox+Promo+3"
          alt="Promo 3"
        />
      </section>

      {/* Categorías como vista previa visual */}
      <section className="categories">
        <div className="category">
          <img
            src="https://via.placeholder.com/300x200?text=MX+Boots"
            alt="MX Boots"
          />
          <p>MXBoots</p>
        </div>
        <div className="category">
          <img
            src="https://via.placeholder.com/300x200?text=FanWear"
            alt="FanWear"
          />
          <p>FanWear</p>
        </div>
        <div className="category">
          <img
            src="https://via.placeholder.com/300x200?text=Accessories"
            alt="Accessories"
          />
          <p>Accesorios</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
