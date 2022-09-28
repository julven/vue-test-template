<template>
    <div>
        <h3>List Page</h3>
        <p>
            First Name: <br>
            <input v-model="state.fname" /> <br>
            Last Name: <br>
            <input v-model="state.lname" /> <br>
            <button @click="addList"> Add </button>
        </p>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th></th>
            </tr>
            <tr v-for=" x in vuexList" key="x.id">
                <td>{{x.fname}}</td>
                <td>{{x.lname}}</td>
                <td>{{x.id}}</td>
                <td><button @click="deleteList(x.id)">x</button></td>
            </tr>
        </table>
    </div>

</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'List',
    props: {},
    setup() {

        let store = useStore();
        let state = ref({
            fname: "",
            lname: "",
        });

        let addList = () => {
            let { fname, lname } = state.value;
            let person = {
                fname,
                lname,
                id: Math.random().toString(36).substring(7)
            };
            if (fname === "" || lname === "") return;
            store.dispatch('list/action', { action: 'addList', payload: person }).then(() => {
                state.value.fname = "";
                state.value.lname = "";
            })

        }


        let deleteList = id => {
            store.dispatch('list/action', { action: 'deleteList', payload: id })
        }

        return {
            vuexList: computed(() => store.state.list.list),
            state,
            addList,
            deleteList
        }
    }
}
</script>