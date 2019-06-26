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

const odd_achievement_section = {
    "position": 4,
    "parent_elem_class": ".achievement-section-container",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#odd-achievement-section",
    "insert-position": "beforeend"
};

const even_achievement_section = {
    "position": 5,
    "parent_elem_class": ".achievement-section-container",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#even-achievement-section",
    "insert-position": "beforeend"
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
    "achievements_page",
    [navbar_logo],
    [list_item],
    [landing_screen],
    [odd_achievement_section],
    [even_achievement_section],
    [contact_section_about],
    [contact_section_links]
];

const positionNames = {
    1: "ACM Logo",
    2: "Navbar page links",
    3: "Page landing screen",
    4: "Achievement section odd position",
    5: "Achievement section even position",
    6: "About us",
    7: "Follow us"
};