import examples from '../constants';

const TableOfContents = () => (
  <article className=''>
    <h2 className='text-2xl font-bold'>Table of Contents:</h2>
    <ul className='mt-4 flex list-inside list-disc flex-col gap-3 pl-4 font-semibold text-slate-500'>
      {examples.map(({ url, title }) => (
        <li key={url}>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  </article>
);

export default TableOfContents;
