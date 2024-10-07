import React from "react";
import { useState, useMemo } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Pagination from '@mui/material/Pagination';
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Input from "@mui/material/Input";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from '@mui/icons-material/Search';
import Stack from "@mui/material/Stack";
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import UserCard from "../User/UserCard";

import Female08 from "../../assets/static/Female08.webp";
import Female09 from "../../assets/static/Female09.webp";
import Female15 from "../../assets/static/Female15.webp";
import Male06 from "../../assets/static/Male06.webp";
import Male08 from "../../assets/static/Male08.webp";
import SearchBar from "../SearchBar/SearchBar";
import { Typography, useTheme } from "@mui/material";

import "../OrderLists/orderListsTableStyles.css";

const createOrderData = (orderId, userPhoto, userName, projectName, address, date, status) => {
	return {
		orderId,
		userPhoto,
		userName,
		projectName,
		address,
		date,
		status
	};
};

const tableRows = [
	createOrderData("#CM9801", Female08, "Natali Craig", "Lanidng Page", "Meadow Lane Oakland", "Just now", "In Progress"),
	createOrderData("#CM9802", Female09, "Kate Morrison", "CRM Admin Pages", "Larry San Fransico", "A minute Ago", "Complete"),
	createOrderData("#CM9803", Female15, "Drew Cano", "Client Project", "Bagwell Avenue Ocala", "1 hour ago", "Pending"),
	createOrderData("#CM9804", Male06, "Orlando Diggs", "Admin Dashboard", "Washburn Baton Rouge", "Yeserday", "Approved"),
	createOrderData("#CM9805", Male08, "Andi Lane", "App Landing Page", "Nest Lane Olivette", "Feb 2, 2023", "Rejected"),
	createOrderData("#CM9806", Female08, "Natali Craig", "Lanidng Page", "Meadow Lane Oakland", "Just now", "In Progress"),
	createOrderData("#CM9807", Female09, "Kate Morrison", "CRM Admin Pages", "Larry San Fransico", "A minute Ago", "Complete"),
	createOrderData("#CM9808", Female15, "Drew Cano", "Client Project", "Bagwell Avenue Ocala", "1 hour ago", "Pending"),
	createOrderData("#CM9809", Male06, "Orlando Diggs", "Admin Dashboard", "Washburn Baton Rouge", "Yeserday", "Approved"),
	createOrderData("#CM9810", Male08, "Andi Lane", "App Landing Page", "Nest Lane Olivette", "Feb 2, 2023", "Rejected"),
	createOrderData("#CM9811", Female08, "Natali Craig", "Lanidng Page", "Meadow Lane Oakland", "Just now", "In Progress"),
	createOrderData("#CM9812", Female09, "Kate Morrison", "CRM Admin Pages", "Larry San Fransico", "A minute Ago", "Complete"),
	createOrderData("#CM9813", Female15, "Drew Cano", "Client Project", "Bagwell Avenue Ocala", "1 hour ago", "Pending"),
	createOrderData("#CM9814", Male06, "Orlando Diggs", "Admin Dashboard", "Washburn Baton Rouge", "Yeserday", "Approved"),
	createOrderData("#CM9815", Male08, "Andi Lane", "App Landing Page", "Nest Lane Olivette", "Feb 2, 2023", "Rejected"),
	createOrderData("#CM9815", Female08, "Natali Craig", "Lanidng Page", "Meadow Lane Oakland", "Just now", "In Progress"),
	createOrderData("#CM9817", Female09, "Kate Morrison", "CRM Admin Pages", "Larry San Fransico", "A minute Ago", "Complete"),
	createOrderData("#CM9818", Female15, "Drew Cano", "Client Project", "Bagwell Avenue Ocala", "1 hour ago", "Pending"),
	createOrderData("#CM9819", Male06, "Orlando Diggs", "Admin Dashboard", "Washburn Baton Rouge", "Yeserday", "Approved"),
	createOrderData("#CM9820", Male08, "Andi Lane", "App Landing Page", "Nest Lane Olivette", "Feb 2, 2023", "Rejected"),
];

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

const tableHeadCells = [
	{
		id: "orderId",
		numeric: false,
		disablePadding: true,
		label: "Order ID"
	},
	{
		id: "userName",
		numeric: false,
		disablePadding: false,
		label: "User"
	},
	{
		id: "projectName",
		numeric: false,
		disablePadding: false,
		label: "Project"
	},
	{
		id: "address",
		numeric: false,
		disablePadding: false,
		label: "Address"
	},
	{
		id: "date",
		numeric: false,
		disablePadding: false,
		label: "Date"
	},
	{
		id: "status",
		numeric: false,
		disablePadding: false,
		label: "Status"
	},
	{
		id: "",
		numeric: "",
		disablePadding: false,
		label: ""
	}
];

