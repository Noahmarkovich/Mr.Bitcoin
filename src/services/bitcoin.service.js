'use strict'

import axios from "axios"
import { storageService } from "./storage.service.js"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize
    }


    async function getRate(){
        let rate = storageService.load('rate')
        if(rate) return rate
        try {
            rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
            // console.log('rate:',rate)
            storageService.save('rate', rate.data)
            return rate.data
        }
        catch (err) {
            throw new Error('Err', err)
        }
        
    }

    async function getMarketPriceHistory(){
        let marketPrice = storageService.load('priceHistory')
        if(marketPrice) return marketPrice
        try {
            marketPrice = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true`)
            // console.log('rate:',rate)
            storageService.save('priceHistory', marketPrice.data)
            return marketPrice.data
        }
        catch (err) {
            throw new Error('Err', err)
        }
        // const res = await axios({
        //     method: 'get',
        //     url:'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true',
        //     params:{
        
        //     }
        // })
        // console.log('res:', res)
        // return res.data.values
    }
    
    async function getAvgBlockSize(){
        let avgBlock = storageService.load('avgBlock')
        if(avgBlock) return avgBlock
        try {
            avgBlock = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true`)
            // console.log('rate:',rate)
            storageService.save('avgBlock', avgBlock.data)
            return avgBlock.data
        }
        catch (err) {
            throw new Error('Err', err)
        }
    }
    