<template>
    <h1>{{ getTitle }}</h1>
    <form @submit.prevent="save(contact)" v-if="contact" class="car-edit">
        <input type="text" placeholder="Enter full name" v-model="contact.name">
        <input type="email" placeholder="Enter email" v-model="contact.email">
        <input type="tel" placeholder="Enter phone number" v-model="contact.phone">
        <button>Save</button>
    </form>
</template>

<script>
import { contactService } from '@/services/contact.service.js'

export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const contactId = this.$route.params._id
        if (contactId) {
            this.contact = await contactService.getById(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    },
    methods: {
        async save(contact) {
            try {
                const contactToSave = { ...contact }
                await this.$store.dispatch({ type: 'saveContact', contact: contactToSave })
            } catch (err) {
                console.log('err:', err)
            } finally {
                this.$router.push('/contact')
            }
        }
    },
    computed: {
        getTitle() {
            return (this.contact?._id ? 'Edit' : 'Add') + ' Contact'
        }
    }
}
</script>

<style lang="scss">

</style>
