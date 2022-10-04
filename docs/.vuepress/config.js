var CONST = require("./const");

module.exports = {
    title: 'Today Bammer Learned',
    description: 'Github TIL Pages',
    base: "/TIL/",
    dest: 'build',
    themeConfig: {
        sidebar: [
			{
				title: 'MIL',
				children: CONST.MILList
			},
            {
                title: 'Algorithm',
                children: CONST.AlgorithmList
            },
			{
				title: 'Data Structure',
				children: CONST.DataStructureList
			},
			{
				title: 'Web',
				childrend: CONST.WebList
			},
			{
				title: 'Boolean Algebra',
				children: CONST.BooleanAlgebraList
			},
            {
                title: 'JavaScript',
                children: CONST.JavaScriptList
            },
			{
				title: 'Linux',
				children: CONST.LinuxList
			},
			{
				title: 'C++',
				children: CONST.CppList
			}
        ],
		nav: [
			{
				text: 'GitHub',
				link: 'https://github.com/jhcse5189/'
			},
			{
				text: 'Blog',
				link: 'https://jhcse5189.github.io/'
			}
		]
    },
}
