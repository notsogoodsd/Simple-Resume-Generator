function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const linkedin = document.getElementById('linkedin').value;
    const website = document.getElementById('website').value;
    const education = document.getElementById('Education').value;
    const experience = document.getElementById('Experience').value;
    const skills = document.getElementById('Skills').value;
    const certifications = document.getElementById('Certifications').value;
    const languages = document.getElementById('Languages').value;
    const projects = document.getElementById('Projects').value;
    const awards = document.getElementById('Awards').value;

    const resumeHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name}'s Resume</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1, h2 { color: #333; }
                p { line-height: 1.6; }
                .section { margin-bottom: 10px; }
                .download-button {
                    background-color: #007BFF;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    display: block;
                    margin: 20px auto;
                    font-size: larger;
                }
                .download-button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <div class="section">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>` : ''}
                ${website ? `<p><strong>Website:</strong> <a href="${website}">${website}</a></p>` : ''}
            </div>
            <h2>Education</h2>
            <p>${education}</p>
            <h2>Experience</h2>
            <p>${experience}</p>
            <h2>Skills</h2>
            <p>${skills}</p>
            <h2>Certifications</h2>
            <p>${certifications}</p>
            <h2>Languages</h2>
            <p>${languages}</p>
            <h2>Projects</h2>
            <p>${projects}</p>
            <h2>Awards</h2>
            <p>${awards}</p>
            <button id="downloadButton" class="download-button">Download as PDF</button>
            <script>
                document.getElementById('downloadButton').addEventListener('click', function() {
                    const element = document.body;
                    const opt = {
                        margin: 1,
                        filename: '${name}_Resume.pdf',
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2 },
                        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                    };
                    html2pdf().set(opt).from(element).save().catch(error => {
                        console.error('Error generating PDF:', error);
                        alert('Failed to download PDF. Please check console for errors.');
                    });
                });
            </script>
        </body>
        </html>
    `;

    const newTab = window.open();
    if (newTab) {
        newTab.document.write(resumeHTML);
        newTab.document.close();
    } else {
        alert('Please allow pop-ups for this site to view your resume.');
    }
}
