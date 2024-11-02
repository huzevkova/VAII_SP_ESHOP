import React from "react";
import {useNavigate} from "react-router-dom";
import {Button, Card} from "react-bootstrap";

const BlogCard = ({ image, title, description }) => {

    const navigate = useNavigate();

    return (
        <div className="col-md-4 col-lg-3 mb-4 mt-5">
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="/images/blog_img.jpg"/>
                <Card.Body>
                    <Card.Title>Názov článku</Card.Title>
                    <Card.Text>
                        Ukážka textu článku.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate('/blog')}>Prečítaj si</Button>
                </Card.Body>
            </Card>
        </div>
    )
};

export default BlogCard;