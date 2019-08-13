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

const carousel_indicator_template_active = {
    "position": 4,
    "parent_elem_class": ".carousel-indicators",
    "parent_elem_type": "ol",
    "index": true,
    "template_name": "#carousel-indicator-template-active",
    "insert_position": "beforeend"
};

const carousel_indicator_template = {
    "position": 5,
    "parent_elem_class": ".carousel-indicators",
    "parent_elem_type": "ol",
    "index": true,
    "template_name": "#carousel-indicator-template",
    "insert_position": "beforeend"
};

const carousel_item_template_active = {
    "position": 6,
    "parent_elem_class": ".carousel-inner",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#carousel-item-template-active",
    "insert_position": "beforeend"
};

const carousel_item_template = {
    "position": 7,
    "parent_elem_class": ".carousel-inner",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#carousel-item-template",
    "insert_position": "beforeend"
};

const mob_carousel_item_template_active = {
    "position": 8,
    "parent_elem_class": "#mobile-carousel",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#mob-carousel-item-template-active",
    "insert_position": "beforeend"
};

const mob_carousel_item_template = {
    "position": 9,
    "parent_elem_class": "#mobile-carousel",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#mob-carousel-item-template",
    "insert_position": "beforeend"
};

const about_section_title = {
    "position": 10,
    "parent_elem_class": "#about",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#section-title-template",
    "insert_position": "afterbegin"
};

const about_section = {
    "position": 11,
    "parent_elem_class": ".about",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#about-section",
    "insert_position": "beforeend"
};

const events_section_title = {
    "position": 12,
    "parent_elem_class": "#events",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#section-title-template",
    "insert_position": "afterbegin"
};

const event_item_odd = {
    "position": 13,
    "parent_elem_class": ".events-container-events",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-item-odd",
    "insert_position": "beforeend"
};

const event_item_even = {
    "position": 14,
    "parent_elem_class": ".events-container-events",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-item-even",
    "insert_position": "beforeend"
};

const sig_section_title = {
    "position": 15,
    "parent_elem_class": "#sig",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#section-title-template",
    "insert_position": "afterbegin"
};

const sig_item_odd = {
    "position": 16,
    "parent_elem_class": ".events-container-sig",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-item-odd",
    "insert_position": "beforeend"
};

const sig_item_even = {
    "position": 17,
    "parent_elem_class": ".events-container-sig",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-item-even",
    "insert_position": "beforeend"
};

const achievements_section_title = {
    "position": 18,
    "parent_elem_class": "#achievements",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#section-title-template",
    "insert_position": "afterbegin"
};

const achievement_item_odd = {
    "position": 19,
    "parent_elem_class": ".achievements",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#achievement-item-odd",
    "insert_position": "beforeend"
};

const achievement_item_even = {
    "position": 20,
    "parent_elem_class": ".achievements",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#achievement-item-even",
    "insert_position": "beforeend"
};

const contact_section_about = {
    "position": 21,
    "parent_elem_class": ".contact-section",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#contact-section-about",
    "insert_position": "afterbegin"
};

const contact_section_links = {
    "position": 22,
    "parent_elem_class": ".contact_section_links_container",
    "parent_elem_type": "ul",
    "index": false,
    "template_name": "#contact_section_link",
    "insert_position": "beforeend"
};

const where_to_find_us = {
    "position": 23,
    "parent_elem_class": ".whereToFindUs",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#where_to_find_us",
    "insert_position": "beforeend"
};

const email_us = {
    "position": 24,
    "parent_elem_class": ".emailUs",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#email_us",
    "insert_position": "beforeend"
};

const pageStructure = [
    "index_page",
    [navbar_logo],
    [list_item],
    [list_item_active],
    [carousel_indicator_template_active],
    [carousel_indicator_template],
    [carousel_item_template_active],
    [carousel_item_template],
    [mob_carousel_item_template_active],
    [mob_carousel_item_template],
    [about_section_title],
    [about_section],
    [events_section_title],
    [event_item_odd],
    [event_item_even],
    [sig_section_title],
    [sig_item_odd],
    [sig_item_even],
    [achievements_section_title],
    [achievement_item_odd],
    [achievement_item_even],
    [contact_section_about],
    [contact_section_links],
    [where_to_find_us],
    [email_us]

];

const positionNames = {
    1: "ACM Logo",
    2: "Navbar page links",
    3: "Navbar page links active",
    4: "Carousel indicator active",
    5: "Carousel indicator",
    6: "Carousel item active",
    7: "Carousel item",
    8: "Mobile carousel item active",
    9: "Mobile carousel item",
    10: "About section title",
    11: "About section",
    12: "Events section title",
    13: "Event item odd position",
    14: "Event item even position",
    15: "Sig section title",
    16: "Sig item odd position",
    17: "Sig item even position",
    18: "Achievements section title",
    19: "Achievement item odd position",
    20: "Achievement item even position",
    21: "About us",
    22: "Follow us",
    23: "Where to Find Us",
    24: "Email Us",
};
