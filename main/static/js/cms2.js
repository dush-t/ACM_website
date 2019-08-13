const positions = positionNames; // from page_data file.

descriptionFormFields = [
    ['title', 'text'],
    ['content', 'textarea'],
    ['read_more', 'textarea'],
    ['image', 'file'],
    ['embedded_url', 'text']
]

const newDescriptionTemplate = {
    description_title: "New Description",
    description_content: "Content",
    description_readmore: "Read More",
    embedded_url: "Embedded_url"
}

postDataTypes = {
    description: {
        position: null,
        page_url: null
    }
}

//GET_DATA_FROM_ENDPOINT
const fetchData = async (endpoint) => {
    let response = await fetch(endpoint);
    let data = await response.json();
    return data;
}

const postData = async (endpoint, data) => {
    let response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrf
        },
        body: JSON.stringify(data)
    });
    let responseData = await response.json();
    return responseData;
}


fetchData("/api/get_page_list")
    .then(async (data) => {
        const pages = data.pages
        const len = pages.length;
        for(let i=0; i < len; i++) {

            console.log(data)
            let sideNavEle = document.createElement('div');
            sideNavEle.className = 'sidenav-entries';
            let sidebar = document.getElementsByClassName('side-bar')[0];
            sideNavEle.innerHTML = pages[i].id;
            sidebar.appendChild(sideNavEle);

            sideNavEle.addEventListener("click", () => {
                getTabs(pages[i].des_endpoint);
            });
        }
    });


// SET UP THE TABS
const getTabs = async (des_endpoint) => {
    const tabContainer = document.querySelector(".existing-tab");
    tabContainer.innerHTML = "";
    let len = Object.keys(positions).length;
    for (let i = 1; i <= len; i++) {

        // CREATE TAB ELEMENTS
        let tab = document.createElement("span");
        const tabName = document.createTextNode(positions[i.toString()])
        tab.appendChild(tabName);
        tabContainer.appendChild(tab); 

        //SHOW ACCORDIONS WHEN TAB IS CLICKED
        tab.addEventListener("click", () => {
            makeAccordions(des_endpoint + "/" + i.toString(), i);
            configureAddBtn(i, descriptionFormFields, des_endpoint, "description")
        })

    }
}

const configureAddBtn = (des_position, formFields, endpoint, type) => {
    addBtn = document.querySelector('#add-button');
    addBtn.style.display = 'block';

    // PICKING UP CODE FROM cms.js. I don't want an SMS-type front-end bug here.
    $('#add-button').off('click');
    $('#add-button').on('click', function () {
        // createAddAccordion(formFields, endpoint+`/${des_position}`);
        postData(endpoint+`/${des_position}`, {
            ...newDescriptionTemplate
        });
        makeAccordions(endpoint+`/${des_position}`, des_position);
    });
}


const makeAccordions = async (endpoint, position=null) => {
    fetchData(endpoint)
        .then(async (data) => {
            const accordionContainer = document.querySelector('#cms-main');
            accordionContainer.innerHTML = "";
            const len = data.length;
            if (data instanceof Array) {
                for (let i = 0; i < len; i++) {
                    createAccordion(data[i], i, endpoint);
                } 
            } else {
                createAccordion(data[i], 0, endpoint);
            }
        });
}