import Navbar from '../../../components/navbar';
import Header from '../../../components/header';
import Footer from '../../../components/copyright';
import Item from '../../../components/materiel'
import ItemStats from '../../../components/itemStats'
import { useState, useEffect, useRef } from "react";
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

export default function Telephonique(props) {

  var [Items, setItem] = useState(null);
  var [Category, setCategory] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loadingBtn, setloadingBtn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchProducts().then((data) => {
        setItem(data);

        fetchProductsCat().then((data) => {
          setCategory(data);
          setLoading(false);
          setloadingBtn(false);
        });
      });
    })
  }, [])

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

  function randomTime(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function allItems(props, page) {

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

      </>) : (<>
        <ItemStats Category={page} ITEMS={Items} CAT={Category} />
        {items(props, page, Items, setItem, Category)}
      </>)}
    </>
  )
}

const items = function (props, Category, ITEMS, setItem, CATEGORIES) {

  if (!Category == null || !Category == '') {
    {
      return ITEMS
        .filter(item => (item.available && CATEGORIES.filter(cat => (cat.id === item.categoryid)).map(cat => (cat.name))) == Category)
        .map((item) =>
        (<Item
          props={props}
          key={item.productID}
          item={item}
          ITEMS={ITEMS}
          Category={CATEGORIES}
          setItem={setItem}
          cat={(CATEGORIES.filter(cat => (cat.id === item.categoryid)).map(cat => (cat.name)))}
        />
        ))
    }
  }
}

  return (
    <>
      <main className="main">
        <div className="body">

        <Header title="Téléphonique" item="" props={props} loadingBtn={loadingBtn} Items={Items} Category={Category} setItem={setItem} />
          <Navbar />

          <section className="container">
            {allItems(props, "téléphonique")}
            <Footer />
          </section>
        </div>
      </main>
    </>
  )
}