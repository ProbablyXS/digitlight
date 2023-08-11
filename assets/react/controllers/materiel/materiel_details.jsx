import Navbar from '../../../components/navbar';
import Header from '../../../components/header';
import Footer from '../../../components/copyright';
import Item from '../../../components/materiel_details'
import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect, useRef } from "react";
import React from 'react';


export default function Details(props) {

  function randomTime(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll('-', " ").toLowerCase();
  };
  
  var [ITEMS, setItem] = useState(null);
  var [CATEGORIES, setCategory] = useState(null);
  
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
  const itemDetail = function (props, itemName) {
    return ITEMS
      .filter(item => capitalizeWords(item.name) == capitalizeWords(itemName))
      .map((item) =>
      (<Item
        key={item.productID}
        props={props}
        item={item}
        cat={(CATEGORIES.filter(cat => (cat.id === item.categoryid)).map(cat => (cat.name)))}
      />
      ))
  }
  
  function itemInfo(props, itemName) {
  
    const ItemImage = () => (
      <Skeleton
        animation="wave"
        variant="rounded"
        width="80%"
        height='55%'
        sx={{
          marginLeft: '10%',
        }} />)
  
    const TextTitle = () => (
      <Skeleton
        variant="rounded"
        width="50%"
        height='3%'
        sx={{
          marginLeft: '10%',
          marginTop: '1%',
        }} />)
  
    const TextDescription = () => (
      <Skeleton
        variant="rounded"
        width="80%"
        height='2%'
        sx={{
          marginLeft: '10%',
          marginTop: '3%',
        }} />)
  
    const Button = () => (
      <Skeleton
        animation="wave"
        variant="rounded"
        width="50%"
        height='3%'
        sx={{
          marginLeft: '10%',
          marginTop: '8%',
        }} />)
  
    const [loading, setLoading] = useState(true)
  
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
  
    return (
      <>
        {loading ? (<>
  
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
  
            <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><ItemImage /></span>
  
            <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <TextTitle />
              {[...Array(8).keys()].map((item) => (<TextDescription key={item} />))}
              <Button />
            </span>
          </div>
  
        </>) : (<>{itemDetail(props, itemName)}
        </>)}
      </>
    )
  }

  return (
    <>
      <main className="main">
        <div className="body">

          <Header title={props.cat} item={props.item} props={props} />
          <Navbar />

          <section className="InfoItem">
            {itemInfo(props, props.item)}
            <Footer />
          </section>
        </div>
      </main>
    </>
  )
}