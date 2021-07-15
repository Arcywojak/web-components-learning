import { TemplateTuple } from "../interfaces/templateTuple";

const defineCustomTemplates = (templates: TemplateTuple[]) => {
    templates.map(({templateName, templateObject}) => {
        customElements.define(templateName, templateObject);
    })
}

export default defineCustomTemplates;