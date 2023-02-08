import {
  Header,
  TableOfContents,
  ScrollToTopButton,
  ExampleWrapper,
  Code,
} from './components';
import examples from './constants';

const App = () => (
  <div className='relative'>
    <div className='container flex flex-col gap-8 py-8'>
      <Header />
      <main className='flex flex-col gap-8'>
        <Code block='yarn add embla-carousel-react-component' lang='sh' />
        <TableOfContents />
        {examples.map(({ id, title, Component }) => (
          <ExampleWrapper key={id} id={id} title={title}>
            <Component />
          </ExampleWrapper>
        ))}
      </main>
      <ScrollToTopButton />
    </div>
  </div>
);

export default App;
