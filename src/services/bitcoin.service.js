'use strict'

import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize
    }


    async function getRate(){
        const res = await axios({
            method: 'get',
            url:'https://blockchain.info/ticker',
            params:{
        
            }
        })
        console.log('res:', res)
    }

    async function getMarketPriceHistory(){
        const res = await axios({
            method: 'get',
            url:'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true',
            params:{
        
            }
        })
        console.log('res:', res)
    }
    
    async function getAvgBlockSize(){
        const res = await axios({
            method: 'get',
            url:'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true',
            params:{
        
            }
        })
        console.log('res:', res)
    }
    