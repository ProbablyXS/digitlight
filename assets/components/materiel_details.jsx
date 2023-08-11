import Link from '@mui/material/Link';
import ButtonReserver from './modal_reservation';
import React from 'react';

export default function Item({ props, item, setItem, cat }) {

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }

  function zoom(e) {

    var zoomer = e.currentTarget;

    let offsetX;
    let offsetY;

    e.offsetX ? offsetX = e.offsetX : offsetX = e.pageX;
    e.offsetY ? offsetY = e.offsetY : offsetY = e.pageY;

    let x = offsetX / zoomer.offsetWidth * 50
    let y = offsetY / zoomer.offsetHeight * 80

    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }

  return (<div className="panelInfoItem">
    <div className="panelImage">
      <figure className="zoom" onMouseMove={zoom} style={{ backgroundImage: `url(${item.img})` }}>
        <img
          src={item.img}
          alt={item.alt}
          style={{ objectFit: "cover" }}
          width={500}
          height={500}
        />
      </figure>
    </div>
    <div className="itemInfo">
      <div className="itemInfoTitle">
        <h1>{item.name}</h1>
      </div>
      <div className="itemInfoCat">
        <Link href={`/materiel/${removeAccents(cat[0])}`}>
          Catégorie : {props.cat}
        </Link>
      </div>
      <div className={"itemInfoAvailable"}>
        {item.available ?
          <span>Statut : <p style={{ color: "darkgreen" }}>Disponible</p></span>
          :
          <span>Statut : <p style={{ color: "red" }}>Réservé</p></span>
        }
      </div>
      <div className="itemInfoEmpl">
        <p>Emplacement : {item.emplacement} Nº {item.productID}</p>
      </div>
      <div className="itemInfoDesc">
        <span><h3>Description : </h3> {item.description}</span>
      </div>
      <div className="itemInfoCar">
        <span><h3>Caractéristiques : </h3> {item.caracteristiques}</span>
      </div>
      {item.available ?
        <div className="agendaGoogle">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FParis&showDate=1&showNav=1&showTitle=0&showPrint=1&showTabs=1&showCalendars=0&src=69e129d6b440223c82dd7c76ecec9939b921ca2814c2a5d847b929f1db723d50%40group.calendar.google.com&color=%23616161"
            style={{ border: 0 }}>
          </iframe>
        </div> : null
      }
      {item.available ?
        <div className="boutonReserver">

          {props.appUserCat == item.categoryid ?
            <ButtonReserver props={props} cat={cat} Item={item} setItem={setItem} />
            :
            null}
        </div> : null
      }
    </div>
  </div>)
}