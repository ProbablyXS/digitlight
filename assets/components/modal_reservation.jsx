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
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';

export default function modal({ props, Item, Items, setItem }) {

    const handleClickGoogle = () => {

        fetch('/api/reserveProduct', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": Item.productID,
                "user": props.appUserLogin,
                "product": props.item,
                "category": props.cat,
                "emplacement": Item.emplacement,
                "description": value.description,
                "start_time": value.startdate,
                "end_time": value.enddate
            })
        }).then(async function (response) {
            return response.json()
        }).then(async function (object) {
            if (object.type == 'error') {
                console.log('error')
                setAlertOpen(false)
                setAlertOpen(true)
                setAlertInfo('error')
                setAlertMessage("La réservation a rencontré un problème")
                AlertSleep();
            } else {
                console.log('ezezez')
                setAlertOpen(false)
                setAlertOpen(true)
                setAlertInfo('success')
                setAlertMessage("La réservation a été appliqué avec succès")
                AlertSleep();
                autoRedirect();
                handleClose();
            }
        })
    }

    //ALERT MESSAGE
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [AlertInfo, setAlertInfo] = useState('');

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };

    const autoRedirect = async () => {
        await new Promise(resolve => {
            return setTimeout(resolve, 2000)
        });

        window.location.href = '/accueil';
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

    const [value, setValue] = useState(
        {
            name: Item.name,
            description: "Pas de description",
            startdate: dayjs(new Date()),
            enddate: dayjs(new Date()).add(+1, 'day'),
        }
    );


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const NextDay = () => {
        var tomorrow = dayjs(new Date()).add(+1, 'day');
        return tomorrow;
    };

    return (
        <>
            {alertOpen &&
                <Alert className="alertPopUp" style={{ zIndex: '9999', width: "1", height: "100%" }} severity={AlertInfo} color={AlertInfo}>
                    {alertMessage}
                </Alert>}
            <Button onClick={handleOpen}
                className="btnReserver"
                size="large"
                sx={{ borderColor: "white", color: "white" }}
                variant="outlined">
                <div className="textReserver">
                    <p>RESERVER CE MATERIEL</p>
                </div>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className="modal01">
                    <IconButton className="modal01Button" onClick={handleClose}><CloseIcon /></IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='productInfos'>
                            <p>Réservateur: {props.appUserLogin}</p>
                            <p>Produit: {props.item}</p>
                            <p>Catégorie: {props.cat}</p>
                            <p>Emplacement: {Item.emplacement}</p>
                        </div>
                        <div className='DateTimeFieldInfo'>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                adapterLocale="fr">
                                <DateTimeField
                                    format="DD/MM/YYYY hh:mm"
                                    label="Début de la réservation"
                                    defaultValue={dayjs(new Date())}
                                    onChange={(e) => {
                                        setValue({ ...value, startdate: e });
                                    }}
                                />
                                <DateTimeField
                                    format="DD/MM/YYYY hh:mm"
                                    label="Fin de la réservation"
                                    defaultValue={NextDay()}
                                    onChange={(e) => {
                                        setValue({ ...value, enddate: e });
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                        <TextField className="modalElement"
                            onChange={(e) => {
                                setValue({ ...value, description: e.target.value });
                            }}
                            margin="dense"
                            id="Caractéristique"
                            color="primary"
                            label="Commentaire (optionnel)"
                            variant="standard"
                        />
                        <Button className="modalElement" onClick={handleClickGoogle}
                            size="large"
                            variant="outlined">Ajouter
                        </Button>
                    </Typography>
                </Box>
            </Modal></>
    )
}