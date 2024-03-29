export const initialState = { 
    usuario: {
        nombreCompleto: '',
        email: '',
        username: '',
        roles: []
    },
    autenticado: false
};

const sesionUsuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INICIAR_SESION":
            return {
                ...state,
                usuario: action.usuario,
                autenticado: action.autenticado
            };
        case "CERRAR_SESION":
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            };
        case "ACTUALIZAR_USUARIO":
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            };
        default: return state;
    }
};

export default sesionUsuarioReducer; 