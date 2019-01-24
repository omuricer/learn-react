import React, { Component } from 'react';
import ContentChild from './Content/ContentChild';

export default class Content extends Component {
  render() {
    const user = {
      name: "Sho Inada",
      hobbies: ["サボテン", "sleep"]
    }
    return (
      <div>
          <h1>Content</h1>
          <ContentChild name={"Jack"} age={32} user={user}>
            <h1>I am a child.</h1>
          </ContentChild>
      </div>
    );
  }
}
