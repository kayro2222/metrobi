"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const _1 = require("./");
describe('Hero component', () => {
    it('renders the component', () => {
        (0, react_1.render)(<_1.Hero />);
        expect(react_1.screen.getByTestId('hero-component')).toBeInTheDocument();
    });
    it('renders the component with text "Hero"', () => {
        (0, react_1.render)(<_1.Hero />);
        expect(react_1.screen.getByText('Hero')).toBeInTheDocument();
    });
});
