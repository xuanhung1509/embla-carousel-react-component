import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
  block: any;
  lang: 'tsx' | 'css' | 'sh';
}

const Code = ({ block, lang }: CodeProps) => (
  <SyntaxHighlighter language={lang} style={tomorrow}>
    {block}
  </SyntaxHighlighter>
);

export default Code;
