# Printable CV

`cv.html` is the A4 print layout (English and Vietnamese, chosen with `?lang=vi`).
Rebuild both PDFs after editing:

    node cv/build-pdf.js

Outputs private PDFs (with phone) here in `cv/`, and public PDFs (no phone)
in `files/`, which the website's "download cv" button links to. This folder is
blocked from the public site in `netlify.toml` because it includes the phone number.
