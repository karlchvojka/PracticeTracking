# Nutrition Label Review 2024-06-25

## Review Purpose
This file is for Reviewing the Nutrition Label Project for FCC.

The finished version will be reviewed.

### Important things to look for:
- Code that need to be refactored
- Re-organization that needs work
- CSS that needs to be reorganized.
- The Nutrition Label project result should LOOK THE SAME.

### Todo List:
- Global:
  - #### HTML Notes:
    - Divider doesnt need to be its own element
    - Divider should be a class added to a wrapper div or section or article.
    - Divider should have sub classes (small, medium, large) that can be used as modifiers of the divider class on a wrapper. Not its own thing.
  - #### CSS Notes:
    - Major sections are seperated by a larger divider
    - minor sections have medium divider 

- H1 Heading:
  #### HTML Notes:
  - H1 is too bold
  - bold Class declaration in HTML is not needed. Make this part of the global font h1 styles.

  #### CSS Notes:
  - header h1 selector isnt needed
    - Refactor header h1 selector to be part of the global font h1 styles as this is the only h1.

- Header:
  #### HTML Notes:
    - P tags should be wrapped and styled with selectors based on that. Article?
    - Should the ptags be other elements than ptags?
  #### CSS Notes: 

- Calories-info: 
  #### HTML Notes:
  - Build a proper layout for this section
    - Left container and a span?
  - Should the 230 be a span?
  #### CSS Notes:
  - Review classes and implementation.

- Daily-value: 
  #### HTML Notes:
    - Layout for this section needs to be rebuilt
    - Daily value title is fine, and is fine on the right.
    - Initial sections have:
      - title
        - Has label text, measurement amount, and percentage amount
        - Label, and percentage are bold
      - items
        - text is not bold
        - Has label and measurement amount.
  #### CSS Notes:
    - Initial Sections:
      - Two columns:
        - Label
        - Daily value

- Vitamins and Minerals:
  #### HTML Notes:
  - Layout needs to be rebuilt
  #### CSS Notes:
  - Items are two columns