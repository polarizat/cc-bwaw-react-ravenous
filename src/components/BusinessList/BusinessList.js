import React from "react";
import './BusinessList.css';
import { Business } from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.business.map(business => {
                        return <Business business={business}/>
                    })
                };
            </div>
        );
    }
}

export { BusinessList };