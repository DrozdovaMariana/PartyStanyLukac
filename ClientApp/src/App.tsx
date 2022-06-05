import { Component } from 'react';

import Layout from './components/Layout';
import Home from './pages/Home';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Home />
            </Layout>
        );
    }
}
