// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Notification from 'grommet/components/Notification';

Notification.displayName = 'Notification';

export default class NotificationDoc extends Component {

  constructor () {
    super();
    this.state = {
      showNotification: true
    };
  }

  render () {

    let closerExample;
    if (this.state.showNotification) {
      closerExample = (
        <Example name="Closer" code={
          <Notification status='critical'
            message='Temperature threshold exceeded by 10 degrees.'
            timestamp={new Date('Mon Jan 25 2016')}
            state='Active' closer={true}
            onClose={() => this.setState({ showNotification: false })} />
        } />
      );
    }
    return (
      <DocsArticle title="Notification" colorIndex="neutral-3">

        <section>
          <p>A box to display Notification messages.</p>
          <Notification status='warning'
            message='Inconsistent configuration detected.' />
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>closer           {"true|false|{node}"}</code></dt>
            <dd>Adds a visible control to close the layer.
              If the caller provides a node, it is the caller&#39;s
              responsibility to listen to events from the node.</dd>
            <dt><code>message          {"{string}"}</code></dt>
            <dd>Message to display in the notification box.</dd>
            <dt><code>onClose          {"{function ()}"}</code></dt>
            <dd>Function that will be called when the user clicks on the
              closer control. Clicking the closer control does not automatically
              cause the Notification to be removed.
              The recipient of this callback can
              still decide whether to continue rendering the Notification
              or not.</dd>
            <dt><code>percentComplete  {"{number}"}</code></dt>
            <dd>Number to measure the progress of an ongoing notification.</dd>
            <dt><code>size             small|medium|large</code></dt>
            <dd>Size of the notification box.</dd>
            <dt><code>state            {"{string}"}</code></dt>
            <dd>State of the element on the notification message
              (e.g. Active, Running).</dd>
            <dt><code>status           {"{string}"}</code></dt>
            <dd>Status of the element on the nofitication message
              (e.g. Ok, Critical).</dd>
            <dt><code>timestamp        {"{date}"}</code></dt>
            <dd>Timestamp of the notification message.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available for Notification.</p>
        </section>

        <section>
          <h2>Examples</h2>
          <Example name="Unknown" code={
            <Notification message='Unknown Message' />
          } />
          <Example name="Warning" code={
            <Notification status='warning'
              message='Inconsistent configuration detected.'
              timestamp={new Date('Mon Jan 25 2016')}
              state='Active'
              closer={true} />
          } />
          <Example name="Critical" code={
            <Notification status='critical'
              message='Temperature threshold exceeded by 10 degrees.'
              timestamp={new Date('Mon Jan 25 2016')}
              state='Active' />
          } />
          <Example name="OK" code={
            <Notification status='ok'
              message='Updated server configuration.'
              timestamp={new Date('Mon Jan 25 2016')}
              state='Completed' />
          } />
          <Example name="Percent Complete" code={
            <Notification status='ok'
              message='Updating server profile.'
              timestamp={new Date('Mon Jan 25 2016')}
              state='Running'
              percentComplete={30} />
          } />
          {closerExample}
        </section>
      </DocsArticle>
    );
  }
};
