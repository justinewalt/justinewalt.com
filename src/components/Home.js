import React from 'react';
import { connect } from 'react-redux';
import { Header, Container, Image, Divider } from 'semantic-ui-react';

const About = ({ username }) => (
  <Container text>
    {/* <Image src={JL_Logo} centered size='medium' /> */}
    <Divider />
    <Header as="h2" textAlign='center'>Welcome to JustinEwalt.com</Header>
    <Divider />
      <p>
        What up?
      </p>
      <p>
        This is my site.
      </p>
      <Divider />
  </Container>
)

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(About);
