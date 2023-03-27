"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const _1 = require("./");
describe('Main component', () => {
    it('renders the component', () => {
        (0, react_1.render)(<_1.Main />);
        expect(react_1.screen.getByTestId('main-component')).toBeInTheDocument();
    });
    it('renders the header with text "Main Content"', () => {
        (0, react_1.render)(<_1.Main />);
        expect(react_1.screen.getByText('Main Content')).toBeInTheDocument();
    });
    it('renders the paragraph with text "**If things do not look right, make sure your browser is in "Experimental Mode"."', () => {
        (0, react_1.render)(<_1.Main />);
        expect(react_1.screen.getByText('**If things do not look right, make sure your browser is in "Experimental Mode".')).toBeInTheDocument();
    });
});
