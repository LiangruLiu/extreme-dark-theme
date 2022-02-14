const vscode = require('vscode');
const configuration = vscode.workspace.getConfiguration();
const data = require('../themes/DARK1.json');

exports.activate = function (context) {
    console.log('您的扩展已被激活！');
    // 注册命令
    context.subscriptions.push(vscode.commands.registerCommand('extension.HiLLR', function () {
        vscode.window.showInformationMessage('Hi!');
    }));
    if (configuration.get('Ext Dark.colorTheme') == "odp") vscode.window.showInformationMessage('odp');
    vscode.window.showInformationMessage(data.type);
};

exports.deactivate = function () {
    console.log('您的扩展已被释放！')
};
