import React from "react";

//create acontext
const UserContext=React.createContext("savi");

//creating provider and consumer
const UserProvider= UserContext.Provider;
const UserConsumer= UserContext.Consumer;

export {UserProvider,UserConsumer}