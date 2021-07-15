import CustomFooter from '../templates/footer';
import CustomHeader from '../templates/header';
import defineCustomTemplates from '../utils/defineCustomTemplates';

defineCustomTemplates([
    {
        templateName: "app-footer", templateObject: CustomFooter
    },
    {
        templateName: "app-header", templateObject: CustomHeader
    },
])



export default class App extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <app-header> </app-header>

            <app-footer> </app-footer>
        `
    }
}
