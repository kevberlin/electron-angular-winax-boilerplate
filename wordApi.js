"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winax = require("winax");
function openWord() {
    console.log('Opening Word...');
    var wordApp = new winax.Object('Word.Application');
    wordApp.Documents.Open('');
    wordApp.Visible = true;
}
exports.openWord = openWord;
//# sourceMappingURL=wordApi.js.map