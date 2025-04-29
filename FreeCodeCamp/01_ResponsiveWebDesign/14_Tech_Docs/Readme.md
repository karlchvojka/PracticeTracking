# Project Requirements

## Todos

- [x] Main element
  - [x] ID of "main-doc"
- [x] "several" section elements
  - [x] Each with class "main-section" (min = 5)
- [x] First element within each section is a header element
  - [x] Each header should have text describing topic
- [x] Each .main-section should have ID that corresponds with header
- [x] .main-section elements should contain atleast 10 p elemets total
- [x] .main-section elements should contain atleast 5 code elements total
- [x] .main-section elements should contain atleast 5 li items total.
- [x] nav element with a id of navbar
- [x] navbar should contain one header element with text that desc topic
- [x] navbar should contain a elements with:
  - [x] class of nav-link
  - [x] should be one for every .main-section
- [x] #navbar header comes before any link element
- [x] .nav-link should
  - [x] contain text that = header text within the section
- [x] When you click on navbar element
  - [x] page should navigate to that section
- [] Navbar should have multiple sizes
  - [] regular sized devices (laptops, desktop):
    - [] #navbar should be on left side always visible.
- [] Should use at least one mediaquery

## User Stories

1. You can see a main element with a corresponding id="main-doc", which contains the page's main content (technical documentation)
2. Within the #main-doc element, you can see several section elements, each with a class of main-section. There should be a minimum of five
3. The first element within each .main-section should be a header element, which contains text that describes the topic of that section.
4. Each section element with the class of main-section should also have an id that corresponds with the text of each header contained within it. Any spaces should be replaced with underscores (e.g. The section that contains the header "JavaScript and Java" should have a corresponding id="JavaScript_and_Java")
5. The .main-section elements should contain at least ten p elements total (not each)
6. The .main-section elements should contain at least five code elements total (not each)
7. The .main-section elements should contain at least five li items total (not each)
8. You can see a nav element with a corresponding id="navbar"
9. The navbar element should contain one header element which contains text that describes the topic of the technical documentation
10. Additionally, the navbar should contain link (a) elements with the class of nav-link. There should be one for every element with the class main-section
11. The header element in the #navbar must come before any link (a) elements in the navbar
12. Each element with the class of nav-link should contain text that corresponds to the header text within each section (e.g. if you have a "Hello world" section/header, your navbar should have an element which contains the text "Hello world")
13. When you click on a navbar element, the page should navigate to the corresponding section of the #main-doc element (e.g. If you click on a .nav-link element that contains the text "Hello world", the page navigates to a section element with that id, and contains the corresponding header)
14. On regular sized devices (laptops, desktops), the element with id="navbar" should be shown on the left side of the screen and should always be visible to the user
15. Your technical documentation should use at least one media query
