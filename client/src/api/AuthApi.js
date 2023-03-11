export const login = async (email, password) => {
    const response = await fetch('/api/auth/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email, password})
    })
    return response;
}

export const signin = async (name,email,dob,password) => {
    const response = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,email,dob,password})
    })
    return response
}
