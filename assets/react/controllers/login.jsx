import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

export default function Login(props) {

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalFormEndpoint = e.target.action;

    const data = Array.from(e.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});
    // console.log(data);
    if (alertOpen == true) {
      return;
    }

    fetch(finalFormEndpoint, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'login': data.login,
        'password': data.password,
        '_csrf_token': props.csrf_token,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.text())
      .then(res => {
        // console.log(res);
        if (!res.includes('BadCredentialsException')) {
          return window.location.reload();
        }
        else {
          setAlertOpen(false);
          setAlertOpen(true);
          setAlertInfo('error');
          setAlertMessage("Identifiant ou mot de passe incorrect");
          AlertSleep();
        }
      })
      .catch((err) => {
        setAlertOpen(false);
        setAlertOpen(true);
        setAlertInfo('error');
        setAlertMessage("Le serveur est actuellement hors ligne");
        AlertSleep();
        // console.log(err);
      })

    return { handleSubmit };
  };

  return (
    <>{alertOpen &&
      <Alert className="alertPopUp" style={{ zIndex: '9999', width: "1", height: "100%" }} severity={AlertInfo} color={AlertInfo}>
        {alertMessage}
      </Alert>}
      <main className="main">
        <div className="panelLeft">
          <div className="leftForm">
            <div className="leftFormControl">
              <img src="/build/images/digitlight.svg" alt="DigitLight" width="500" height="500" />
              <h3>Le gestionnaire de réservation et de près de matériels centralisés</h3>
            </div>
          </div>
        </div>
        <div className="panelRight">
          <div className="rightForm">
            <form
              onSubmit={handleSubmit}
              method="POST">
              <div className="panelRightTitle">
                <h3>Connexion</h3>
              </div>
              <TextField
                margin="dense"
                id="login"
                type="login"
                name="login"
                defaultValue={props.last_username}
                color="primary"
                label="Identifiant"
                variant="standard"
              />
              <TextField
                margin="dense"
                id="password"
                type="password"
                name="password"
                autoComplete=''
                color="primary"
                label="Mot de passe"
                variant="standard"
              />
              <Button
                size="large"
                variant="outlined"
                type="submit">Se connecter
              </Button>
              <div className="panelRightControl">
                <a>Vous avez besoin d'aide ?&nbsp;</a>
                <a
                  href="mailto:corantin.berger@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >Contactez-nous</a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}