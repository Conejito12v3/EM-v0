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

    const imagen = 'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"273"%20height%3D"160"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20273%20160"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_186c6e5cb37%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_186c6e5cb37"><rect%20width%3D"273"%20height%3D"160"%20fill%3D"%23373940"><%2Frect><g><text%20x%3D"102.03125"%20y%3D"87.44000034332275">273x160<%2Ftext><%2Fg><%2Fg><%2Fsvg>'

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