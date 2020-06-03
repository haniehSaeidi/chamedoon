
export const state = () => ({
    hotelList: ''
})

export const mutations = {
    updateHotel (state, list) {
        state.hotelList = list
    }
}
