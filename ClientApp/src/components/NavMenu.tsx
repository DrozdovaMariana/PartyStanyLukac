import { Component } from 'react';
import logo from '../images/logo.webp';

export default class NavMenu extends Component {
    static displayName = NavMenu.name;

    render() {
        return (
            <nav id="navbar-main" className="navbar navbar-light navbar-expand-sm fixed-top bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} width="32" height="32" alt="logo" />
                    </a>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navcol-1">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#introduction">Úvod</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#products">Produkty</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Kontakt</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sales">Zľavy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
