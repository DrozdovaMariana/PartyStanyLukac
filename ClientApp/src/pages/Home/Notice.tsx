import { Component } from 'react';

interface IProps {

}

export default class Notice extends Component<IProps> {
    static displayName = Notice.name;

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <section className="d-flex flex-column h-100" id="sales">
                <div className="container m-auto">
                    <h2 className="display-2 text-center">Neprehliadnite naše akcie, zľavy a dôležité informácie...</h2>
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Zľava</h4>
                        <span>Ak si na vašej párty, na naše stany, umiestnite náš reklamný banner, získate&nbsp;<strong>10%</strong>&nbsp;zľavu pri nákupe! </span>
                    </div>
                    <div className="alert alert-info" role="alert">
                        <h4 className="alert-heading">Preprava</h4><span>V prípade záujmu zabezpečujeme dovoz/ odvoz tovaru. Účtovaná cena je&nbsp;<strong>0,40€</strong> za <strong>1km</strong> cesty.
                        </span>
                    </div>
                </div>
                <div className="text-center mt-auto p-3">
                    <a className="btn btn-outline-warning btn-lg" role="button" href="#products">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-chevron-double-up">
                            <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"></path>
                            <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path>
                        </svg>
                    </a>
                </div>
            </section>
        );
    }
}