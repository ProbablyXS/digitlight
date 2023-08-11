import Link from '@mui/material/Link'
import ButtonDelete from './modal_suppression';
import ButtonEdit from './modal_edit';
import React from 'react';

export default function Item({props, item, ITEMS, Category, setItem, cat }) {
  
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }

  return (<div className="panelItem">
    <div id="entry-pic" className="panelImage">
      <Link href={item.href}>
        <img
          src={item.img}
          alt={item.alt}
          style={{ objectFit: "cover" }}
          width={500}
          height={500}
        />
      </Link>
    </div>
    <div className="itemInfo">
      <div className="itemInfoTitle">
        <span>Nom du produit : </span>
        <span>{item.name}</span>
      </div>
      <div className="itemInfoTitle">
        <Link href={`/materiel/${removeAccents(cat.toString())}`}>
          <span>Catégorie : {cat}</span>
        </Link>
      </div>
      <div className="itemInfoTitle">
        {item.available ?
          <span>Statut : <span style={{ color: "darkgreen" }}>Disponible</span></span>
          :
          <span>Statut : <span style={{ color: "red" }}>Réservé</span></span>
        }
      </div>
    </div>

    {props.appUserRole[0] == "ROLE_ADMIN" ?
              <div className="modalButton">
              <ButtonEdit Item={item} ITEMS={ITEMS} Category={Category} setItem={setItem} />
              <ButtonDelete Item={item} ITEMS={ITEMS} Category={Category} setItem={setItem} />
            </div>
          : null
        }
  </div>)
}