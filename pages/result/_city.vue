<template>
    <div class="totalDiv">
        <div class="container pt-20 d-rtl">
            <div v-for="(hotel, index) in hotels" :key="index+hotel.id">
                <div class="card mt-20">
                    <header class="card-header">
                        <h1 class="card-header-title title">
                            هتل
                        </h1>
                    </header>
                    <div class="card-content">
                        <div class="columns has-text-centered c-999">
                            <div class="column">
                                نام استان
                            </div>
                            <div class="column">
                                نام شهر
                            </div>
                            <div class="column">
                                نام هتل
                            </div>
                        </div>
                        <div class="columns has-text-centered">
                            <div class="column">
                                {{ hotel.province_fa }}
                            </div>
                            <div class="column">
                                {{ hotel.city_fa }}
                            </div>
                            <div class="column">
                                {{ hotel.name_fa }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="(city, index) in cities" :key="index+city.name_en">
                <div class="card mt-20">
                    <header class="card-header">
                        <p class="card-header-title title">
                            شهر
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <div class="columns has-text-centered c-999">
                                <div class="column">
                                    نام استان
                                </div>
                                <div class="column">
                                    نام شهر
                                </div>
                            </div>
                            <div class="columns has-text-centered">
                                <div class="column">
                                    {{ city.province_fa }}
                                </div>
                                <div class="column">
                                    {{ city.name_fa }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            cityName: '',
            resultList: '',
            hotels: [],
            cities: []
        }
    },
    mounted() {
        this.cities = this.$store.state.city.cityList
        this.hotels = this.$store.state.hotel.hotelList
    },
    
}
</script>

<style scoped>
    .totalDiv {
        background: #f2f6fd;
        height: 100vh
    }
    .mt-20 {
        margin-top: 20px
    }
    .c-999 {
        color: #999
    }
    .d-rtl {
        direction: rtl
    }
    .pt-20 {
        padding-top: 20px;
    }
    .title {
        justify-content: center;
        color: dimgray;
    }
    .detailStyle {
        font-weight: bold
    }
    .card {
        box-shadow: 0 4px 13px 0 rgba(0,0,0,.08), 0 15px 35px 0 rgba(50,50,93,.1);
        border-radius: 10px;
        margin-bottom: 20px
    }
</style>
