import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import AddBoxIcon from '@mui/icons-material/Edit';
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';

export default function modal({ Item, ITEMS, setItem, Category }) {


    //ALERT MESSAGE
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [AlertInfo, setAlertInfo] = useState('');

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };

    const AlertSleep = async () => {

        for (let i = 0; i < 4; i++) {
            await sleep(1000);
        }
        setAlertOpen(false)
        return;
    }

    const CATEGORIES = Category;

    const [value, setValue] = useState(
        {
            name: Item.name,
            categoryid: Item.categoryid,
            emplacement: Item.emplacement,
            description: Item.description,
            caracteristiques: Item.caracteristiques,
            img: Item.img,
            available: Item.available,
        }
    );

    const handleClick = async () => {

        if (alertOpen == true) {
            return;
        }

        if (value.name == "" ||
            value.categoryid == "" ||
            value.emplacement == "" ||
            value.description == "" ||
            value.caracteristiques == "" ||
            value.img == "" ||
            value.available == null) {

            setAlertOpen(false)
            setAlertOpen(true)
            setAlertInfo('error')
            setAlertMessage("Veuillez remplir tous les champs")
            AlertSleep();
            return;
        }

        try {
            const newState = ITEMS.map(obj => {
                if (obj.productID === Item.productID) {
                    return {
                        ...obj,
                        name: value.name,
                        categoryid: value.categoryid,
                        emplacement: value.emplacement,
                        description: value.description,
                        caracteristiques: value.caracteristiques,
                        img: value.img,
                        available: value.available
                    };
                }
                return obj;
            });

            fetch('/api/editProduct', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "productid": Item.productID,
                    "name": value.name,
                    "categoryID": value.categoryid,
                    "emplacement": value.emplacement,
                    "description": value.description,
                    "caracteristiques": value.caracteristiques,
                    "img": value.img,
                    "available": value.available
                })
            }).then(async function (response) {
                return response.json()
            }).then(async function (object) {
                if (object.type == 'error') {
                    setAlertOpen(false)
                    setAlertOpen(true)
                    setAlertInfo('error')
                    setAlertMessage(object.message)
                    await sleep(2000);
                    setAlertOpen(false)
                    return
                } else {
                    setAlertOpen(false)
                    setAlertOpen(true)
                    setAlertInfo('info')
                    setAlertMessage(object.message)
                    setItem(newState);
                    handleClose();
                    await sleep(2000);
                    setAlertOpen(false);
                }
            })
        } catch (error) {
            console.error(error);
        }
    };


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>{alertOpen &&
            <Alert className="alertPopUp" style={{ zIndex: '9999', width: "1", height: "100%" }} severity={AlertInfo} color={AlertInfo}>
                {alertMessage}
            </Alert>}
            <Tooltip id="tooltip" title="Editer"><IconButton style={{
                display: 'flex',
                position: 'relative',
                margin: '0.5rem 0px',
                alignItems: 'center',
                width: 'auto',
                justifyContent: 'flex-end'
            }} onClick={handleOpen}><AddBoxIcon /></IconButton></Tooltip>
            <Modal className='Modal'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className="modal01">
                    <IconButton className="modal01Button" onClick={handleClose}><CloseIcon /></IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <TextField className="modalElement"
                            value={value.name}
                            onChange={(e) => {
                                setValue({ ...value, name: e.target.value });
                            }}
                            margin="dense"
                            id="Produit"
                            color="primary"
                            label="Nom du produit"
                            variant="standard"
                        />
                        <TextField className="modalElement"
                            value={value.description}
                            onChange={(e) => {
                                setValue({ ...value, description: e.target.value });
                            }}
                            margin="dense"
                            id="Description"
                            color="primary"
                            label="Description du produit"
                            variant="standard"
                        />
                        <TextField className="modalElement"
                            value={value.caracteristiques}
                            onChange={(e) => {
                                setValue({ ...value, caracteristiques: e.target.value });
                            }}
                            margin="dense"
                            id="Caractéristique"
                            color="primary"
                            label="Caractéristique du produit"
                            variant="standard"
                        />
                        <TextField className="modalElement"
                            value={value.img}
                            onChange={(e) => {
                                setValue({ ...value, img: e.target.value });
                            }}
                            margin="dense"
                            id="Image"
                            color="primary"
                            label="Image du produit"
                            variant="standard"
                        />
                        <FormControl className="modalElement">
                            <InputLabel id="demo-simple-select-label">Emplacement</InputLabel>
                            <Select
                                value={value.emplacement}
                                onChange={(e) => {
                                    setValue({ ...value, emplacement: e.target.value });
                                }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Salle de stockage 1"
                            >
                                <MenuItem value="Salle de stockage 1">Salle de stockage 1</MenuItem>
                                <MenuItem value="Salle de stockage 2">Salle de stockage 2</MenuItem>
                                <MenuItem value="Salle de stockage 3">Salle de stockage 3</MenuItem>
                                <MenuItem value="Salle de stockage 4">Salle de stockage 4</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className="modalElement">
                            <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
                            <Select
                                value={value.categoryid}
                                onChange={(e) => {
                                    setValue({ ...value, categoryid: e.target.value });
                                }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="réseau"
                            >
                                {CATEGORIES.map(category => <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <FormControl className="modalElement">
                            <InputLabel id="demo-simple-select-label">Disponibilité</InputLabel>
                            <Select
                                value={value.available}
                                onChange={(e) => {
                                    setValue({ ...value, available: e.target.value });
                                }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="réseau"
                            >
                            <MenuItem value={true}>Réservable</MenuItem>
                            <MenuItem value={false}>Non réservable</MenuItem>
                            </Select>
                        </FormControl>
                        <Button className="modalElement" onClick={handleClick}
                            size="large"
                            variant="outlined">Éditer
                        </Button>
                    </Typography>
                </Box>
            </Modal></>
    )
}