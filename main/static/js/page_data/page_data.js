const carousel_item_template = {
    "position": 1,
    "parent_elem_class": ".carousel-inner",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#carousel-item-template",
    "insert_position": "beforeend"
};

const carousel_indicator_template = {
    "position": 1,
    "parent_elem_class": ".carousel-indicators",
    "parent_elem_type": "ol",
    "index": true,
    "template_name": "#carousel-indicator-template",
    "insert_position": "beforeend"
};

const event_heading_template_1 = {
    "position": 3,
    "parent_elem_class": "#event-section-1",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-heading-template",
    "insert_position": "afterbegin"
}

const event_row_item_template_1 = {
    "position": 4,
    "parent_elem_class": "#event-row-1",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-row-entry-template",
    "insert_position": "beforeend"
}

const event_row_card_template_1 = {
    "position": 5,
    "parent_elem_class": "#event-card-row-1",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-card-template",
    "insert_position": "beforeend"
}



const pageStructure = [
    "index_page",
    [carousel_item_template, carousel_indicator_template],  // position 1
    [],
    [event_heading_template_1],
    [event_row_item_template_1],
    [event_row_card_template_1]
]

const positionNames = {
    1: "Carousel",
    2: "DunnoWhat",
    3: "Cards"
}
