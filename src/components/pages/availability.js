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

                        <span className="details-text">
                            Please <NavLink to="/questionnaire">fill out a questionnaire</NavLink> for more information about getting on our waiting list. 
                            similique id harum esse, commodi nulla repudiandae quidem nobis, numquam delectus voluptate 
                            optio. Ut natus placeat doloribus.
                        </span>

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

                <div className="availability-purchase-wrapper">
                    <div className="purchase-info-wrapper">
                        <h1 className="purchase-heading">
                            Purchasing a Puppy from Us
                        </h1>

                        <p className="purchase-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab quo reprehenderit rem odio corrupti in veritatis iure deleniti, corporis, quis aspernatur non ipsa numquam.</p>

                        <p className="purchase-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus rem, beatae blanditiis tempore eligendi amet perspiciatis iste numquam laborum, tempora, magnam qui? Officiis nesciunt pariatur facilis enim unde accusantium vitae voluptas sit.</p>

                        <p className="purchase-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore id excepturi culpa iusto cum commodi molestias harum qui, sit architecto ratione.</p>

                        <p className="purchase-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis delectus dolor molestias quos voluptatum assumenda vero accusamus pariatur quaerat.</p>

                        <p className="purchase-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sapiente fugit ad illo delectus repellendus!</p>

                        <img alt="availabiltiy" className="purchase-detail-img" src="http://via.placeholder.com/480x720" />

                        <p className="purchase-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi culpa veniam debitis minus facere fugit maxime sed vel! Inventore similique natus officiis aperiam.</p>

                        <p className="purchase-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero culpa, eos cumque iure fugit est alias facere!</p>

                        <p className="purchase-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure delectus, deleniti commodi harum officiis, placeat quae suscipit perspiciatis sint cupiditate mollitia minus laudantium officia odio culpa!</p>

                        <p className="purchase-detail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ipsum adipisci</p>

                        <p className="purchase-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, repellendus reprehenderit id aut, error tempora sapiente voluptatibus sequi debitis, neque cumque.</p>

                        <p className="purchase-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quos perspiciatis. Nesciunt voluptates corporis ex aut rem recusandae rerum dolores! Ut ea earum veritatis, blanditiis nesciunt velit voluptate sunt saepe.</p>

                        <p className="purchase-detail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores?</p>

                        <p className="purchase-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda odio, quis nihil velit ducimus, consectetur vero cupiditate nesciunt dolorum porro voluptas. Quis exercitationem cumque ex esse accusantium corrupti iure temporibus atque quas quam commodi tenetur veritatis vero repudiandae, quasi hic itaque.</p>

                        <p className="purchase-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo debitis blanditiis? Dolorem laudantium ipsum facilis modi cum, magnam nihil. Inventore, fugiat. Iusto, possimus dolor veniam labore nam impedit totam amet veritatis nostrum consequatur tenetur! Impedit esse iure provident temporibus! Labore ea veritatis maiores totam dolore minima reiciendis quod, asperiores commodi magnam magni temporibus beatae perferendis explicabo corrupti.</p>

                        <span className="purchase-detail-points">
                            <h3 className="detail-heading">All Aussies come with:</h3>

                            <div className="detail-points">
                                <ul>
                                    <li>Registration Papers</li>
                                    <li>Contract</li>
                                    <li>Deworming at 2, 4, 6 & 8 weeks of age</li>
                                    <li>Dew Claws Removed</li>
                                    <li>Testing</li>
                                    <li>First Set of Shots</li>
                                    <li>Leash</li>
                                    <li>Collar</li>
                                </ul>

                                <ul>
                                    <li>Proof of vaccinations from a licensed veterinarian</li>
                                    <li>Letter stating excellent health from a licensed veterinarian</li>
                                    <li>Parents Genetics</li>
                                    <li>Negative fecal test</li>
                                    <li>Tail Docked</li>
                                </ul>

                                <ul>
                                    <li>Toy</li>
                                    <li>Food</li>
                                    <li>Puppy pads</li>
                                    <li>Wipes</li>
                                    <li>Potty bags</li>
                                    <li>Paper Towels</li>
                                    <li>And much more</li>
                                </ul>
                            </div>
                        </span>

                        <p className="purchase-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid esse voluptas architecto doloribus earum nobis quidem voluptate explicabo eius incidunt temporibus possimus id ex, distinctio, eaque quibusdam cumque, maxime corrupti.</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default Availability;