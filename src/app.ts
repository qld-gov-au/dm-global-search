
import { FilterModule } from './modules/FilterModule'
import { SearchModule } from './modules/SearchModule'

class initApp {
    static init() {
        const filterComponent = new FilterModule()
        const searchResults = new SearchModule()
    }
}
// initalize on history changes only
window.onpopstate = function(event) {
    initApp.init();
};
// initalize on page reload
initApp.init();

