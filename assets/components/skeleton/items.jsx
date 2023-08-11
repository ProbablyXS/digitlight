import Skeleton from '@mui/material/Skeleton'
import { useState, useEffect } from "react";
import ItemStats from '../itemStats'
import Item from '../materiel'
import React from 'react';

export default function itemInfo({ itemName }) {

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
            setLoading(false)
        }, randomTime(500, 1000))
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

            </>) : (<>{itemDetail(itemName)}
            </>)}
        </>
    )
}