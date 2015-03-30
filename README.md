ANP-GULP HELPERS
================

A set of gulp helpers that are relevant only with a specific project setup. In other words, not very useful for most developers.

# Usage
Place the snippet below in your gulpfile to make all tasks available to you at your CLI.

```javascript
require('anp-gulp');

global.MODULE_PKG = require('./package.json');

/** IF YOU NEED SPECIFIC GULP TASKS, DEFINE THEM HERE **/
```
