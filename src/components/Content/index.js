import React, { ReactElement , Fragment } from "react";
import TableRow from "@mui/material/TableRow";
import TableBody  from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell"

import ContentRow from "../ContentRow";

import './index.css';

export default function Content() : ReactElement {
 
  return (
    <div className="divClass">
    <Table >
         <TableBody>
            <TableRow   className="tableRow">
              <TableCell> 
                First Name
              </TableCell>
              <TableCell> 
              Last Name
              </TableCell>
              <TableCell> 
              Company Name
              </TableCell>
              <TableCell> 
             Address
              </TableCell>
              <TableCell> 
              City
              </TableCell>
              <TableCell> 
              County
              </TableCell>
              <TableCell> 
              Zip
              </TableCell>
              {/* <TableCell> 
              Phone 1
              </TableCell>
              <TableCell> 
              Phone 2
              </TableCell>
              <TableCell> 
              Email
              </TableCell>
              <TableCell> 
              Web
              </TableCell> */}
            </TableRow>
            </TableBody>
         
      </Table>
        <ContentRow></ContentRow>   
    </div>
  )

}