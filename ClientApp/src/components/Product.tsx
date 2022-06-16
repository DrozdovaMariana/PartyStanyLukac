import { IProduct } from '../pages/Home/ProductList';
import './Product.css';

const Product = ({ src, alt, title, stock, price, montage }: IProduct) => {
  return (
    <div className="product-container">
      <img className="w-100" src={src} alt={alt} />
      <div className="container-content">
        <h3>{title}</h3>
        {stock ? <p className="m-0">{`Skladom: ${stock}`}</p> : ''}
        <p className="m-0">{`Cena(1ks): ${price} EUR`}</p>
        {montage ? (
          <p className="m-0">{`Montáž + demontáž(1ks): ${montage} EUR`}</p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Product;
