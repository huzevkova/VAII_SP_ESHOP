import React from "react";
import {Button, Card} from "react-bootstrap";

const BlogCard = ({ index, image, title, subtitle, description, openBlog }) => {
    return (
        <div className="col-md-4 col-lg-3 mb-4 mt-5">
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{subtitle}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => openBlog(index)}>Prečítaj si</Button>
                </Card.Body>
            </Card>
        </div>
    )
};

export default BlogCard;