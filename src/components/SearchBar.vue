<template>
    <v-form>
        <v-container>
            <v-flex sm8 offset-sm2>
                <v-layout row wrap align-center>
                    <v-text-field
                            label="Outline"
                            outline
                            v-model="url"
                    ></v-text-field>
                    <v-btn color="error" class="start-btn" @click="getVideoInfo">START</v-btn>
                </v-layout>
            </v-flex>
        </v-container>
    </v-form>
</template>

<script>
    import youtubeController from '../youtubeController';

    export default {
        data () {
            return {
                url: ''
            }
        },
        methods: {
            async getVideoInfo() {
                let info = await youtubeController.getInfo(this.url);
                console.log(info);
            }
        }
    }
</script>

<style>
    .start-btn {
        height: 57px;
        color: white;
        background-color: rgb(242, 10, 81);
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        text-align: center;
        font-size: 14px;
        margin-top: -23px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 0px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(242, 10, 81);
        border-image: initial;

    }
</style>