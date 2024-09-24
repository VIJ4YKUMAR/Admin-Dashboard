import React from 'react'
import Stack from "@mui/material/Stack"
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const UserCard = ({ userName, userImage, isTable }) => {
	return (
		<Stack direction={'row'} spacing={1}>
			<img src={userImage} alt='user photo' width={isTable ? 24 : 30} height={isTable ? 24 : 30} />
			<Typography className="u-name">{userName}</Typography>
		</Stack>
	)
};

export default UserCard;