import * as React from 'react'
import Channel from '@mcrowe/channel'


export default class Connector {

  private channel = new Channel<undefined>()

  /**
   * Refresh all wrapped components
   */
  refresh() {
    this.channel.publish(undefined)
  }

  /**
   * Wrap a React component class
   * @param component A React component class
   */
  wrap(component: React.ComponentClass): React.ComponentClass<{}> {
    const { channel } = this

    return class WrappedComponent extends React.Component<{}, {}> {

      componentWillMount() {
        channel.subscribe(() => {
          this.forceUpdate()
        })
      }

      render() {
        return React.createElement(component, {})
      }
    }
  }

}