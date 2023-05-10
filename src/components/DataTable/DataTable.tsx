import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Checkbox
} from '@mui/material';
import { MarvelForm } from '../MarvelForm/MarvelForm';
import { Box } from '@mui/system';
import { getAuth } from 'firebase/auth';

const columns: GridColDef[] = [
  // {
  //   field: 'selection',
  //   headerName: 'Selection',
  //   renderCell: (params) => (
  //     <Checkbox
  //       style={{ border: '1px solid #ccc' }}
  //       checked={params.value}
  //       onChange={(event) => params.row[event.target.name] = event.target.checked}
  //       name={params.field}
  //     />
  //   ),
  //   width: 100,
  //   sortable: false,
  //   filterable: false,
  //   headerAlign: 'center',
  //   align: 'center',
  // },
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 250,
    editable: true,
  },
  {
    field: 'comics_appeared_in',
    headerName: 'Comics Appeared In',
    width: 5,
    editable: true
  },
  {
    field: 'super_power',
    headerName: 'Super Power',
    width: 200,
    editable: true
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 300,
    renderCell: (params) => (
      <img src={params.value} alt={params.row.name} height="100" />
    )
  }
];

interface gridData {
  data: {
    id?: string;
  }
}


export const DataTable = () => {

  let { marvelData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridRowSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    serverCalls.delete(`${gridData[0]}`)
    getData()
  }


  const MyAuth = localStorage.getItem('myAuth');
  console.log(MyAuth);

  //Conditional to render DataTable only for authenticated users
  if (MyAuth == 'true') {
    return (
      <Box style={{ height: 400, width: '100%', color:'white', backgroundColor: 'black' }}>
        <h2>Marvel Characters</h2>
        <DataGrid
          style={{ color:'#ffffff' }}
           rows={marvelData}
           columns={columns}
           initialState={{
             pagination: {
               paginationModel: {
                 pageSize: 5,
               },
             },
           }}
           pageSizeOptions={[5]}
           checkboxSelection
           onRowSelectionModelChange={(newSelectionModel) => { setData(newSelectionModel) }}
           {...marvelData}
        />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update A Character</DialogTitle>
          <DialogContent>
            <DialogContentText>Character ID: {gridData[0]}</DialogContentText>
            <MarvelForm id={`${gridData[0]}`} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  } else {
    return (
      <div>
        <h3>Please Sign In to View Your Favourite Characters</h3>
      </div>
    )
  };
}