import React, { ReactElement , Fragment } from "react";
import TableRow from "@mui/material/TableRow";
import TableBody  from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell"
import Records from '../../records.json';

import '../ContentRow/index.css';

export default function ContentRow() : ReactElement {
 
  return (
    <div className="divRow">
{
   Records.map(records =>{
    return(
      
      <Table key={records.email}>
         <TableBody>
            <TableRow   className="tableRow">
              <TableCell> 
                {records.first_name}
              </TableCell>
              <TableCell> 
                {records.last_name}
              </TableCell>
              <TableCell> 
              {records.company_name}
              </TableCell>
              <TableCell> 
              {records.address}
              </TableCell>
              <TableCell> 
              {records.city}
              </TableCell>
              <TableCell> 
              {records.county}
              </TableCell>
              <TableCell> 
              {records.zip}
              </TableCell>
              {/* <TableCell> 
              {records.phone1}
              </TableCell>
              <TableCell> 
              {records.phone2}
              </TableCell>
              <TableCell> 
              {records.email}
              </TableCell>
              <TableCell> 
              {records.web}
              </TableCell> */}
            </TableRow>
            </TableBody>
         
      </Table>
            )
          })
        }
    </div>
  )

}