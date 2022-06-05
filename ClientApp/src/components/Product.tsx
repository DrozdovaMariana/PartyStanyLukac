import { Component } from 'react';

import './Product.css';

interface IProps {
    src: string,
    alt: string,
    title: string,
    stock?: number,
    price: number,
    montage?: number
}

export default class Product extends Component<IProps> {
    static displayName = Product.name;

    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { src, alt, title, stock, price, montage } = this.props;
        return (
            <div className="product-container">
                <img className="w-100" src={src} alt={alt} />
                <div className="container-content">
                    <h3>{title}</h3>
                    {(stock) ? < p className="m-0">{`Skladom: ${stock}`}</p> : ""}                    
                    <p className="m-0">{`Cena(1ks): ${price} EUR`}</p>
                    {(montage) ? <p className="m-0">{`Montáž + demontáž(1ks): ${montage} EUR`}</p> : ""}
                </div>
            </div>
        );
    }
}