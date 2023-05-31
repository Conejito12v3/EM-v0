import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CardEP(props) {
    const [mensaje, setMensaje] = useState('Ver mas');
    const [visible, setVisible] = useState(true);
    const [xI1, setXI1] = useState(0);
    const [yI1, setYI1] = useState(0);
    const [xT1, setXT1] = useState(0);
    const [yT1, setYT1] = useState(0);
    const [opacidad1, setOpacidad1] = useState(0);
    const [scale1, setScale1] = useState(1);

    useEffect(() => {
        if (visible) {
            setMensaje('Ver mas');
        } else {
            setMensaje('Ver menos');
        }
    }, [visible]);

    const disapear = () => {
        if(visible){
            setXI1(props.xi);
            setYI1(props.yi);
            setXT1(props.xt);
            setOpacidad1(props.opacidad);
            setScale1(props.scale);
            setVisible(false);
            document.getElementById(props.id).style.zIndex = 3001;
        }
        else {
            setXI1(0);
            setYI1(0);
            setScale1(1);
            setXT1(0);
            setYT1(0);
            setOpacidad1(0);
            setVisible(true);
            document.body.classList.remove('no-scroll');
        }

        console.log(props.id);
    }

    return (
        <motion.div
            animate={{ x: xI1, y: yI1, scale: scale1 }}
            onClick={disapear}
        >
            <div className={`${props.class} ${visible && props.classA}`}>
                <div className='cardMTitle'>
                    <h3>Hola</h3>
                    <h5>Tema</h5>
                    <span style={{color: 'white'}}><u>{mensaje}</u></span>
                </div>
                <div>
                    <img src="https://uploads.codesandbox.io/uploads/user/6480904d-d79b-484b-9f16-8d5a3eff77e3/AFwN-c.jpg" alt="Aqui va una imagen" />
                </div>
                <motion.div
                    className={props.classB}
                    animate={{ opacity: opacidad1, x: xT1, y: yT1 }}
                    style={{ height: props.height}}
                >
                    <p
                        id={props.id}
                        stye={{ height: '100px' }}
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut nobis quasi porro, velit doloremque assumenda. Eaque minima aliquam, dolor magni ex magnam perferendis eum, repudiandae excepturi fuga sed voluptates? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora voluptates nemo exercitationem omnis temporibus cumque aspernatur odio, error ab doloribus tempore, nesciunt, quis debitis accusamus provident illo incidunt delectus magnam!</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default CardEP