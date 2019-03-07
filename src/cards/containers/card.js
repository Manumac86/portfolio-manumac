import React from 'react';
import CardLayout from '../components/card-layout';

class Card extends React.Component {
    render () {
        return (
            <CardLayout content={this.props}></CardLayout>
        );
    }
}
export default Card;