import { Component } from 'react';

import Product from '../../components/Product';

interface IProps {

}

interface IState {
    products: IProduct[],
    loading: boolean
}

interface IProduct {
    id: number,
    src: string,
    alt: string,
    title: string,
    stock?: number,
    price: number,
    montage?: number,
    order: number
}

export default class ProductList extends Component<IProps, IState> {
    static displayName = ProductList.name;

    constructor(props: IProps) {
        super(props);
        this.state = {
            products: [],
            loading: true
        };
    }

    _renderProductList(products: IProduct[]) {
        if (!products)
            return null;

        return (
            <div className="row g-0">
                {products.map(product =>
                    <div key={product.id.toString()} className="col-12 col-md-6 col-lg-4 p-1">
                        <Product
                            src={product.src}
                            alt={product.alt}
                            title={product.title}
                            stock={product.stock}
                            price={product.price}
                            montage={product.montage} />
                    </div>
                )}
            </div>
        );
    }

    async _downloadDataProducts() {
        const response = await fetch('api/products');

        let data = [];
        if (response.ok)
            data = await response.json();

        this.setState({
            products: data,
            loading: false
        });
    }

    componentDidMount() {
        this._downloadDataProducts();
    }

    render() {
        const contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this._renderProductList(this.state.products);

        return (
            <section id="products">
                <div className="container">
                    {contents}
                </div>
                <div className="text-center p-3">
                    <a className="btn btn-outline-warning btn-lg" role="button" href="#contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-chevron-down">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                    </a>
                </div>
            </section>
        );
    }
}