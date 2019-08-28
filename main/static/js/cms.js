// xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
document.onload = loadCMS();
let csrf = document.getElementById("csrf").innerHTML;

function loadCMS() {

    let data = $.ajax({
        type: 'GET',
        url: `/api/get_cms_permission_data`,
        data: {},
        success: function (data) {
            let len = data.fixed_fields.length;

            for (let i = 0; i < len; i++) {

                let sideNavEle = document.createElement('div');
                sideNavEle.className = 'sidenav-entries';
                let sidebar = document.getElementsByClassName('side-bar')[0];

                sideNavEle.innerHTML = data.fixed_fields[i][0];
                sidebar.appendChild(sideNavEle);

                sideNavEle.addEventListener('click', () => {
                    let cmsdata = data.fixed_fields[i];
                    getData(cmsdata);
                });
            }
        }
    });
}

function getData(data) {
    console.log(data);
    let len = data[1].length;
    for (let i = 0; i < len; i++) {
        let tabContainer = document.querySelectorAll(".existing-tab")[0];
        let tab = document.createElement("span");
        let tabName = document.createTextNode(data[1][i][0]);

        tab.addEventListener('click', () => {
            document.getElementById('add-button').style.display = 'block';
            if (data[1][i][2]) {
                $('#add-button').on('click', function () {
                    createAddAccordion(data[1][i][2], data[1][i][1]);
                });
            }
            getAccordion(data[1][i][1]);
        });
        tab.appendChild(tabName);
        tabContainer.appendChild(tab);
    }
}

function getAccordion(url) {
    let data = $.ajax({
        type: 'GET',
        url: url,
        data: {},
        success: function (data) {
            console.log(url);
            let accordionContainer = document.querySelectorAll("#cms-main")[0];
            accordionContainer.innerHTML = "";
            let len = data.length;
            if (data instanceof Array) {
                for (let i = 0; i < len; i++) {
                    createAccordion(data[i].accordion_name, i, data[i].form_fields, data[i].api_endpoint, data[i], url);
                }
            } else {
                createAccordion(data.accordion_name, 0, data.form_fields, data.api_endpoint, data, url);
            }
        }
    });
}



// YIKES.
function createAccordion(accData, accordionIndex, url) {

    var upload_url = accData.media_upload_url;

    let accordionContainer = document.querySelectorAll("#cms-main")[0];
    let accordionTab = document.createElement("div");
    accordionTab.className = "accordion";
    let accordionTabName = document.createTextNode(accData.accordion_name);
    accordionTab.appendChild(accordionTabName);


    let accordionControl = document.createElement('div');
    let deleteEle = document.createElement("span");
    // deleteEle.innerHTML = 'Delete'
    deleteEle.className = 'glyphicon glyphicon-trash';
    deleteEle.addEventListener('click', (e) => {
        deleteAccordion(e, accData.api_endpoint, url);
    });
    accordionControl.appendChild(deleteEle);
    accordionControl.className += 'accordionControl';

    let plusSign = document.createElement("span");
    plusSign.className = 'accordion-plus-sign';
    let plusText = document.createTextNode("+");
    plusSign.appendChild(plusText);
    accordionControl.appendChild(plusSign);


    accordionTab.appendChild(accordionControl);
    accordionTab.addEventListener('click', () => {
        openAccordion(accordionIndex);
    })
    accordionContainer.appendChild(accordionTab);

    const formFields = accData.form_fields;
    let formPanel = document.createElement("div");
    formPanel.className = "panel";
    for (let i = 0; i < formFields.length; i++) {
        let formRow = document.createElement("div");
        formRow.className += 'form-group';
        let label = document.createElement('label');
        let fieldName = document.createTextNode(formFields[i][0]);
        label.appendChild(fieldName);
        formRow.appendChild(label);

        if (formFields[i][1] == "text") {
            let fieldEditor = document.createElement("input");
            fieldEditor.setAttribute("type", formFields[i][1]);
            fieldEditor.setAttribute("value", accData[formFields[i][0]]);
            fieldEditor.className += 'form-control';
            formRow.appendChild(fieldEditor);

        } else if (formFields[i][1] == "textarea") {
            let fieldEditor = document.createElement(formFields[i][1]);
            fieldEditor.innerHTML = accData[formFields[i][0]];
            fieldEditor.className += 'form-control form-control-lg';
            fieldEditor.rows = "5";
            formRow.style.width = '100%';
            formRow.appendChild(fieldEditor);

        } else if (formFields[i][1] == "file") {
            let fieldEditor = document.createElement("input");
            fieldEditor.setAttribute("type", formFields[i][1]);
            fieldEditor.setAttribute("value", accData[formFields[i][0]]);
            fieldEditor.className += 'form-control';
            formRow.appendChild(fieldEditor);
        }
        formPanel.appendChild(formRow);
    }
    let submitButton = document.createElement("button");
    submitButton.className += 'btn btn-primary';

    submitButton.appendChild(document.createTextNode("Submit"));
    formPanel.appendChild(submitButton);
    accordionContainer.appendChild(formPanel);
    document.querySelectorAll(".panel > button")[accordionIndex].addEventListener("click", function () {
        let accordionForm = document.querySelectorAll(".panel > div > input");
        var currentField = document.querySelectorAll(".panel > button")[accordionIndex];
        var formData = new FormData;

        /*
            Populating the formData 'object' here, programatically
        */
        let flen = formFields.length;
        for (let i = 0; i < flen; i++) {
            currentField = currentField.previousElementSibling;

            if (currentField.lastChild.type == "text") {
                formData.append(formFields[flen - i - 1][0], currentField.lastChild.value);

            } else if (currentField.lastChild.type == 'textarea') {
                formData.append(formFields[flen - i - 1][0], $(currentField.lastChild).val());

            } else if (currentField.lastChild.type == "file") {
                const imageFile = currentField.lastChild.files[0];
                if (imageFile) {
                    formData.append("description_image", currentField.lastChild.files[0]);
                }

            } else {
                formData.append(formFields[flen - i - 1][0], currentField.lastChild.innerHTML);
            }
        }
        // Send data to the UPDATE endpoint of the object (description/proftab) in question.
        fetch(accData.api_endpoint, {
            method: 'PUT',
            headers: {
                "X-CSRFToken": csrf
            },
            body: formData
        }).then((response) => {
            alert('done');
        })

        
    });
}

