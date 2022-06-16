import { useState, useEffect } from 'react';
import Product from '../../components/Product';

export interface IProduct {
  id?: number;
  src: string;
  alt: string;
  title: string;
  stock?: number;
  price: number;
  montage?: number;
  order?: number;
}

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // use mockdata.json in https://mocki.io/ service and replace url below
      const data = await fetch(
        'https://mocki.io/v1/52846bb4-9b11-40a2-948a-d3aaaa3c5ce9'
      );
      if (data.ok) {
        const productData = await data.json();
        setProducts(productData.data);
      } else {
        setFailed(true);
      }
    };

    fetchData();
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <p>
        <em>Loading...</em>
      </p>
    );
  }
  if (failed) {
    return (
      <p>
        <em>Fetching data failed...</em>
      </p>
    );
  }
  if (products.length) {
    return (
      <section id="products">
        <div className="container">
          <div className="row g-0">
            {products.map(
              ({ id, src, alt, title, stock, price, montage }: IProduct) => (
                <div key={id} className="col-12 col-md-6 col-lg-4 p-1">
                  <Product
                    src={src}
                    alt={alt}
                    title={title}
                    stock={stock}
                    price={price}
                    montage={montage}
                  />
                </div>
              )
            )}{' '}
          </div>
        </div>
        <div className="text-center p-3">
          <a
            className="btn btn-outline-warning btn-lg"
            role="button"
            href="#contact"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-down"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </a>
        </div>
      </section>
    );
  }
  return null;
};

export default ProductList;
