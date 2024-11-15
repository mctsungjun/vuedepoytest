<template>
    <div class="container">
      <div class="text-end">
        <button type="button" class="btn btn-dark" @click="goToInsert">제품등록</button>
      </div>
        <table class="table table-bordered mt-2">
            <thead>
                <tr>
                    <th></th>
                    <th>제품명</th>
                    <th>제품가격</th>
                    <th>배송비</th>
                    <th>추가 배송비</th>
                    <th></th>
                </tr>

            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td><img v-if="product.path!=null" :src="`/download/${product.id}/${product.path}`" style="height:50px;width:auto;"/></td>
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.product_price }}</td>
                    <td>{{ product.delivery_price }}</td>
                    <td>{{ product.add_delivery }}</td>
                    <td>
                        <button type="button" class="btn btn-info me-1" @click="goToImageInsert(product.id,product.product_name)">사진등록</button>
                        <button type="button" class="btn btn-warning me-1" @click="goToUpdate(product.id)">수정</button>
                        <button type="button" class="btn btn-danger" @click="deleteProduct(product.id)">삭제</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'salesListComponent',
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
    this.getProductList2();
  },
  methods: {
    goToInsert() {
      this.$router.push({path:'/productRegisterForm'});
    },
    goToImageInsert(product_id,product_name){
      this.$router.push({path:"/goToImageInsertForm",query:{product_id,product_name}});
    },
    goToUpdate(product_id) {
      this.$router.push({path:"/goToUpdate", query:{product_id}});
    },
    deleteProduct(product_id) {
    this.$swal.fire({
      title: "정말삭제하시겠습니까?",
      
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소"
    }).then(async(result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await this.$api("/api/deleteProduct", {param:[product_id]});
       
        this.getProductList2();
        this.$swal.fire("삭제되었습니다.", "", "success");
      }
    });
    },
    getCurrencyFormat(value) {
      return this.$currencyFormat(value);
    },
    async getProductList2() {
      this.productList = await this.$api("/api/productList2", {});
      console.log(this.productList);
    }
 
   
  },
}
</script>
<style>
    
</style>