"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const _1 = require("./");
describe('Header component', () => {
    it('renders the component', () => {
        (0, react_1.render)(<_1.Header />);
        expect(react_1.screen.getByTestId('header-component')).toBeInTheDocument();
    });
    it('renders the component with text "Header"', () => {
        (0, react_1.render)(<_1.Header />);
        expect(react_1.screen.getByText('Header')).toBeInTheDocument();
    });
});
