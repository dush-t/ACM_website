const context = document.querySelector('#context');
const constructionEndpoint = context.innerHTML.trim();
console.log(constructionEndpoint);

const fetchData = async () => {
    let response = await fetch(constructionEndpoint);
    let data = await response.json();
    return data;
}

fetchData().then(async (data) => {
    const len = data.length;
    for (var index = 0; index < len; index++) {
        populateDescription(data[index], index);
    }
})

const populateDescription = (description, index=null) => {
    
    const position = description.position;
    const templatesArray = pageStructure[position];
    
    templatesArray.forEach((templateData) => {
        const $parent = document.querySelector(templateData.parent_elem_class);
        const template = document.querySelector(templateData.template_name).innerHTML;
        const html = Mustache.render(template, {
            index: index.toString(),
            title: description.description_title,
            content: description.description_content,
            image_url: description.description_image,
            url: description.embedded_url
        });
        
        $parent.insertAdjacentHTML(templateData.insert_position, html);
        console.log(description.description_title);
        
    })
}