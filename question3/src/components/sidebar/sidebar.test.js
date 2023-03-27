"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const _1 = require("./");
describe('Sidebar component', () => {
    it('renders the component', () => {
        (0, react_1.render)(<_1.Sidebar />);
        expect(react_1.screen.getByTestId('sidebar-component')).toBeInTheDocument();
    });
    it('renders the header with text "Sidebar"', () => {
        (0, react_1.render)(<_1.Sidebar />);
        expect(react_1.screen.getByText('Sidebar')).toBeInTheDocument();
    });
});
