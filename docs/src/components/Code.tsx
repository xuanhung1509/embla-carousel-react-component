interface CodeProps {
  block: any;
  lang: 'tsx' | 'css';
}

const Code = ({ block, lang }: CodeProps) => (
  <pre>
    <code className={`language-${lang}`}>{block}</code>
  </pre>
);

export default Code;
