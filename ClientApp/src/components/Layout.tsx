import { Component } from 'react';
import NavMenu from './NavMenu';

interface IProps {
    children: React.ReactNode
}

export default class Layout extends Component<IProps> {
    static displayName = Layout.name;

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div data-bs-spy="scroll" data-bs-target="#navbar-main" data-bs-offset="0" tabIndex={0} className="h-100">
                <NavMenu />
                {this.props.children}
            </div>
        );
    }
}
