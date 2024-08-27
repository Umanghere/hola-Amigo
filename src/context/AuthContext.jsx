import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState(""); 
  const [userName, setUserName] = useState(""); 
  const [userEmpId, setUserEmpId] = useState(""); 
  const navigate = useNavigate();
  console.log(userEmpId);
  // Function to handle login
  const login = async (email, role) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    setUserRole(role); // Set user role on login

    try {
      const response = await fetch("https://project-data-2-h4xc.onrender.com/users");
      const users = await response.json();

      // Find the user based on the email
      const loggedInUser = users.find((user) => user.email === email);

      if (loggedInUser) {
        setUserName(loggedInUser.Name);
        setUserEmpId(loggedInUser.EmpId);
      } else {
        console.error("User not found:", email);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
    setUserEmail("");
    setUserRole("");
    setUserName(""); 
    setUserEmpId(""); 
    navigate("/team-services2.onrender.com/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userEmail,
        userRole,
        userName,
        userEmpId,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
