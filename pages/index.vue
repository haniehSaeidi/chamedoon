<template>
  <div class="totalDiv d-rtl">
    <div class="container pt-10">
        <div class="searchInputDiv padding-10">
            <input type="text" class="searchInput"
                    placeholder="کجا میخوای بری؟"
                    @blur="closeOptions"
                    v-model="searchInput"
            >
        </div>
        <div id="myDropdown" class="is-relative dropdown" v-if="isShowDropdown">
			<div class="hany">
				<div v-for="(option, index) in resultList" :key="index">
					<nuxt-link :to="{name: 'result-city', params: {city: option.name_fa}}">
						<h4 @click="storeUpdate">
							{{ option.name_fa }}
						</h4>
					</nuxt-link>
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
            isShowDropdown: false,
            searchInput: '',
			resultList: [],
			city: [],
			hotel: [],
			settimeoutVar: ''

        }
    },
    methods: {
        closeOptions () {
            setTimeout(() => {
                this.isShowDropdown = true
            }, 500)
		},
		storeUpdate (e) {
			this.$store.commit('city/updateCity', this.city)
            this.$store.commit('hotel/updateHotel', this.hotel)
		},
    },
    watch: {
        searchInput() {
			clearInterval(this.settimeoutVar)
            this.settimeoutVar = setTimeout(() =>
				this.$axios.post('https://chamedoon.com/api/v1/hotels/local/autocomplete', {
                    "text": this.searchInput,
                })
				.then(response => {
					this.resultList = response.data.result
                    this.isShowDropdown = true
					for (let index = 0; index < this.resultList.length; index++) {
						if(this.resultList[index].type == 'hotel')
							this.hotel.push(this.resultList[index])
						else if(this.resultList[index].type == 'city')
							this.city.push(this.resultList[index])
					}
				})
				.catch(e => {
				})
			,1500);

        }
    }
}
</script>

<style scoped>
	.totalDiv {
		direction: rtl;
		background-image: url('../static/images/bg.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
	}
	.pt-10 {
        padding-top: 10px
    }
    .searchInput {
        width: 100%;
        border: none;
		font-size: 20px;
        background: transparent !important;
        box-shadow: none !important
    }
    .searchInputDiv {
		margin-top: 20px;
		background: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 13px 0 rgba(0,0,0,.08), 0 15px 35px 0 rgba(50,50,93,.1);
        position: relative;
        border: none;
        width: 100%;
        line-height: 60px;
        height: 60px;
        text-align: right;
        padding-right: 10px
    }
    .form-control {
        height: inherit
    }
    .searchInput:hover {
        box-shadow: none !important
    }
    .alertText {
        border: 1px solid $primary
    }
    .dropdown {
        background: #fff;
        box-shadow: 0 4px 13px 0 rgba(0,0,0,.08), 0 15px 35px 0 rgba(50,50,93,.1);
        border-radius: 8px;
        display: flex;
        position: absolute;
        top: 10px;
        width: 100%;
        z-index: 101;
        padding: 10px
    }
</style>
