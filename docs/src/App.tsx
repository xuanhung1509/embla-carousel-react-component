import {
  Header,
  TableOfContents,
  Footer,
  ScrollToTopButton,
  ExampleWrapper,
} from './components';
import examples from './constants';

const App = () => (
  <div className='relative'>
    <div className='container mx-auto flex flex-col gap-8 py-8 px-4'>
      <Header />
      <main className='flex flex-col gap-8'>
        <TableOfContents />
        {examples.map(({ id, title, Component }) => (
          <ExampleWrapper id={id} title={title}>
            <Component />
          </ExampleWrapper>
        ))}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  </div>
);

export default App;
