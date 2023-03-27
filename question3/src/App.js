"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("./components");
require("./App.css");
function App() {
    return (<div className="App">
      <div className='App'>
        <components_1.Header />
        <div className='content'>
          <div className='main-content'>
            <div className='first-column'>
              <components_1.Hero />
              <components_1.Sidebar />
            </div>
            <div className='second-column'>
              <components_1.Main />
              <components_1.Extra />
            </div>
          </div>
          <div className='related-content'>
            <components_1.Images />
            <components_1.Posts />
          </div>
        </div>
        <components_1.Footer />
      </div>
    </div>);
}
exports.default = App;
