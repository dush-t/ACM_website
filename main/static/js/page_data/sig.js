const navbar_logo = {
    "position": 1,
    "parent_elem_class": ".navbar-brand",
    "parent_elem_type": "a",
    "index": false,
    "template_name": "#brand-logo",
    "insert_position": "beforeend"
};

const list_item = {
    "position": 2,
    "parent_elem_class": ".nav",
    "parent_elem_type": "ul",
    "index": false,
    "template_name": "#navbar-list-item",
    "insert_position": "beforeend"
};

const landing_screen = {
    "position": 3,
    "parent_elem_class": ".event-landing-container",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#landing_screen",
    "insert-position": "beforeend"
};

const event_section_even_template = {
    "position": 4,
    "parent_elem_class": ".sig-section-container",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-section-odd-parent",
    "insert_position": "beforeend"
};

const event_section_odd_template = {
    "position": 5,
    "parent_elem_class": ".sig-section-container",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-section-even-parent",
    "insert_position": "beforeend"
};

const contact_section_about = {
    "position": 6,
    "parent_elem_class": ".contact-section",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#contact-section-about",
    "insert_position": "beforeend"
};

const contact_section_links = {
    "position": 7,
    "parent_elem_class": ".contact_section_links_container",
    "parent_elem_type": "ul",
    "index": false,
    "template_name": "#contact_section_link",
    "insert_position": "beforeend"
};

const pageStructure = [
    "sig_page",
    [navbar_logo],
    [list_item],
    [landing_screen],
    [event_section_even_template],
    [event_section_odd_template],
    [contact_section_about],
    [contact_section_links]
];

const positionNames = {
    1: "ACM Logo",
    2: "Navbar page links",
    3: "Page landing screen",
    4: "Event section odd position",
    5: "Event section even position",
    6: "About us",
    7: "Follow us"
};