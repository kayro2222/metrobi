"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const _1 = require("./");
describe('Footer component', () => {
    it('renders the component', () => {
        (0, react_1.render)(<_1.Footer />);
        expect(react_1.screen.getByTestId('footer-component')).toBeInTheDocument();
    });
    it('renders the header with text "Footer"', () => {
        (0, react_1.render)(<_1.Footer />);
        expect(react_1.screen.getByText('Footer')).toBeInTheDocument();
    });
});
