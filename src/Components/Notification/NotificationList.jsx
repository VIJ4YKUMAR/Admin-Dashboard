import React from 'react'
import Stack from "@mui/material/Stack"
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import bug from "../../assets/static/bug.webp"
import broadcast from "../../assets/static/broadcast.webp"
import user from "../../assets/static/user.webp"
import "../Notification/notificationStyles.css";

const notifications = [
	{
		icon: bug,
		text: 'You have a bug that needs...',
		timestamp: 'Just now'
	},
	{
		icon: user,
		text: 'New user registered',
		timestamp: '59 minutes ago'
	},
	{
		icon: bug,
		text: 'You have a bug that needs...',
		timestamp: '12 hours ago'
	},
	{
		icon: broadcast,
		text: 'Andi Lane subscribed to you',
		timestamp: 'Today, 11:59 AM'
	}
];

const NotificationCard = ({ item }) => {
	return (
		<Stack direction={'row'} spacing={1} maxWidth={250}>
			<img src={item.icon} width={30} height={30} />
			<Stack spacing={1} sx={{ textAlign: "left" }}>
				<Typography color="text.primary">{item.text}</Typography>
				<Typography color="text.secondary" className='notification-status' style={{ fontSize: "12px", margin: "0px" }}>{item.timestamp}</Typography>
			</Stack>
		</Stack>
	);
};


const NotificationList = () => {
	return (
		<Stack gap={2}>
			{
				notifications.map((notification, index) => (
					<NotificationCard key={index} item={notification} />
				))
			}
		</Stack>
	)
}

export default NotificationList;