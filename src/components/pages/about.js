import React, { Component } from 'react';

import HeaderImage from '../headerImage';
import Footer from '../footer';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="about-page-wrapper">
                <HeaderImage 
                    className="about-page-img" 
                    img="http://via.placeholder.com/1000x1000"  
                    height="480px"
                    title="About Us"
                />

                <div className="page-content-wrapper">
                    <div className="page-content">
                        <img alt="about Image" className="page-content-img-one" src="http://via.placeholder.com/400x300" />

                        <p className="page-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptate pariatur, repudiandae ipsum consectetur nam maiores neque perspiciatis ea provident reiciendis iste laboriosam nulla vitae facilis? Deleniti error recusandae ratione esse doloribus quam voluptate quod ipsum sit? Eaque est repellendus alias, laboriosam quas maiores dolore inventore quasi pariatur neque explicabo minima impedit incidunt perspiciatis saepe quaerat excepturi?</p>

                        <p className="page-content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dicta ex nihil, enim hic soluta consequatur doloremque qui consectetur tempora, autem nobis adipisci ullam magnam officiis suscipit. Quaerat at ab voluptate error temporibus aut accusantium harum sed culpa eum facere rerum, similique nihil, illo tenetur iusto fugiat vel. Earum quia temporibus amet. Dolores!</p>

                        <p className="page-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure hic sunt atque odio, praesentium facilis beatae numquam porro ipsam natus dicta dolorum tempora laborum ad a aliquam nulla quos. Quibusdam, enim. Saepe natus, vel rem hic repellat ipsum distinctio delectus aliquid voluptatum tempora qui iusto, quo beatae pariatur id vitae error libero consequuntur expedita porro inventore earum dignissimos eos illo? Illum natus nam, ipsam culpa quaerat asperiores ratione inventore.</p>

                        <img alt="about Image" className="page-content-img-two" src="http://via.placeholder.com/360x480" />

                        <p className="page-content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat deserunt in nesciunt impedit sed debitis dolores repellendus illo consectetur sunt nihil nostrum, facere suscipit excepturi quae nisi cum nam pariatur asperiores voluptates explicabo? Beatae ducimus architecto numquam impedit delectus, iste dicta. Laudantium pariatur numquam ab et minima! Delectus provident quas non debitis illo maxime id atque! Vitae, totam?</p>

                        <p className="page-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, deserunt perferendis esse optio nobis explicabo laboriosam a vel cumque illum nisi quaerat nulla quidem voluptatibus eum obcaecati maxime molestiae non mollitia tempora sint ut. Ipsum totam ab ea nobis iure iusto sint voluptates repudiandae perspiciatis numquam, possimus id quis eos sit dolor blanditiis molestiae modi ex vero nesciunt sed. Eveniet neque a deleniti quod libero quae iure minima facilis accusamus. Rem animi, illo porro officia provident fugit ullam quidem voluptatibus earum aliquid!</p>

                        <p className="page-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis animi vel voluptates nobis praesentium enim culpa, excepturi est voluptatem iste delectus, beatae alias libero deleniti eligendi quisquam voluptatum veritatis corrupti dolor. Quas, adipisci consectetur fuga eveniet labore non dicta earum. Error dignissimos eaque ut eos nemo iure.</p>

                        <p className="page-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, mollitia, ipsum unde distinctio recusandae illo, fuga aspernatur impedit voluptates tenetur et suscipit eaque quam optio. Odit deserunt sit aspernatur ut voluptatem. Impedit, voluptatibus. Dicta eaque adipisci et iure quaerat fugit officiis dolor at, soluta perferendis natus placeat sunt voluptates? Ea ex expedita praesentium veniam ipsa repudiandae consequatur suscipit excepturi, temporibus ad autem possimus totam dicta commodi laborum aliquam inventore vitae! Iure odio molestias corrupti saepe cumque doloribus sunt!</p>

                        <p className="page-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda deleniti temporibus porro eligendi voluptate neque. Vitae, nesciunt assumenda in architecto autem voluptatem quaerat reiciendis amet, cumque libero eius expedita voluptas quia vero illum recusandae!</p>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default About;
