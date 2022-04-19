const fs = require ("fs")  // 请忽略提示，千万不要点击自动修复
const path = require ("path")

function overtype (filePath, cursorPos, content) {
	var writer = fs.createWriteStream (filePath, {flags: "r+", start: cursorPos})
	// 此函数不能用try-catch，而要用：
	writer.on ("error", function (err) {
			console.log (err)
			writer.end ()
		})
	// 但其实不做错误处理也行，因为VSCode插件系统会忽略错误继续执行
	writer.write (content, "utf8")
	writer.end ()
}

// 本函数通过切换注释实现
function toggleTokenColors (colorSet) {
	themeFilePath = path.join (__dirname, "../themes/ExtremeDark.json")  // 用__dirname获取当前模块的目录名
	if (colorSet === "OneDarkPro") {
		overtype (themeFilePath, 103, "//")
		overtype (themeFilePath, 148, "  ")
	}
	else if (colorSet === "Original") {
		overtype (themeFilePath, 103, "  ")
		overtype (themeFilePath, 148, "//")
	}
	else {
		console.log ("Name Error!")
	}
}
exports.toggleTokenColors = toggleTokenColors


// 似乎对ts文件支持不够好
// ts语法:
// import fs from "fs"
// export function func () {
// 	...
// }
