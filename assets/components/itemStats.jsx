import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const total = function (page, Filter, ITEMS, CAT) {

  if (page == null || page == '') {
    if (Filter == 0) {
      { return (ITEMS.filter(item => item).length) }
    }

    { return (ITEMS.filter(item => item.categoryid == Filter).length) }
  }
  else {
    { return (ITEMS.filter(item => item.categoryid == CAT.filter(cat => (cat.name === page)).map(cat => (cat.id)))).length }
  }
}

const available = function (page, Filter, ITEMS, CAT) {
  if (page == null || page == '') {

    if (Filter == 0) {
      return ITEMS.filter(item => item.available)
        .map((item) =>
          (item)).length
    }

    return ITEMS.filter(item => item.categoryid == Filter && item.available)
      .map((item) =>
        (item)).length
  }
  else {
    {
      return ITEMS.filter(item => item.categoryid == CAT.filter(cat => (cat.name === page)).map(cat => (cat.id)))
        .filter(item => item.available).length
    }
  }
}

const unavailable = function (page, Filter, ITEMS, CAT) {
  if (page == null || page == '') {

    if (Filter == 0) {
      return ITEMS.filter(item => !item.available)
        .map((item) =>
          (item)).length
    }

    return ITEMS.filter(item => item.categoryid == Filter && !item.available)
      .map((item) =>
        (item)).length
  }
  else {
    {
      return ITEMS.filter(item => item.categoryid == CAT.filter(cat => (cat.name === page)).map(cat => (cat.id)))
        .filter(item => item.unavailable).length
    }
  }
}

export default function itemStats({ Category, Filter, onCatChange, ITEMS, CAT }) {

  function handleChange(e) {
    onCatChange(e.target.value);
  }

  return (<>
    <div className="statsItems">

      {(Category == null || Category == '') ? (<><span>
        Filtre:
      </span>
        <FormControl style={{
          width: '187px',
          height: '45px',
          bottom: '11px'
        }}>
          <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
          <Select onChange={handleChange}
            value={Filter}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Catégorie"
          >
            <MenuItem value="0">Tous</MenuItem>
            <MenuItem value="1">Réseau</MenuItem>
            <MenuItem value="2">Téléphonique</MenuItem>
            <MenuItem value="3">Desktop</MenuItem>
            <MenuItem value="4">Réunion</MenuItem>
          </Select>
        </FormControl></>) :
        (<></>)}
      <div className='statsItemsInfo'>
        <span>
          Total: {total(Category, Filter, ITEMS, CAT)}
        </span>
        <span>
          Disponible: {available(Category, Filter, ITEMS, CAT)}
        </span>
        {unavailable(Category, Filter, ITEMS, CAT) != 0 ?
          <span>
            Indisponible: {unavailable(Category, Filter, ITEMS, CAT)}
          </span>
          : null
        }
      </div></div>
  </>)
}