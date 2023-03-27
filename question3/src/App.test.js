"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const App_1 = __importDefault(require("./App"));
describe('App component', () => {
    it('renders the header', () => {
        (0, react_1.render)(<App_1.default />);
        expect(react_1.screen.getByTestId('header-component')).toBeInTheDocument();
    });
    it('renders the main content', () => {
        (0, react_1.render)(<App_1.default />);
        expect(react_1.screen.getByTestId('main-component')).toBeInTheDocument();
        expect(react_1.screen.getByTestId('extra-component')).toBeInTheDocument();
        expect(react_1.screen.getByTestId('hero-component')).toBeInTheDocument();
        expect(react_1.screen.getByTestId('sidebar-component')).toBeInTheDocument();
    });
    it('renders the related content', () => {
        (0, react_1.render)(<App_1.default />);
        expect(react_1.screen.getByTestId('images-component')).toBeInTheDocument();
        expect(react_1.screen.getByTestId('posts-component')).toBeInTheDocument();
    });
    it('renders the footer', () => {
        (0, react_1.render)(<App_1.default />);
        expect(react_1.screen.getByTestId('footer-component')).toBeInTheDocument();
    });
});
