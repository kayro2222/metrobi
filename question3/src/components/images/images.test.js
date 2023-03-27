"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const _1 = require("./");
describe('Images component', () => {
    it('renders the component', () => {
        (0, react_1.render)(<_1.Images />);
        expect(react_1.screen.getByTestId('images-component')).toBeInTheDocument();
    });
    it('renders the component with text "Related Images"', () => {
        (0, react_1.render)(<_1.Images />);
        expect(react_1.screen.getByText('Related Images')).toBeInTheDocument();
    });
});
