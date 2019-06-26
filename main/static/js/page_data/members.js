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

const member_page_heading = {
    "position": 4,
    "parent_elem_class": ".members-container-title",
    "parent_elem_type": "span",
    "index": false,
    "template_name": "#member-page-heading",
    "insert-position": "beforeend"
};

const member_page_subheading_1 = {
    "position": 5,
    "parent_elem_class": ".subheading-1",
    "parent_elem_type": "span",
    "index": false,
    "template_name": "#member-page-subheading",
    "insert-position": "beforeend"
};

const postholder_member = {
    "position": 6,
    "parent_elem_class": ".postholders-members-container",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#postholder-member",
    "insert-position": "beforeend"
};

const member_page_subheading_2 = {
    "position": 7,
    "parent_elem_class": ".subheading-2",
    "parent_elem_type": "span",
    "index": false,
    "template_name": "#member-page-subheading",
    "insert-position": "beforeend"
};

const core_member = {
    "position": 8,
    "parent_elem_class": ".core-team-container",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#core-member",
    "insert-position": "beforeend"
};

const contact_section_about = {
    "position": 9,
    "parent_elem_class": ".contact-section",
    "parent_elem_type": "div",
    "index": false,
    "template_name": "#contact-section-about",
    "insert_position": "beforeend"
};

const contact_section_links = {
    "position": 10,
    "parent_elem_class": ".contact_section_links_container",
    "parent_elem_type": "ul",
    "index": false,
    "template_name": "#contact_section_link",
    "insert_position": "beforeend"
};

const pageStructure = [
    "members_page",
    [navbar_logo],
    [list_item],
    [landing_screen],
    [member_page_heading],
    [member_page_subheading_1],
    [postholder_member],
    [member_page_subheading_2],
    [core_member],
    [contact_section_about],
    [contact_section_links]
];

const positionNames = {
    1: "ACM Logo",
    2: "Navbar page links",
    3: "Page landing screen",
    4: "Member page heading",
    5: "Member page subheading 1",
    6: "Postholder members",
    7: "Member page subheading 2",
    8: "Core members"
    9: "About us",
    10: "Follow us"
};