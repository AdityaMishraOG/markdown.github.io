// Fetch and convert the Markdown content to HTML
fetch('index.md')
    .then(response => response.text())
    .then(markdown => {
        // Use Showdown.js to convert Markdown to HTML
        const converter = new showdown.Converter();
        const html = converter.makeHtml(markdown);

        // Set the HTML content in the respective elements
        document.getElementById('markdown-content').innerHTML = html;

        // Set the title from the first heading in the Markdown content
        const titleMatch = markdown.match(/^#\s+(.*)/m);
        document.getElementById('markdown-title').innerText = titleMatch ? titleMatch[1] : "My Markdown Website";
    })
    .catch(error => console.error('Error fetching Markdown:', error));
