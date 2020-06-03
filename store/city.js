
export const state = () => ({
    cityList: ''
})

export const mutations = {
    updateCity (state, list) {
        state.cityList = list
    }
}