const OrderTableHead = ({ onSelectAll, order, orderBy, rowsSelected, rowCount, onSort }) => {
	const theme = useTheme();

	const sortHandler = (property) => (event) => {
		onSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={rowsSelected > 0 && rowsSelected < rowCount}
						checked={rowCount > 0 && rowsSelected === rowCount}
						onChange={onSelectAll}
						sx={{
							'&.Mui-checked': {
								color: "black",
							},
						}}
					/>
				</TableCell>
				{tableHeadCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						sx={{
							color: theme.palette.text.primary,
						}}
					>
						{headCell.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

const TableToolBar = () => {
	const theme = useTheme();
	return (
		<Toolbar
			sx={[
				{
					pl: { sm: 2 },
					pr: { xs: 1, sm: 1 },
				},
				{
					bgcolor: theme.palette.background.secondary,
					borderRadius: "10px",
					paddingBottom: "10px"
				}
			]}
		>
			<Stack direction={"row"} width="100%" justifyContent={"space-between"} alignItems={"flex-end"}>
				<Stack direction={"row"} gap={4}>
					<AddIcon color="action" />
					<FilterListIcon color="action" />
					<SwapVertIcon color="action" />
				</Stack>
				<SearchBar />
			</Stack>
		</Toolbar>
	)
};

const OrderTable = () => {

	const [order, setOrder] = useState("asc");
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [orderBy, setOrderBy] = useState("");
	const [rowsPerPage, setRowsPerPage] = useState(8);

	const handleSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAll = (event) => {
		if (event.target.checked) {
			const newSelected = tableRows.map((n) => n.orderId);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, orderId) => {
		const selectedRowIndex = selected.indexOf(orderId);
		let newSelected = [];

		if (selectedRowIndex === -1) {
			newSelected = newSelected.concat(selected, orderId);
		} else if (selectedRowIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedRowIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedRowIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedRowIndex),
				selected.slice(selectedRowIndex + 1),
			);
		}
		setSelected(newSelected);
	};

	const handlePageChange = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};


	const emptyRows = useMemo(() => {
		return Math.max(0, (1 + page) * rowsPerPage - tableRows.length);
	}, [page, rowsPerPage, tableRows.length]);


	const visibleRows = useMemo(() => {
		const startIndex = page * rowsPerPage;
		const endIndex = Math.min(startIndex + rowsPerPage, tableRows.length);
		return tableRows
			.slice(startIndex, endIndex)
			.sort(getComparator(order, orderBy));
	}, [order, orderBy, page, rowsPerPage, tableRows]);

	return (
		<Box>
			<Paper sx={{ mb: 2, boxShadow: 0, padding: 3 }}>
				<Typography color="text.primary" className="table-title">Order List</Typography>
				<TableToolBar />
				<TableContainer className="table-container">
					<Table>
						<OrderTableHead
							rowsSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAll={handleSelectAll}
							rowCount={tableRows.length}
						/>
						<TableBody className="table-body">
							{visibleRows.map((row, index) => {
								const isItemSelected = selected.includes(row.orderId);
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<TableRow
										hover
										onClick={(event) => handleClick(event, row.orderId)}
										role="checkbox"
										tabIndex={-1}
										key={row.orderId}
										selected={isItemSelected}
										sx={{
											cursor: 'pointer',
										}}
									>
										<TableCell padding="checkbox">
											<Checkbox
												color="primary"
												checked={isItemSelected}
												sx={{
													'&.Mui-checked': {
														color: "black",
													},
												}}
											/>
										</TableCell>
										<TableCell
											component="th"
											id={labelId}
											scope="row"
											padding="none"
										>
											{row.orderId}
										</TableCell>
										<TableCell align="left">
											<UserCard userImage={row.userPhoto} userName={row.userName} />
										</TableCell>
										<TableCell align="left">{row.projectName}</TableCell>
										<TableCell align="left">{row.address}</TableCell>
										<TableCell sx={{ gap: "4px" }} align="left">
											<Stack direction={"row"} gap={1}>
												<CalendarTodayIcon fontSize="small" />{row.date}
											</Stack>
										</TableCell>
										<TableCell align="left">{row.status}</TableCell>
										<TableCell sx={{ padding: 0 }}>
											{
												isItemSelected ?
													<IconButton
														id="long-button"
														onClick={handleClick}
													>
														<MoreHoriz />
													</IconButton> :
													<></>
											}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[8, 16, 32]}
					component="div"
					count={tableRows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handlePageChange}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	)
};

export default OrderTable