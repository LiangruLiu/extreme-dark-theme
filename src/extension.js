const vscode = require ("vscode")  // 请忽略提示，千万不要点击自动修复
const config = vscode.workspace.getConfiguration()
const feature = require ("./feature.js")

exports.activate = function (context) {
	context.subscriptions.push (vscode.commands.registerCommand ("extension.HiLLR", function () {
		vscode.window.showInformationMessage ("Hello, LLR!")
	}))
	feature.toggleTokenColors (config.get ("Extreme-Dark-Theme.Token Colors"))
}

exports.deactivate = function () {
}
