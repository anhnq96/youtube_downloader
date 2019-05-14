<template>
    <v-layout row wrap>
        <v-flex md6>
            <v-layout>
                <v-flex xs12 sm8 offset-sm2>
                    <v-card>
                        <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                aspect-ratio="1.3"
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                                <div> card_text</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn flat color="orange">Share</v-btn>
                            <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex md6>
            <v-tabs fixed-tabs>
                <v-tab key="mp4">
                    MP4
                </v-tab>
                <v-tab key="webm">
                    WEBM
                </v-tab>
                <v-tab key="audio">
                    AUDIO
                </v-tab>

                <v-tab-item key="mp4"
                >
                    <v-data-table
                            :items="desserts"
                            :headers="headers"
                            class="elevation-1"
                            hide-actions
                    >
                        <template v-slot:items="props">
                            <td>{{ props.item.name }}</td>
                            <td class="text-xs-right">{{ props.item.calories }}</td>

                        </template>
                    </v-data-table>
                </v-tab-item>
            </v-tabs>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data () {
            return {
                headers: [
                    {
                        text: 'Quality',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    {
                        text: 'Action',
                        align: 'right',
                        sortable: false,
                        value: 'name'
                    },

                ],
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                    }
                ]
            }
        }
    }
</script>

<style>

</style>