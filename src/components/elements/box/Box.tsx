import React from "react";
import styles from './Box.module.css';

export interface BoxProps {
    
}
 
export interface BoxState {
    
}
 
class Box extends React.Component<BoxProps, BoxState> {
    constructor(props: BoxProps) {
        super(props);
    }
    render() { 
        return (<div className={styles.box}><p>{this.props.children}</p></div>);
    }
}
 
export default Box;