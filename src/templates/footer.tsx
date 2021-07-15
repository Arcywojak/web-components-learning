import generateTemplateContent from "../utils/generateTemplate";

export default class CustomFooter extends HTMLElement {
    constructor() {
        super();

        const footerTemplate = generateTemplateContent(
            `<footer> I am footer </footer>`
        );
        
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(footerTemplate.cloneNode(true));

    }
}