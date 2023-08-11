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
import AddBoxIcon from '@mui/icons-material/AddBox';
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';

export default function modal({ Items, Category, setItem }) {

    //ALERT MESSAGE
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [AlertInfo, setAlertInfo] = useState('');

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }

    function replaceSpacesWithDashes(str) {
        return str.replace(/\s+/g, '-');
    }

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
            name: "",
            category: 1,
            emplacement: "",
            description: "",
            caracteristiques: "",
            img: "",
        }
    );

    const handleClick = async () => {

        if (alertOpen == true) {
            return;
        }

        if (value.name == "" ||
            value.category == "" ||
            value.emplacement == "" ||
            value.description == "" ||
            value.caracteristiques == "" ||
            value.img == "") {

            setAlertOpen(false)
            setAlertOpen(true)
            setAlertInfo('error')
            setAlertMessage("Veuillez remplir tous les champs")
            AlertSleep();
            return;
        }

        try {
            const newState =
            {
                productID: Items.length + 1,
                name: value.name,
                alt: value.name,
                categoryid: value.category,
                emplacement: value.emplacement,
                description: value.description,
                caracteristiques: value.caracteristiques,
                img: value.img,
                href: "/materiel/" + removeAccents(CATEGORIES.filter(cat => (cat.id == value.category)).map(cat => (cat.name))[0]) + "/" + replaceSpacesWithDashes(value.name),
                available: true,
            };

            fetch('/api/addProduct', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": value.name,
                    "alt": value.name,
                    "categoryID": value.category,
                    "emplacement": value.emplacement,
                    "description": value.description,
                    "caracteristiques": value.caracteristiques,
                    "img": value.img
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
                    setItem((Items) => [...Items, newState]);
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

            <Tooltip id="tooltip" title="Ajouter"><IconButton style={{
                display: 'flex',
                position: 'relative',
                margin: '0.5rem 0px',
                alignItems: 'center',
                width: 'auto',
                justifyContent: 'flex-end'
            }} onClick={handleOpen}><AddBoxIcon /></IconButton></Tooltip>
            <Modal
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
                                defaultValue=""
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
                                defaultValue=""
                                onChange={(e) => {
                                    setValue({ ...value, category: e.target.value });
                                }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="réseau"
                            >
                                {CATEGORIES.map(category => <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <Button className="modalElement" onClick={handleClick}
                            size="large"
                            variant="outlined">Ajouter
                        </Button>
                    </Typography>
                </Box>
            </Modal></>
    )
}