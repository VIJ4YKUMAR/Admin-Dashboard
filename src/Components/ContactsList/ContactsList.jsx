import React from "react";
import { Stack } from "@mui/material";

import UserCard from "../User/UserCard";

import Female08 from "../../assets/static/Female08.webp";
import Female09 from "../../assets/static/Female09.webp";
import Female05 from "../../assets/static/Female05.webp";
import Male06 from "../../assets/static/Male06.webp";
import Male08 from "../../assets/static/Male08.webp";
import MaleIcon2 from "../../assets/static/MaleIcon2.webp"


const contactsData = [
  {
    avatar: Female05,
    name: "Natali Craig",
    isTable: false
  },
  {
    avatar: Male08,
    name: "Drew Cano",
    isTable: false
  },
  {
    avatar: Male06,
    name: "Orlando Diggs",
    isTable: false
  },
  {
    avatar: Female08,
    name: "Andi Lane",
    isTable: false
  },
  {
    avatar: Female09,
    name: "Kate Morrison",
    isTable: false
  },
  {
    avatar: MaleIcon2,
    name: "Koray Okumus",
    isTable: false
  }
];


const ContactsList = () => {
  return (
    <Stack gap={2}>
      {
        contactsData.map((data) => (
          <UserCard key={data.name} userImage={data.avatar} userName={data.name} isTable={data.isTable} />
        ))
      }
    </Stack>
  )
};

export default ContactsList;