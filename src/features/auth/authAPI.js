const API_URL = import.meta.env.VITE_HOST_URL;

// Function to handle login
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    // Return user data and token from response
    return {
      user: data.data.user,
      token: data.data.token,
      role: data.data.role,
    };
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
