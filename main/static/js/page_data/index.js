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

const carousel_indicator_template_active = {
    "position": 3,
    "parent_elem_class": ".carousel-indicators",
    "parent_elem_type": "ol",
    "index": true,
    "template_name": "#carousel-indicator-template-active",
    "insert_position": "beforeend"
};

const carousel_indicator_template = {
    "position": 4,
    "parent_elem_class": ".carousel-indicators",
    "parent_elem_type": "ol",
    "index": true,
    "template_name": "#carousel-indicator-template",
    "insert_position": "beforeend"
};

const carousel_item_template_active = {
    "position": 5,
    "parent_elem_class": ".carousel-inner",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#carousel-item-template-active",
    "insert_position": "beforeend"
};

const carousel_item_template = {
    "position": 6,
    "parent_elem_class": ".carousel-inner",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#carousel-item-template",
    "insert_position": "beforeend"
};

const mob_carousel_item_template_active = {
    "position": 7,
    "parent_elem_class": "#mobile-carousel",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#mob-carousel-item-template-active",
    "insert_position": "beforeend"
};

const mob_carousel_item_template = {
    "position": 8,
    "parent_elem_class": "#mobile-carousel",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#mob-carousel-item-template",
    "insert_position": "beforeend"
};

const about_section_title = {
    "position": 9,
    "parent_elem_class": "#about",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#section-title-template",
    "insert_position": "afterbegin"
};

const about_section = {
    "position": 10,
    "parent_elem_class": ".about",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#about-section",
    "insert_position": "beforeend"
};

const events_section_title = {
    "position": 11,
    "parent_elem_class": "#events",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#section-title-template",
    "insert_position": "afterbegin"
};

const event_item_odd = {
    "position": 12,
    "parent_elem_class": ".events-container-events",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-item-odd",
    "insert_position": "beforeend"
};

const event_item_even = {
    "position": 13,
    "parent_elem_class": ".events-container-events",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-item-even",
    "insert_position": "beforeend"
};

const sig_section_title = {
    "position": 14,
    "parent_elem_class": "#sig",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#section-title-template",
    "insert_position": "afterbegin"
};

const sig_item_odd = {
    "position": 15,
    "parent_elem_class": ".events-container-sig",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-item-odd",
    "insert_position": "beforeend"
};

const sig_item_even = {
    "position": 16,
    "parent_elem_class": ".events-container-sig",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#event-item-even",
    "insert_position": "beforeend"
};

const achievements_section_title = {
    "position": 17,
    "parent_elem_class": "#achievements",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#section-title-template",
    "insert_position": "afterbegin"
};

const achievement_item_odd = {
    "position": 18,
    "parent_elem_class": ".achievements",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#achievement-item-odd",
    "insert_position": "beforeend"
};

const achievement_item_even = {
    "position": 19,
    "parent_elem_class": ".achievements",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#achievement-item-even",
    "insert_position": "beforeend"
};

const contact_section_about = {
    "position": 20,
    "parent_elem_class": ".contact-section",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#contact-section-about",
    "insert_position": "beforeend"
};

const contact_section_links = {
    "position": 21,
    "parent_elem_class": ".contact_section_links_container",
    "parent_elem_type": "ul",
    "index": false,
    "template_name": "#contact_section_link",
    "insert_position": "beforeend"
};

const pageStructure = [
    "index_page",
    [navbar_logo],
    [list_item],
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

];

const positionNames = {
    1: "ACM Logo",
    2: "Navbar page links",
    3: "Carousel indicator active",
    4: "Carousel indicator",
    5: "Carousel item active",
    6: "Carousel item"
    7: "Mobile carousel item active"
    8: "Mobile carousel item"
    9: "About section title"
    10: "About section"
    11: "Events section title"
    12: "Event item odd position"
    13: "Event item even position"
    14: "Sig section title"
    15: "Sig item odd position"
    16: "Sig item even position"
    17: "Achievements section title"
    18: "Achievement item odd position"
    19: "Achievement item even position"
    20: "About us",
    21: "Follow us"
};