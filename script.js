function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('Education').value;
    const experience = document.getElementById('Experience').value;

    const resumeHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name}'s Resume</title>
            <style>
                body { font-family: Arial, sans-serif; }
                h1, h2 { color: #333; }
                p { line-height: 1.6; }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h2>Education</h2>
            <p>${education}</p>
            <h2>Experience</h2>
            <p>${experience}</p>
        </body>
        </html>
    `;

    // Open in a new tab
    const newTab = window.open();
    newTab.document.write(resumeHTML);
    newTab.document.close();
}