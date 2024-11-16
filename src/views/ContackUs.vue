<template>
  <!-- Contact Section -->
  <section id="contact" class="contact section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2 class="text-warning">Contact</h2>
      <p>
        사이트에 수시로 방문하지 않고 자주 사용하시는 이메일을 통해 간편하게 답변을 확인하실 수 있습니다
      </p>
    </div>
    <!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-5">
          <div class="info-wrap">
            <div
              class="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>주소</h3>
                <p>서울시 광진구 천호대로 536, 7층 735호</p>
              </div>
            </div>
            <!-- End Info Item -->

            <div
              class="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i class="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>연락처</h3>
                <p>02 5589 5548</p>
              </div>
            </div>
            <!-- End Info Item -->

            <div
              class="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>이메일</h3>
                <p><a href="m97161@gmail.com" class="btn btn-primary"></a></p>
              </div>
            </div>
            <!-- End Info Item -->
            <KakaoMap />
            
          </div>
        </div>

        <div class="col-lg-7">
          <form
            method="post"
            class="php-email-form"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="row gy-4">
              <div class="col-md-6">
                <label for="name-field" class="pb-2">이름</label>
                <input
                  type="text"
                  name="name"
                  id="name-field"
                  class="form-control"
                  required=""
                />
              </div>

              <div class="col-md-6">
                <label for="email-field" class="pb-2">이메일</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email-field"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <label for="subject-field" class="pb-2">제목</label>
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject-field"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <label for="message-field" class="pb-2">문의내용</label>
                <textarea
                  class="form-control"
                  name="message"
                  rows="10"
                  id="message-field"
                  required=""
                ></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  문의해주셔서 감사합니다.
                </div>

                <button type="submit">작성</button>
              </div>
            </div>
          </form>
        </div>
        <!-- End Contact Form -->
      </div>
    </div>
  </section>
  <!-- /Contact Section -->
</template>
<script>
    import KakaoMap from '@/components/KakaoMap.vue';
        
            
export default {
    name: 'contactusComponent',
    components: {
        KakaoMap,
    },
};
</script>
<style>
</style>