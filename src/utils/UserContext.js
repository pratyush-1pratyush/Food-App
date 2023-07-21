import { createContext } from "react";

const UserContext = createContext({
  user: {
    userName: "Pratyush Anand",
    email: "anandpratyush1666@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
