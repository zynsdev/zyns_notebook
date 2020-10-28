const hljs = require('highlight.js') 
const mdContainer= require('markdown-it-container')
const md = require('markdown-it')({
        highlight: highlight
    })
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
    .use(require('markdown-it-emoji'))
    .use(mdContainer, 'tip')
    .use(mdContainer, 'info')
    .use(mdContainer, 'danger')
    .use(mdContainer, 'warnning')

function highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)){
        try {
            return `<pre className="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`
        } catch (__) {}
    }
}

export default md;