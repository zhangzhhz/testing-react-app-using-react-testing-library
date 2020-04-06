import React from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';

const About = () => <h1 data-testid='about-page'>About page</h1>;

const Home = () => <h1 data-testid='home-page'>Home page</h1>;

const Contact = (props) => {
  const { name } = useParams();
  // const name  = props.match.params.name;
  return <h1 data-testid='contact-name'>{name}</h1>
};

const TestRouter = () => {
  const name = 'John Doe';
  return (
    <>
      <nav data-testid='navbar'>
        <Link data-testid='home-link' to='/'>Home</Link>
        <Link data-testid='about-link' to='/about'>About</Link>
        <Link data-testid='contact-link' to={`/contact/${name}`}>Contact</Link>
      </nav>
      <Switch>
        {/* Note that the order of routes matters unless no route starts with the same path. */}
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact/:name' component={Contact} />
      </Switch>
    </>
  );
};

export default TestRouter;