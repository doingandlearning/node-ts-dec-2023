// htmlTemplates.ts

export const homepageHTML = (shoutOutMessage: string): string => `
    <html>
        <head>
            <title>Portfolio</title>
        </head>
        <body>
            <h1>Welcome to My Portfolio</h1>
            <p>${shoutOutMessage}</p>
        </body>
    </html>
`;

export const aboutHTML = `
    <html>
        <head>
            <title>About Me</title>
        </head>
        <body>
            <h1>About Me</h1>
            <p>I have skills in Node.js, JavaScript, HTML, and CSS.</p>
        </body>
    </html>
`;

// Add more templates as needed...
