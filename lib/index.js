"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const channel_1 = require("@mcrowe/channel");
class Connector {
    constructor() {
        this.channel = new channel_1.default();
    }
    /**
     * Refresh all wrapped components
     */
    refresh() {
        this.channel.publish(undefined);
    }
    /**
     * Wrap a React component class
     * @param component A React component class
     */
    wrap(component) {
        const { channel } = this;
        return class WrappedComponent extends React.Component {
            componentWillMount() {
                channel.subscribe(() => {
                    this.forceUpdate();
                });
            }
            render() {
                return React.createElement(component, {});
            }
        };
    }
}
exports.default = Connector;
