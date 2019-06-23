const positions = positionNames; // from page_data file.

//GET_DATA_FROM_ENDPOINT
const fetchData = async (endpoint) => {
    let response = await fetch(endpoint);
    let data = await response.json();
    return data;
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

const getTabs = async (des_endpoint) => {
    const tabContainer = document.querySelector(".existing-tab");
    let len = Object.keys(positions).length;
    for (let i = 1; i <= len; i++) {

        // CREATE TAB ELEMENTS
        let tab = document.createElement("span");
        const tabName = document.createTextNode(positions[i.toString()])
        tab.appendChild(tabName);
        tabContainer.appendChild(tab); 

        //SHOW ACCORDIONS WHEN TAB IS CLICKED
        tab.addEventListener("click", () => {
            console.log("lolmao" + i)
        })

    }
}










































