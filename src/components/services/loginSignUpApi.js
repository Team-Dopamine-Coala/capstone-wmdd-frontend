import { BASE_URL } from "../config/api_config";

export const createUser = async () => {
    const res = await fetch(`${BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
    })

    const data = await res.json()
}