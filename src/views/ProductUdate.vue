<template>
    <div>
        <div class="container">
    <h2 class="text-center">제품수정</h2>
    <div class="mb-3 row">
      <label class="form-label col-md-3">제품명</label>
      <div class="col-md-9">
        <input type="text" class="form-control" v-model="productDetail.product_name"/>
      </div>
    </div>
    <div class="mb-3 row">
      <label class="form-label col-md-3">재품가격</label>
      <div class="col-md-9">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="productDetail.product_price"/>
          <span class="input-group-text">원</span>
        </div>
      </div>
    </div>
    <div class="mb-3 row">
      <label class="form-label col-md-3">배송비</label>
      <div class="col-md-9">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="productDetail.delivery_price"/>
          <span class="input-group-text">원</span>
        </div>
      </div>
    </div>
    <div class="mb-3 row">
      <label class="form-label col-md-3">추가 배송비(도서산간)</label>
      <div class="col-md-9">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="productDetail.add_delivery" />
          <span class="input-group-text">원</span>
        </div>
      </div>
    </div>
    <div class="mb-3 row">
      <label class="form-label col-md-3">제품 카타고리</label>
      <div class="col-md-9">
        <div class="row">
          <div class="col-auto">
            <select class="form-select">
              <option>전자재품</option>
            </select>
          </div>
          <div class="col-auto">
            <select class="form-select">
              <option>컴퓨터</option>
            </select>
          </div>
          <div class="col-auto">
            <select class="form-select">
              <option>악세사리</option>
            </select>
          </div>
        </div>
      
      </div>
    </div>
    <div class="mb-3 row">
          <label class="form-label col-md-3">태그</label>
          <div class="col-md-9">
            <input type="text" class="form-control" v-model="productDetail.tags" />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="form-label col-md-3">출고일</label>
          <div class="col-md-9">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="productDetail.outbound_days"/>
              <span class="input-group-text">일 이내 출고</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-outline-secondary btn-lg" @click="goToList">
              취소하기
            </button>
          </div>
          <div class="col-6 d-grid">
            <button type="button" class="btn btn-outline-danger btn-lg">
              저장하기
            </button>
          </div>
        </div>
  </div>
    </div>
</template>
<script>
export default {
    name: 'productUudateComponent',
    data() {
        return {
            productDetail: {},
            productId: 0,
            productImag: [],
        }
    },
    created() {
        // 전에 커리 날린것을 가져옴
        this.productId = this.$route.query.product_id; // product_id 는 전에 변수 적어줌
        console.log(this.productId)
        this.getproductDetail();
        
        
    },
    methods: {
        goToList(){
      this.$router.push({path:"/salesList"})
    },
        async getproductDetail() {
            let productDetail = await this.$api("/api/productDetail", {param:[this.productId]});
            if (productDetail.length >0){
                this.productDetail = productDetail[0];
              
            }
            
        },
    }
}
</script>
<style>
    
</style>