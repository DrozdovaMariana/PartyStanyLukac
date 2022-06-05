import{ Component } from 'react';

import baner from '../../images/baner.webp';

interface IProps {

}

export default class Header extends Component<IProps> {
    static displayName = Header.name;

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <header id="introduction" className="d-flex flex-column h-100">
                <div className="container text-center m-auto">
                    <img src={baner} alt="baner" className="img-fluid" />
                    <h1 className="display-2">Prenájom párty stanov a techniky</h1>
                </div>
                <div className="text-center mt-auto">
                    <a role="button" href="#products" className="btn btn-outline-warning btn-lg position-absolute bottom-0 start-50 translate-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-chevron-down">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                    </a>
                </div>
            </header>
        );
    }
}