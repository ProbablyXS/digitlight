import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, { useEffect } from 'react';

export default function navbar(props) {

    return (
        <div className="leftNav">
            <img
                id="bgImg"
                src="/build/images/digitlight.svg"
                alt="digilight picture"
                width={500}
                height={500}
            />
            <Link href="/accueil">
                <Button
                    className="btn"
                    size="large"
                    variant="outlined">
                    <div className="imgText">
                        <img
                            src="/build/images/navbar/material.png"
                            alt="material picture"
                            width={500}
                            height={500}
                        />
                        <p>Matériel</p>
                    </div>
                </Button>
            </Link>

            <div className="subPanelMateriel">
                <Link href="/materiel/reseau">
                    <Button
                        className="subBtn"
                        size="large"
                        variant="outlined">
                        <div className="imgText">
                            <img
                                src="/build/images/navbar/reseau.png"
                                alt="reseau picture"
                                width={500}
                                height={500}
                            />
                            <p>Réseau</p>
                        </div>
                    </Button>
                </Link>

                <Link href="/materiel/telephonique">
                    <Button
                        className="subBtn"
                        size="large"
                        variant="outlined">
                        <div className="imgText">
                            <img
                                src="/build/images/navbar/telephone.png"
                                alt="telephone picture"
                                width={500}
                                height={500}
                            />
                            <p>Téléphonique</p>
                        </div>
                    </Button>
                </Link>

                <Link href="/materiel/desktop">
                    <Button
                        className="subBtn"
                        size="large"
                        variant="outlined">
                        <div className="imgText">
                            <img
                                src="/build/images/navbar/desktop.png"
                                alt="desktop picture"
                                width={500}
                                height={500}
                            />
                            <p>Desktop</p>
                        </div>
                    </Button>
                </Link>

                <Link href="/materiel/reunion">
                    <Button
                        className="subBtn"
                        size="large"
                        variant="outlined">
                        <div className="imgText">
                            <img
                                src="/build/images/navbar/reunion.png"
                                alt="reunion picture"
                                width={500}
                                height={500}
                            />
                            <p>Réunion</p>
                        </div>
                    </Button>
                </Link>
            </div>

            <div className="border"></div>
                <Link href="/logout">
                    <Button
                        className="btn btnLogout"
                        size="large"
                        variant="outlined">
                        <div className="imgText">
                            <img
                                src="/build/images/navbar/logout.png"
                                alt="logout picture"
                                width={500}
                                height={500}
                            />
                            <p>Déconnexion</p>
                        </div>
                    </Button>
                </Link>
        </div>)
}