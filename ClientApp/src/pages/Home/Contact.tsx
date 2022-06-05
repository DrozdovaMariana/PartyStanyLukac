import { Component } from 'react';

interface IProps {

}

export default class Contact extends Component<IProps> {
    static displayName = Contact.name;

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <section className="d-flex flex-column h-100" id="contact">
                <div className="container text-center m-auto">
                    <h2 className="display-2 mb-3">Kontaktovať nás môžete na čísle</h2>
                    <h2 className="display-2">
                        <a href="tel:+421908716867">+421 908 716 867</a>
                    </h2>
                </div>
                <div className="text-center mt-auto p-3">
                    <a className="btn btn-outline-warning btn-lg" role="button" href="#sales">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-chevron-down">
                            <path fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                    </a>
                </div>
            </section>
        );
    }
}