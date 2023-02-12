<template>
    <div v-if="contact" class="car-details">
        <h2>{{contact.name}}</h2>
        <h3>{{contact.email}}</h3>
        <img v-bind:src="'https://robohash.org/'+ contact.name + '?set=set5'" />
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
    </div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
export default {
    data() {
        return {
            contact: null,
        }
    },
    async created(){
        const contactId = this.$route.params._id
        this.contact = await contactService.getContactById(contactId)
    }
}
</script>

<style lang="scss"></style>
