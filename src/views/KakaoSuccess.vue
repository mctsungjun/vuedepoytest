<template>
    <div>
        <h1>결제 성공</h1>
        <p>결제 정보입니다...</p>
        <ul class="list-group">
            <li class="list-group-item">상품이름: {{ item_name }}</li>
            <li class="list-group-item">수량: {{ quantity }}</li>
            <li class="list-group-item">금액: {{ amount }}</li>
            <li class="list-group-item">할인: {{ discount }}</li>
            <li class="list-group-item">날짜: {{ created_at }}</li>
            <li class="list-group-item">승인날짜: {{ approved_at }}</li>
            <li class="list-group-item">승인방법: {{             payment_method}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "kakaosuccessComponent",
    data() {
        return {
            amount:'',
            tax: '',
            discount: '',
            item_name: '',
            quantity:'',
            created_at:'',
            approved_at: '',
            payment_method: ''
        }
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const pg_token = urlParams.get('pg_token');
        
        if(pg_token){
            console.log('pg_token:', pg_token);

            // 서버로 pg_token 전달하여 결제 승인 요청
            this.confirmPayment(pg_token);
        }else{
            console.error('pg-token이 없습니다.')
        }
    },
    methods: {
        async confirmPayment(pg_token) {
            try{
                const res =  await this.$api('/payment/confirm', {
                    param: [pg_token]
                   
                });
                
                console.log('결제 확인 응답:', res);
            this.amount=res.amount.total,
            this.tax= res.amount.vat,
            this.discount = res.amount.discount,
            this.item_name = res.item_name,
            this.quantity = res.quantity,
            this.created_at = res.created_at,
            this.approved_at = res.approved_at,
            this.payment_method = res.payment_method_type
            }catch(error) {
                console.error('결제 확인 요청 중 오류:', error);
            }
        }
    }
}
</script>
<style>
    
</style>