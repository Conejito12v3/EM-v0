import React, { useEffect } from 'react';
import AOS from 'aos';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        height: '400px',
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '75px 0px',
        padding: '0px 10%'
    },
    cardStyle: {
        height: "416px",
        width: "512px",
        padding: "50px",
        textAlign: "center",
        background: "#fff",
        color: "#ff",
        fontSize: "12px",
        textTransform: "uppercase",
        border: "1px solid #000",
        borderRadius: "10px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    cardImageStyle: {
        height: "175px",
        width: "100%",
        objectFit: "cover",
        objectPosition: "center",
        margin: '25px'
    },
    descriptionEvento: {
        textAlign: "justify",
    },
    divCentral: {
        width: "860px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
}));


function CardCarouselComponent() {
    const classes = useStyles();

    useEffect(() =>     {
        AOS.init();
    }, []);

    const imagen = "https://www.inmobiliamx.com/hubfs/blog/2017/Mayo%2017/MoMA-The-Shape-of-Things-4.jpg"

  return (
    <div data-aos='fade-down' className={classes.containerStyle} >
        <Carousel variant='dark'>
            <Carousel.Item>
                <div className={classes.containerStyle}>
                    <Card>
                        <Card.Img variant="top" src={imagen} />
                        <Card.Body>
                        <Card.Title>Titulo</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Fecha</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imagen} />
                        <Card.Body>
                        <Card.Title>Titulo</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Fecha</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imagen} />
                        <Card.Body>
                        <Card.Title>Titulo</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Fecha</small>
                        </Card.Footer>
                    </Card>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={classes.containerStyle}>
                    <Card>
                        <Card.Img variant="top" src={imagen} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imagen} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={imagen} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CardCarouselComponent