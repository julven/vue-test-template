<template>
    <div>
        <h3>Account Page</h3>
        <p>
            First Name:<br>
            <input type="text" :value="vuexAccount.fname" @input="setVuex('fname', $event.target.value)" /><br>
            Last Name:<br>
            <input type="text" :value="vuexAccount.lname" @input="setVuex('lname', $event.target.value)" /><br>
            Birthday:<br>
            <input type="date" :value="vuexAccount.bday" @input="setVuex('bday', $event.target.value)" /><br>
            Gender:<br>
            <input type="radio" name="gender" value="male" :checked="vuexAccount.gender === 'male'"
                @change="setVuex('gender' ,$event.target.value)" /> male <br>
            <input type="radio" name="gender" value="female" :checked="vuexAccount.gender === 'female'"
                @change="setVuex('gender' ,$event.target.value)" /> female
        </p>
    </div>

</template>
<script>

import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Account',
    props: {},
    setup() {

        let store = useStore();

        let setVuex = (variable, value) => {
            store.dispatch('account/action', { action: 'setState', payload: { variable, value } })
        }

        return {
            vuexAccount: computed(() => store.state.account),
            setVuex
        }
    }
}
</script>