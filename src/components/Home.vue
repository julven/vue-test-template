<template>

    <div>
        <h3>Home Page</h3>
        <p>
            VuexHome: {{vuexHome.page}} <br>
            <input type="text" @input="setVuexHome($event)" :value="vuexHome.page" /><br>
            VuexNumber: {{vuexHome.num}}
            <button @click="numChange('-')"> - </button>
            <button @click="numChange('+')"> + </button><br>
            VuexList: {{vuexlist.list.length}} <br>
            VuexAccount: <br>
            - {{vuexAccount.fname}}<br>
            - {{vuexAccount.lname}}<br>
            - {{vuexAccount.bday}}<br>
            - {{vuexAccount.gender}}
        </p>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Home',
    props: {},
    setup() {

        let store = useStore();

        let numChange = oper => {
            let num = store.state.home.num
            oper === '-' ? num-- : num++;
            store.dispatch('home/action', { action: 'setState', payload: { variable: 'num', value: num } })


        }

        let setVuexHome = e => {
            store.dispatch('home/action', { action: 'setState', payload: { variable: 'page', value: e.target.value } })
        }

        return {
            vuexHome: store.state.home,
            vuexlist: store.state.list,
            vuexAccount: store.state.account,
            numChange,
            setVuexHome
        }
    }
}
</script>