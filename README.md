# MarioServer

Mario.js is trying to be a very small implementation of [Mustache](https://mustache.github.io/)
in JavaScript. Small to download, fast to render. One of the options for
a lighter download is that templates are compiled down into json that
can be consumed by Mario on the client. This is that compilation on the
server module.

## Usage

This is a package for node, and it is just hanging out in my github
repositories right now.

Install via:

   npm install --save git+https://github.com/baccigalupi/mario-server.git

Although written for node, the shortcut of creating syncronous file
interactions was taken.

    const templateDirectory = 'path/to/where/you/keep/your/templates';
    const MarioServer = require('mario-server');

    let compiler = MarioServer(templateDirectory);
    let parsedContent = compiler.parse();
    // You can use the parsedContent directly to insert templates into
    // your build. - Or - you can export js to a file

    const destination = 'path/to/where/you/want/a/file/template.js';
    compiler.export(destination);
    // File will be written creating a global variable `MarioTemplates`.
