<template>
  <!-- Contact Section -->
  <section id="contact" class="contact section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
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
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
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
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
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
                <h3>Email Us</h3>
                <p><a href="#" class=""></a></p>
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
                <label for="name-field" class="pb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name-field"
                  class="form-control"
                  required=""
                />
              </div>

              <div class="col-md-6">
                <label for="email-field" class="pb-2">Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email-field"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <label for="subject-field" class="pb-2">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject-field"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <label for="message-field" class="pb-2">Message</label>
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
                  Your message has been sent. Thank you!
                </div>

                <button type="submit">Send Message</button>
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