import { Component } from 'react';

import Contact from './Home/Contact';
import Header from './Home/Header';
import Notice from './Home/Notice';
import ProductList from './Home/ProductList';

export default class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <main className="h-100">
                <Header />
                <ProductList />
                <Contact />
                <Notice />
            </main>
        );
    }
}
