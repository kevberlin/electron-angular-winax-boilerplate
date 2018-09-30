import * as winax from 'winax';

export function openWord() {
  console.log('Opening Word...');
  const wordApp = new winax.Object('Word.Application');
  wordApp.Documents.Open('');
  wordApp.Visible = true;
}
