import Link from '@mui/material/Link';
import React from 'react';
import Modalbutton from './modal_ajout';

function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll('-', " ").toLowerCase();
};

export default function header({ props, title, item, loadingBtn, Items, Category, setItem }) {

    return (
        <>
            <header className="panelHeader">
                <ul className="breadcrumb">
                    <li>
                        <Link href="/accueil">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/accueil">
                            Materiel
                        </Link>
                    </li>
                    {item.length <= 0 ?

                        <li>
                            {title}
                        </li> :
                        <li>
                            <Link href={`/materiel/${capitalizeWords(title)}`}>
                                {title}
                            </Link>
                        </li>
                    }

                    {item.length > 0 ?

                        <li>
                            <span>{capitalizeWords(item).charAt(0).toUpperCase() + capitalizeWords(item.slice(1))}</span>
                        </li>

                        :
                        null
                    }

                </ul>

                <div className="WelcomeMSG">
                    <span>Bonjour {props.appUserLogin}</span>
                    {props.appUserRole[0] == "ROLE_ADMIN" && item.length == 0 && !loadingBtn ?
                        <Modalbutton Items={Items} Category={Category} setItem={setItem} />
                        : null
                    }
                </div>

            </header>
        </>)
}