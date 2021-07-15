const generateTemplateContent = (content: string): DocumentFragment => {
    const template = document.createElement("template");
    template.innerHTML = content;
    return template.content;
}

export default generateTemplateContent;