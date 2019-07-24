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

const list_item_active = {
    "position": 3,
    "parent_elem_class": ".nav",
    "parent_elem_type": "ul",
    "index": false,
    "template_name": "#navbar-list-item-active",
    "insert_position": "beforeend"
};


const landing_screen = {
    "position": 4,
    "parent_elem_class": ".event-landing-container",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#landing_screen",
    "insert_position": "beforeend"
};

const odd_achievement_section_odd_achievement = {
    "position": 5,
    "parent_elem_class": ".odd1",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#odd-achievement",
    "insert_position": "beforeend"
};

const odd_achievement_section_even_achievement = {
    "position": 6,
    "parent_elem_class": ".odd1",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#even-achievement",
    "insert_position": "beforeend"
};

const even_achievement_section_even_achievement = {
    "position": 7,
    "parent_elem_class": ".even1",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#even-achievement",
    "insert_position": "beforeend"
};

const even_achievement_section_odd_achievement = {
    "position": 8,
    "parent_elem_class": ".even1",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#odd-achievement",
    "insert_position": "beforeend"
};

const contact_section_about = {
    "position": 9,
    "parent_elem_class": ".contact-section",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#contact-section-about",
    "insert_position": "afterbegin"
};

const contact_section_links = {
    "position": 10,
    "parent_elem_class": ".contact_section_links_container",
    "parent_elem_type": "ul",
    "index": false,
    "template_name": "#contact_section_link",
    "insert_position": "beforeend"
};

const where_to_find_us = {
    "position": 11,
    "parent_elem_class": ".whereToFindUs",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#where_to_find_us",
    "insert_position": "beforeend"
};

const email_us = {
    "position": 12,
    "parent_elem_class": ".emailUs",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#email_us",
    "insert_position": "beforeend"
};

const pageStructure = [
    "achievements_page",
    [navbar_logo],
    [list_item],
    [list_item_active],
    [landing_screen],
    [odd_achievement_section_odd_achievement],
    [odd_achievement_section_even_achievement],
    [even_achievement_section_even_achievement],
    [even_achievement_section_odd_achievement],
    [contact_section_about],
    [contact_section_links],
    [where_to_find_us],
    [email_us]
];

const positionNames = {
    1: "ACM Logo",
    2: "Navbar page links",
    3: "Navbar page links active",
    4: "Page landing screen",
    5: "Odd achievement section odd position",
    6: "Odd achievement section even position",
    7: "Even achievement section even position",
    8: "Even achievement section odd position",
    9: "About us",
    10: "Follow us",
    11: "Where to Find Us",
    12: "Email Us",

};
