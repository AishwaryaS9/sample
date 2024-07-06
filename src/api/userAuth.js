import axios from "axios";

// Login
export async function loginUser(username, password) {
    const url = `https://dummyjson.com/user/login`;

    try {
        const response = await axios.post(
            url,
            {
                username: username,
                password: password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log('Login response:', response);

        if (response.status === 200) {
            return response.data; // Assuming your API returns data you need
        } 
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Re-throw the error for the caller to handle
    }
}
