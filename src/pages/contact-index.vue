<template>
    <div class="main-container">
        <UserMsg />
        <ContactFilter @filter="onSetFilterBy" />
        <RouterLink to="/contact/edit"><button>Add a contact</button></RouterLink>
        <ContactList @remove="removeContact"  v-if="contacts" :contacts="contacts" />
    </div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import ContactList from '@/cmps/contact-list.vue'
import ContactFilter from '@/cmps/contact-filter.vue'
import UserMsg from '@/cmps/user-msg.vue'

export default {
    data() {
        return {}
    },
    async created() {
        this.$store.dispatch({type : "loadContacts"})
    },
    methods: {
        async removeContact(contactId) {
            const msg = {
                txt: `Contact ${contactId} deleted.`,
                type: 'success',
                timeout: 2500,
            }
            // await contactService.deleteContact(contactId)
            // this.contacts = this.contacts.filter(contact => contact._id !== contactId)
            // eventBus.emit('user-msg', msg)
            this.$store.dispatch({ type: "removeContact", contactId })
            eventBus.emit("user-msg", msg)
        },
        onSetFilterBy(filterBy) {
            this.$store.dispatch({ type: "loadContacts", filterBy })
        },
    },
    computed: {

        contacts() {
      return this.$store.getters.contacts;
    },
    },
    components: {
        ContactList,
        ContactFilter,
        UserMsg,
    },
}
</script>

<style lang="scss">
.main-container {
    position: relative;
}
</style>
