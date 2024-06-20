// Packages
import React, { createContext, useState } from "react";

// Creating Authentication context for validating if the user is logged in
export const AuthenticationContext = createContext();

// Creating the Authentication Provider Component for validating the user Authentication state
export default function AuthenticationContextProvider({ children }) {
  // Creating Hooks for setting Authentication state
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [query, setQuery] = useState("");

  // Defining function for updating the authentication state of the user
  const updateAuthorizedState = (updatedValue) => {
    setIsAuthorized(updatedValue);
  };

  // Defining function for updating the search-query
  const updateQuery = (updatedValue) => {
    setQuery(updatedValue);
  };

  // Defining the default state of the user
  const authValue = {
    isAuthorized,
    updateAuthorizedState,
    query,
    updateQuery,
  };

  return (
    <AuthenticationContext.Provider value={authValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}
