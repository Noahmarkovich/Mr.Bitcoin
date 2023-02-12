<template>
    <div class="main-container">
        <UserMsg />
        <!-- <CarFilter @filter="onSetFilterBy" /> -->
        <ContactList @remove="removeContact"  v-if="contacts" :contacts="contacts" />
        <!-- <RouterLink to="/car/edit"><button>Add a Car</button></RouterLink> -->
    </div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import ContactList from '@/cmps/contact-list.vue'
// import CarFilter from '@/cmps/car-filter.vue'
import UserMsg from '@/cmps/user-msg.vue'

export default {
    data() {
        return {
            contacts: null,
            filterBy: {},
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    methods: {
        async removeContact(contactId) {
            const msg = {
                txt: `Contact ${contactId} deleted.`,
                type: 'success',
                timeout: 2500,
            }
            await contactService.deleteContact(contactId)
            this.contacts = this.contacts.filter(contact => contact._id !== contactId)
            eventBus.emit('user-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        },
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.cars.filter(contact => regex.test(contact.vendor))
        },
    },
    components: {
        ContactList,
        // CarFilter,
        UserMsg,
    },
}
</script>

<style lang="scss">
.main-container {
    position: relative;
}
</style>