let isMenuOpen = false;

function menuToggle() {
    if (isMenuOpen) {
        document.querySelectorAll(".side-bar")[0].style.transform = "translate(-105%)";
        document.querySelectorAll(".ham-menu")[0].style.transform = "rotate(-360deg)";
        isMenuOpen = false;
    } else {
        document.querySelectorAll(".side-bar")[0].style.transform = "translate(0)";
        document.querySelectorAll(".ham-menu")[0].style.transform = "rotate(0)";
        isMenuOpen = true;
    }
}


function openAccordion(count) {
    if (document.querySelectorAll(".panel")[count].style.display == "flex") {
        document.querySelectorAll(".accordion .accordion-plus-sign")[count].innerHTML = "+";
        document.querySelectorAll(".panel")[count].style.display = "none";
    } else {
        document.querySelectorAll(".accordion .accordion-plus-sign")[count].innerHTML = "-";
        document.querySelectorAll(".panel")[count].style.display = "flex";
    }
}

function closeAccordion(count) {
    document.querySelectorAll(".accordion .accordion-plus-sign")[count].innerHTML = "+";
    document.querySelectorAll(".panel")[count].style.display = "none";
}

function deleteAccordion(e, api_endpoint, url) {
    $.ajax({
        type: 'DELETE',
        url: api_endpoint,
        headers: {
            "X-CSRFToken": csrf
        },
        success: function () {
            alert('Deleted Successfully');
            // getAccordion(url);
            makeAccordions(url);
        }
    });
}

function createAddAccordion(data, url) {

    let formContainer = document.getElementById('cms-main');
    $(formContainer).empty();

    let formPanel = document.createElement("div");
    let formFields = data;
    formPanel.className = "panel";
    formPanel.style.display = 'flex';
    for (let i = 0; i < formFields.length; i++) {
        let formRow = document.createElement("div");
        formRow.className += 'form-group';
        let label = document.createElement('label');
        let fieldName = document.createTextNode(formFields[i][0] + ": ");
        label.appendChild(fieldName);
        formRow.appendChild(label);
        
        if (formFields[i][1] == "text") {
            let fieldEditor = document.createElement("input");
            fieldEditor.setAttribute("type", formFields[i][1]);
            fieldEditor.setAttribute("value", '');
            fieldEditor.className += 'form-control';
            formRow.appendChild(fieldEditor);
        } else if (formFields[i][1] == "textarea") {
            let fieldEditor = document.createElement(formFields[i][1]);
            fieldEditor.innerHTML = '';
            fieldEditor.className += 'form-control form-control-lg';
            fieldEditor.rows = "5";
            formRow.style.width = '100%';
            formRow.appendChild(fieldEditor);
        } else if (formFields[i][1] == "file") {
            let fieldEditor = document.createElement("input");
            fieldEditor.setAttribute("type", formFields[i][1]);
            fieldEditor.setAttribute("value", '');
            fieldEditor.className += 'form-control';
            formRow.appendChild(fieldEditor);
        }
        formPanel.appendChild(formRow);
    }

    let submitButton = document.createElement("button");
    submitButton.className += 'btn btn-primary';
    submitButton.appendChild(document.createTextNode("Submit"));
    formPanel.appendChild(submitButton);
    formContainer.appendChild(formPanel);

    submitButton.addEventListener('click', function () {

        let currentField = submitButton;
        var currentData = new Object;
        let flen = formFields.length;
        for (let i = 0; i < flen; i++) {
            currentField = currentField.previousElementSibling;
            if (currentField.lastChild.type == "text" || currentField.lastChild.type == "file") {
                currentData[formFields[flen - i - 1][0]] = currentField.lastChild.value;
            } else if (currentField.lastChild.type == 'textarea') {
                currentData[formFields[flen - i - 1][0]] = $(currentField.lastChild).val();
            } else {
                currentData[formFields[flen - i - 1][0]] = currentField.lastChild.innerHTML;
            }
        }

        var json_data = JSON.stringify(currentData);
        console.log(JSON.parse(JSON.stringify(currentData)));
        let data = $.ajax({
            type: 'POST',
            url: url,
            data: currentData,
            headers: {
                "X-CSRFToken": csrf
            },
            dataType: 'json',
            success: function (data) {
                alert("Content added");
            }
        });
    });


}