import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GraphQlClient from "../../graphql/api";
import { confirmAccountQuery } from "../../graphql/auth/auth";
import { useToast } from "@chakra-ui/react";

export default function ActivateAccount() {
  const [message, setMessage] = useState("");
  const [isTokenValid, setisTokenValid] = useState(false);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const searchURL = useLocation().search;
  const token = new URLSearchParams(searchURL).get("code");
  const confirmAccount = useToast();
  console.log(isTokenValid);
  useEffect(() => {
    GraphQlClient.request(confirmAccountQuery, { token }).then((data) => {
      setisTokenValid(true);
      setMessage(data.confirmAccount.message);
    });
  });
  return <div>{isTokenValid ? message : message}</div>;
}
