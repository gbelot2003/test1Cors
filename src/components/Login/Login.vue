<template>
    <v-container>
        <v-layout>
            <v-flex xs10 offset-xs1 align-center justify-center row>
                <v-form v-model="valid">
                    <v-text-field v-model="email" :rules="emailMatch" label="E-Mail" required></v-text-field>
                    <v-text-field v-model="password" :append-icon="show1 ? 'visibility_off' : 'visibility'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Normal with hint text" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                    <v-btn :disabled="!valid" @click="submit">
                        submit
                    </v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from "axios";
    export default {
        data: () => ({
            valid: false,
            show1: false,
            email: "root@user.com",
            password: 'password',
            emailMatch: [
                v => !!v || 'E-mailk is required',
                v => v.length >= 10 || 'Name must be less than 10 characters'
            ],
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
    
            }
        }),
        methods: {
            submit() {
                
                const datas = {
                    'user': this.user,
                    'pass': this.password
                };

                axios.post('localhost:50340/api/login', datas)
                    .then(resp => {
                        console.log(resp)
                    })
    
            },
            clear() {
    
            },
        }
    }
</script>

<style>
    
</style>
