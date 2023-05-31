import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  
  .panel span {
    position: relative;
    display: block;
    overflow: visible;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    background-color: #1c1c1c;
    color: white
  }
  
  .panel.turqoise {
    background-color: #fff;

  }
  
  .panel.green {
    background-color: #1c1c1c;
    color: white;
    margin-bottom: 800px;
  }
  
  .panel.bordeaux {
    background-color: #fff;
  }
`;

const ExpoComponent = () => {
    return (
        <SectionWipesStyled>
            <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                <Scene pin>
                    <div className="panel blue"><span>Presentacion de exposicion</span></div>
                </Scene>
                <Scene pin>
                    <div className="panel turqoise"><span>Presentacion 1</span></div>
                </Scene>
                <Scene pin>
                    <div className="panel green"><span>Presentacion n</span></div>
                </Scene>
                <Scene pin>
                    <div className="panel bordeaux"><span>Recorrido</span></div>
                </Scene>
            </Controller>
        </SectionWipesStyled>
    )
}

export default ExpoComponent;