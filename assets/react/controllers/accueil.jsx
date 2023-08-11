import React from 'react';
import Link from '@mui/material/Link';
import Navbar from '../../components/navbar'
import Footer from '../../components/copyright'
import { useState, useEffect, useRef } from "react";
import LoadingComp from '../../components/loading'
import Item from '../../components/materiel'
import ItemStats from '../../components/itemStats'
import Skeleton from '@mui/material/Skeleton';
import Modalbutton from '../../components/modal_ajout';


export default function Accueil(props) {

  async function fetchProducts() {

    const test = await fetch("/api/products")
      .then((response) => response.json())
      .then(json => {
        return json.items;
      })
      .catch(error => {
        console.error(error);
      });

    return await test;
  }

  async function fetchProductsCat() {

    const test = await fetch("/api/productsCat")
      .then((response) => response.json())
      .then(json => {
        return json.categories;
      })
      .catch(error => {
        console.error(error);
      });

    return await test;
  }

  var [Items, setItem] = useState(null);
  var [Category, setCategory] = useState(null);

  const [filter, setFilter] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchProducts().then((data) => {
        setItem(data);

        fetchProductsCat().then((data) => {
          setCategory(data);
          setLoading(false);
        });
      });
    })
  }, [])

  function removeOpacity() {

    var elem = document.getElementById("main");
    if (elem) {
      elem.style.opacity = 1;
    }

    elem = document.getElementById("loading");
    if (elem) {
      elem.style.opacity = 0;
    }
  }

  function randomTime(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function AllItems({ page, loading, filter, setFilter, Items, setItem, CATEGORIES }) {
    const SkeletonBreadcrumb = () => (
      <span style={{
        height: '4%',
      }}>
        <Skeleton variant="text"
          width="30%"
          height='80%'
          sx={{
            marginLeft: '5%',
            marginTop: '1.5%',
          }} />
      </span>)

    const SkeletonItem = () => (
      <Skeleton variant="rounded"
        width="45%"
        height='15%'
        sx={{
          marginLeft: '1%',
          marginTop: '3%',
        }} />)

    return (
      <>
        {loading ? (<>

          <SkeletonBreadcrumb />
          {[...Array(8).keys()].map((item) => (<SkeletonItem key={item} />))}

        </>) :
          (<>
            <ItemStats Category={page} Filter={filter} onCatChange={(categorie) => setFilter(categorie)} ITEMS={Items} CAT={CATEGORIES} />
            {items(page, filter, Items, setItem, CATEGORIES)}
          </>)}
      </>
    )
  }

  const items = function (Categorys, filterValue, ITEMS, setItem, CATEGORIES) {
    if (filterValue != 0) {
      return ITEMS
        .filter(item => item.categoryid == filterValue)
        .filter(item => item.available)
        .map(item =>
          <Item
            props={props}
            key={item.productID}
            item={item}
            ITEMS={ITEMS}
            Category={Category}
            setItem={setItem}
            cat={(CATEGORIES.filter(cat => (cat.id === item.categoryid)).map(cat => (cat.name)))} />)
    }
    else {
      return ITEMS
        .filter(item => item.available)
        .map(item => (
          <Item
            props={props}
            key={item.productID}
            item={item}
            ITEMS={ITEMS}
            Category={Category}
            setItem={setItem}
            cat={(CATEGORIES.filter(cat => (cat.id === item.categoryid)).map(cat => (cat.name)))}
          />))

    }
  }

  return (
    <>
      <LoadingComp />
      {loading ? (<></>) :
        (<><main id="main" className="main" onLoad={removeOpacity}>
          <div className="body">
            <header className="panelHeader">
              <ul className="breadcrumb">
                <li>
                  <Link href="/accueil">
                    Accueil
                  </Link>
                </li>
                <li>
                  Materiel
                </li>
              </ul>
              <div className="WelcomeMSG">
                <span>Bonjour {props.appUserLogin}</span>
                {props.appUserRole[0] == "ROLE_ADMIN" ?
                  <Modalbutton Items={Items} Category={Category} setItem={setItem} />
                  : null
                }
              </div>

            </header>
            <Navbar props={props} />
            <section className="container">
              <AllItems page="" loading={loading} filter={filter} setFilter={setFilter} Items={Items} setItem={setItem} CATEGORIES={Category} />
              <Footer />
            </section>
          </div>
        </main></>)}
    </>
  )
}
