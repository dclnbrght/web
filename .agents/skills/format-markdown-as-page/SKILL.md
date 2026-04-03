---
name: format-markdown-as-page
description: Format a markdown document for an 11ty project, including front-matter and page elements.
---

Ask the user if they want to create a new page or format an existing one. If they want to create a new page, ask for a file name. If they want to format an existing page, ask for the file path of the markdown document, if not already provided.

Use the page-template.md as a reference for the structure and formatting of the markdown document. Make sure to include any necessary front-matter at the top of the document, followed by the content formatted according to the user's specifications. Remove all the double square brackets and replace the placeholders with the actual content provided by the user.

DO NOT change the content of the markdown document, only format it according to the page-template.md structure. Ensure that the final output is a well-formatted markdown document ready to be used in an 11ty project.