const initialState = {
    name: "",
    username: "",
    email: "",
    password: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        case "RESET_LOGIN_FORM":
            return initialState
        default:
            return state
    }
}