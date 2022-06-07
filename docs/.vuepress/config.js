var CONST = require("./const");

module.exports = {
    title: 'Hello VuePress',
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
        ]
    }
}
