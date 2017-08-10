/// <reference types="react" />
import * as React from 'react';
export default class Connector {
    private channel;
    /**
     * Refresh all wrapped components
     */
    refresh(): void;
    /**
     * Wrap a React component class
     * @param component A React component class
     */
    wrap(component: React.ComponentClass): React.ComponentClass<{}>;
}
