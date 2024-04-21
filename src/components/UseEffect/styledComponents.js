import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-family: "Roboto";
  font-size: 32px;
`;

export const Table = styled.table`
  text-align: center;
  border: solid green 3px;
  border-radius: 5px;
  padding: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  background-color: #c0c0c0;
  color: #fff;
`;

export const TableCell = styled.td`
  padding: 10px;
`;
