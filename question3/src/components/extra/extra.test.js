"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const _1 = require("./");
describe('Extra component', () => {
    it('renders the component', () => {
        (0, react_1.render)(<_1.Extra />);
        expect(react_1.screen.getByTestId('extra-component')).toBeInTheDocument();
    });
    it('renders the header with text "Extra Content"', () => {
        (0, react_1.render)(<_1.Extra />);
        expect(react_1.screen.getByText('Extra Content')).toBeInTheDocument();
    });
});
