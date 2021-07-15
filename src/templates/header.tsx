import generateTemplateContent from "../utils/generateTemplate";

export default class CustomHeader extends HTMLElement {
    constructor() {
        super();

        const headerTemplate = generateTemplateContent(
            `I am header`
        );

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(headerTemplate.cloneNode(true));

    }
}