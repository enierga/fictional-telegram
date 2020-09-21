import App, { Container } from 'next/app';

class myApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Component></Component>
      </Container>
    );
  }
}

export default myApp;