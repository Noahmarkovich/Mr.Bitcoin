<template>
    <header>
        <h1>Mr. Bitcoin</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
        <div v-if="user"> 
            <h2 >Hello {{ user.name }} </h2>
            <p>your balance is: {{ user.balance }}</p>
            <p v-if="rate">Bitcoin rate: ${{ rate }}</p>
        </div>
    </header>
</template>

<script>
import { userService } from '@/services/user.service.js'
import { bitcoinService } from '../services/bitcoin.service'
export default {
    data() {
        return {
            user : null,
            rate : null
        }
    },
    async created() {
        this.user = userService.getUser()
        // console.log(this.user)
        this.rate = await bitcoinService.getRate()
        
    },
    computed :{
    }
}
</script>
