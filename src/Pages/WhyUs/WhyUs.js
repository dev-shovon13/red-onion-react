import { faArrowRight, faBell, faBusAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import why1 from '../../images/WhyUs/1.jpg'
import why2 from '../../images/WhyUs/2.jpg'
import why3 from '../../images/WhyUs/3.jpg'
import './WhyUs.css'
const WhyUs = () => {
    const data = [
        {
            id: 1,
            title: "Fast Delivery",
            shortText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias consequatur quidem officia cupiditate",
            fullText: "necessitatibus eos doloremque repudiandae tempore. Provident obcaecati aperiam earum commodi aliquid nobis dicta sequi accusantium sit. Aut itaque illum dignissimos ea aperiam natus rerum molestias reprehenderit cupiditate",
            icon: faBusAlt,
            img: why1,
            collapse: "showMore1",
            collapseHref: "#showMore1"
        },
        {
            id: 2,
            title: "A Good Auto Responder",
            shortText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias consequatur quidem officia cupiditate",
            fullText: "necessitatibus eos doloremque repudiandae tempore. Provident obcaecati aperiam earum commodi aliquid nobis dicta sequi accusantium sit. Aut itaque illum dignissimos ea aperiam natus rerum molestias reprehenderit cupiditate",
            icon: faBell,
            img: why2,
            collapse: "showMore2",
            collapseHref: "#showMore2"
        },
        {
            id: 3,
            title: "Home Delivery",
            shortText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias consequatur quidem officia cupiditate",
            fullText: "necessitatibus eos doloremque repudiandae tempore. Provident obcaecati aperiam earum commodi aliquid nobis dicta sequi accusantium sit. Aut itaque illum dignissimos ea aperiam natus rerum molestias reprehenderit cupiditate",
            icon: faTruck,
            img: why3,
            collapse: "showMore3",
            collapseHref: "#showMore3"
        }
    ]


    return (
        <div className="bg">
            <Container className="py-5">
                <div className="w-50 why-title">
                    <h1>why you choose us</h1>
                    <p className="text-secondary">El Diablo’s cook top is nothing short of extraordinary. Located on a Spanish Island, this restaurant cooks its meals over an active volcanic hole in the ground.</p>
                </div>
                <Row className="align-items-center">
                    {
                        data.map(item => {
                            return <Col sm={12} md={4} key={item.id} className="px-5 px-md-2 px-lg-3 my-3">
                                <img src={item.img} alt="" className="img-fluid mb-4 why-img animate__animated animate__pulse animate__slower	3s animate__infinite	infinite" />
                                <h4> <span className="font-top"><FontAwesomeIcon icon={item.icon} className=" text-white" /></span> <span className="font f-color fw-bold">{item.title}</span></h4>
                                <div className="text-secondary">
                                    <div>{item.shortText} </div>
                                    <div class="collapse" id={item.collapse}>{item.fullText}</div>
                                    <a class="text-decoration-none color" data-bs-toggle="collapse" href={item.collapseHref} role="button" aria-expanded="false" aria-controls={item.collapse}> <span className="me-1">See More</span>
                                        <span className="font-bottom"><FontAwesomeIcon icon={faArrowRight} className="text-white " /></span>
                                    </a>
                                </div></Col>
                        })
                    }
                </Row>
            </Container>

        </div>
    );
};

export default WhyUs;