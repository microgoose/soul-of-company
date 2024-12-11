import {Component, ErrorInfo, ReactNode} from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

//todo dont work
class ErrorBoundary extends Component<ErrorBoundaryProps> {
    state = { hasError: false, errorMessage: '' };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error(error, info);
    }

    handleCloseError = () => {
        this.setState({ hasError: false, errorMessage: '' });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div onClick={this.handleCloseError}>
                    {this.state.errorMessage}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;