"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const _1 = require("./");
describe('Posts component', () => {
    it('renders the component', () => {
        (0, react_1.render)(<_1.Posts />);
        expect(react_1.screen.getByTestId('posts-component')).toBeInTheDocument();
    });
    it('renders the header with text "Related Posts"', () => {
        (0, react_1.render)(<_1.Posts />);
        expect(react_1.screen.getByText('Related Posts')).toBeInTheDocument();
    });
});
