import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from '@mui/material';

const TopSellingProducts = () => {
  const rows = [
    { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
    { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
    { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
    { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
    { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
  ];

  return (
    <Box component={Paper} p={3} bgcolor="background.secondary" boxShadow="none" textAlign="left">
      <Typography color="text.primary" variant="h6" fontWeight="bold" gutterBottom>
        Top Selling Products
      </Typography>
      <TableContainer>
        <Table aria-label="top selling products table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "text.primary" }}>Name</TableCell>
              <TableCell sx={{ color: "text.primary" }}>Price</TableCell>
              <TableCell sx={{ color: "text.primary" }}>Quantity</TableCell>
              <TableCell sx={{ color: "text.primary" }}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow sx={{ "& td": { border: 0 } }} key={row.name}>
                <TableCell sx={{ color: "text.primary" }}>{row.name}</TableCell>
                <TableCell sx={{ color: "text.primary" }}>${row.price.toFixed(2)}</TableCell>
                <TableCell sx={{ color: "text.primary" }}>{row.quantity}</TableCell>
                <TableCell sx={{ color: "text.primary" }}>${row.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopSellingProducts;
