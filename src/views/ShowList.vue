<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-3">
        <div :class="(user.user_type !== 1 || user.user_type === null) ? 'col-12' : 'col-10'" >
          <select class="form-select">
            <option selected></option>
            <option value="1">컴퓨터</option>
            <option value="2">전자재품</option>
            <option value="3">악세사리</option>
          </select>
        </div>
        <div v-if="user.user_type === 1"  class="col-2">
          <div class="text-end">
            <button type="button" class="btn btn-warning" @click="btnRegisterForm">상품등록목록</button>
          </div>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(product, i) in productList">
          <div class="card" style="width: 18rem">
            <a @click="orderNow(product.id)" style="cursor: pointer;"> <img
              :src="`/download/${product.id}/${product.path}`"
              class="card-img-top"
              alt="..."
            /></a>
            <div class="card-body">
              <h5 class="card-title">
                {{product.product_name}}
              </h5>
              <p class="card-text h6">
                <span class="badge text-bg-secondary me-1">{{ product.category1 }}</span>
                <span class="badge text-bg-secondary me-1">{{ product.category2 }}</span>
                <span class="badge text-bg-secondary">{{ product.category3 }}</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    장바구니 담기
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                    @click="orderNow"
                  >
                    주문하기
                  </button>
                </div>
                <small class="text-dark">{{getCurrencyFormat(product.product_price)}}원</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "showListComponent",
  data() {
    return {
      productList: [],
    };
  },
  computed: {
    user(){
      return this.$store.state.user;
    }
  },
  created() {
    this.getProductList();
  },
  methods: {
    getCurrencyFormat(value) {
      return this.$currencyFormat(value);
    },
    async getProductList() {
      this.productList = await this.$api("/api/productList", {});
      console.log(this.productList);
    },
    orderNow(product_id) {
      this.$router.push({ path: "/showDetails", query:{product_id}});
    },
    btnRegisterForm(){
      this.$router.push({path:"/salesList"});
    }
  },
};
</script>
<style>
/* .card {
        margin-bottom: 5px;
    } */
</style>