interface ICode {
  block: any;
  lang: 'tsx' | 'css';
}

const Code = ({ block, lang }: ICode) => (
  <pre>
    <code className={`language-${lang}`}>{block}</code>
  </pre>
);

export default Code;
