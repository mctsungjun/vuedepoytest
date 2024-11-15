<template>
  <div class="container">
    <h2 class="text-center">제품등록</h2>
    <div class="mb-3 row">
      <label class="form-label col-md-3">제품명</label>
      <div class="col-md-9">
        <input type="text" class="form-control" v-model="product.product_name"/>
      </div>
    </div>
    <div class="mb-3 row">
      <label class="form-label col-md-3">재품가격</label>
      <div class="col-md-9">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="product.product_price" />
          <span class="input-group-text">원</span>
        </div>
      </div>
    </div>
    <div class="mb-3 row">
      <label class="form-label col-md-3">배송비</label>
      <div class="col-md-9">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="product.delivery_price"/>
          <span class="input-group-text">원</span>
        </div>
      </div>
    </div>
    <div class="mb-3 row">
      <label class="form-label col-md-3">추가 배송비(도서산간)</label>
      <div class="col-md-9">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="product.add_delivery"/>
          <span class="input-group-text">원</span>
        </div>
      </div>
    </div>
    <div class="mb-3 row">
      <label class="form-label col-md-3">제품 카타고리</label>
      <div class="col-md-9">
        <div class="row">
          <div class="col-auto">
            <select class="form-select" v-model="cate1" @change="changCategory1">
              <option :value="cate" :key="i" v-for="(cate,i) in category1">{{cate}}</option>
            </select>
          </div>
          <div class="col-auto">
            <select class="form-select" v-model="cate2" @change="changCategory2">
              <option :value="cate" :key="i" v-for="(cate,i) in category2">{{cate}}</option>
            </select>
          </div>
          <div class="col-auto" >
            <select class="form-select" v-model="cate3">
              <option :value="cate" :key="i" v-for="(cate,i) in category3">{{ cate }}</option>
            </select>
          </div>
        </div>
      
      </div>
    </div>
    <div class="mb-3 row">
          <label class="form-label col-md-3">태그</label>
          <div class="col-md-9">
            <input type="text" class="form-control" v-model="product.tags"/>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="form-label col-md-3">출고일</label>
          <div class="col-md-9">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="product.outbound_days"/>
              <span class="input-group-text">5일이내출고</span>
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
            <button type="button" class="btn btn-outline-danger btn-lg" @click="productInsert">
              저장하기
            </button>
          </div>
        </div>
  </div>
</template>
<script>


export default {
  name: "showRegister",
  data() {
    return {
      product:{
        product_name: "",
        product_price: 0,
        delivery_price:0,
        add_delivery:0,
        tags:"",
        outbound_days:0,
        category_id:1,
        seller_id:1

      },
      categoryList:{},
      category1:[],
      category2:[],
      category3:[],
      cate1:"",
      cate2:"",
      cate3:"",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.getCategoryList()
  },
  mounted() {
    
  },
  methods: {
    goToList(){
      this.$router.push({path:"/salesList"})
    },
    async getCategoryList(){
      let categoryList = await this.$api("/api/categoryList",{});
      this.categoryList = categoryList;
      let oCategory = {};
      categoryList.forEach(item => {
        oCategory[item.category1] = item.id;
      });
      let category1 = [];
      for(let key in oCategory){
        category1.push(key);
        
      }
      this.category1 = category1;

      let category2 = [];
      category2 = categoryList.filter(c => {
        return  c.category1 == category1[0];
      }); // 카테고리 1에 포함된것중에만 가져오기

      let oCategory2 = {};
      category2.forEach(item =>{
        oCategory2[item.category2]= item.id;
      });

      category2= [];
      for(let key in oCategory2){
        category2.push(key);
      }
      this.category2 = category2;

    },
    changCategory1(){
      this.category3 = []; // 초기하 목적 메뉴에서 바꿀때
      let categoryList = this.categoryList.filter(c => {
        return c.category1 == this.cate1;
      });

      let oCategory2 = {};
      categoryList.forEach(item => {
        oCategory2[item.category2]= item.id;
      });
      let category2 = [];
      for(let key in oCategory2){
        category2.push(key);
      }
      this.category2 = category2;
    },
    changCategory2(){
      let categoryList = this.categoryList.filter(c => {
        return (c.category1 == this.cate1) && (c.category2 == this.cate2);
      });

      let oCategory3 = {};
      categoryList.forEach(item => {
        oCategory3[item.category3]= item.id;
      });
      let category3 = [];
      for(let key in oCategory3){
        category3.push(key);
      }
      this.category3 = category3;
    },
   
    productInsert() {
      if (this.product.product_name ==""){
        return this.$swal("제품명은 필수 입력값입니다.");
      }
      if (this.product.product_price ==0 || this.product.product_price ==""){
        return this.$swal("제품가격을 입력하세요.");
      }
      if (this.product.delivery_price ==0 || this.product.delivery_price ==""){
        return this.$swal("배송료를 입력하세요.");
      }
      if (this.product.outbound_days ==0 || this.product.outbound_days ==""){
        return this.$swal("출고일을 입력하세요.");
      }

      this.product.category_id = this.categoryList.filter(c => {
        return (c.category1 == this.cate1 && c.category2 == this.cate2 && c.category3 == this.cate3)
      })[0].id;
      console.log(this.product.category_id);

      this.$swal.fire({
      title: "정말 등록하시겠습니까?",
      
      showCancelButton: true,
      confirmButtonText: "생성",
      cancelButtonText: "취소"
    }).then(async(result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await this.$api("/api/productInsert", {param:[this.product]});
       
        
        this.$swal.fire("저장되었습니다.", "", "success");
        this.$router.push({path:"/salesList"});
      }
    });
    }
  },
};
</script>
<style>
</style>