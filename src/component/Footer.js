import React from 'react';
import FilterDisplay from './filterDisplay';

const Footer = () => (
    <div>
        <hr />
        <FilterDisplay 
            display="All"
            filtertype="all"
        />
        <FilterDisplay 
            display="Completed"
            filtertype="completed"
        />
        <FilterDisplay 
            display="In Progress"
            filtertype="progress"
        />
    </div> 
)

export default Footer;