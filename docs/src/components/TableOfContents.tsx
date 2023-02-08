import examples from '../constants';

const TableOfContents = () => (
  <article>
    <h2 className='text-2xl font-bold'>Table of Contents:</h2>
    <ul className='mt-4 grid list-inside list-disc grid-cols-2 gap-3 pl-4 font-semibold text-slate-500'>
      {examples.map(({ id, title }) => (
        <li key={id}>
          <a href={`#${id}`}>{title}</a>
        </li>
      ))}
    </ul>
  </article>
);

export default TableOfContents;
