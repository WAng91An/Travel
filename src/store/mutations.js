export default {
  changeCity: function (state, city) {
    state.city = city
    try {
      localStorage.city = city // localStorage本地存储，类似cookie
    } catch (e) {}
  }
}
