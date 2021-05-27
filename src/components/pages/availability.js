import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderImage from '../headerImage';
import ContentImgDetails from '../contentImgDetails';

class Availability extends Component {
    render() {
        return (
            <div className="availability-container">
                <HeaderImage 
                    className="availablity"
                    img="http://via.placeholder.com/1000x1000" 
                    height="480px"
                    title="Availability"
                />

                <div className="availability-details-wrapper">
                    <div className="details-content">
                        <p className="details-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, deserunt distinctio sint consequuntur tempora repellendus sunt natus quos non, harum numquam ullam quam aliquam sequi perspiciatis sed corporis necessitatibus quisquam consectetur labore rem quibusdam. Fugit culpa veritatis quasi!</p>

                        <p className="details-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus architecto non aliquid iure, veniam tempora magnam voluptates commodi sapiente repudiandae exercitationem, distinctio laudantium eius nesciunt fugit. Vitae facilis magnam animi voluptatibus. Debitis saepe et architecto veritatis eos sed eligendi cumque ut placeat, facilis quo atque ratione alias, nesciunt iure.</p>

                        <p className="details-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellendus natus minima amet distinctio a animi, eum porro reiciendis, quae dolor modi perferendis nostrum sint praesentium inventore consectetur, laudantium corrupti dicta. Provident cupiditate doloribus sapiente neque eum.</p>

                        <p className="details-text">
                            Please <NavLink to="/questionnaire">fill out a questionnaire</NavLink> for more information about getting on our waiting list. 
                            similique id harum esse, commodi nulla repudiandae quidem nobis, numquam delectus voluptate 
                            optio. Ut natus placeat doloribus.
                        </p>

                        <div className="details-availability">2022 Waiting List: Open</div>

                        <div className="details-availability">2023 Waiting List: Open</div>
                    </div>
                </div>

                <ContentImgDetails 
                    className="availability" 
                    height="480px"
                    img={"http://via.placeholder.com/1000x1000"}
                    title="Wanting to Add a Kota's Arrow Australian Shepherd to your Family?"
                    description="Start by filling out this questionnaire"
                    buttonHeader="Questionnaire"
                    path="/questionnaire"
                />
            </div>
        )
    }
}

export default Availability;