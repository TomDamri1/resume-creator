import React from 'react';
import Page from './Page';
import Resume from '../Resume/Resume';

export default function SinglePage(props) {
  return (
    <div>
      <Page singleMode={true} id={props.id}>
        <Resume {...props}/>
      </Page>
    </div>
  )
}

