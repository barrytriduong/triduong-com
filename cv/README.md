# Printable CV

`cv.html` is the A4 print layout (English and Vietnamese, chosen with `?lang=vi`).
Rebuild both PDFs after editing:

    node cv/build-pdf.js

Outputs `Duong_Minh_Tri_CV.pdf` and `Duong_Minh_Tri_CV_VI.pdf`. This folder is
blocked from the public site in `netlify.toml` because it includes the phone number.
