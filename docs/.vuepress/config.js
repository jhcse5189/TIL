var CONST = require("./const");

module.exports = {
    title: 'Hello VuePress',
    description: 'Github TIL Pages',
    base: "/TIL/",
    dest: 'build',
    themeConfig: {
        sidebar: [
            {
                title: 'Algorithm',
                children: CONST.AlgorithmList
            },
            {
                title: 'JavaScript',
                children: CONST.JavaScriptList
            }
        ]
    }
}
