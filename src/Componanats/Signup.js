import React from "react";

function Signup() {
  return (
    <>
      <section class="min-h-screen w-2/3 mx-auto">
        <div class="container min-h-full flex justify-center items-center bg-slate-100 rounded-2xl mx-auto my-20">
          <div class="lg:col-span-12 xl:col-span-11  m-10 ">
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="flex justify-center">
                  <div class="md:col-span-10 lg:col-span-6 xl:col-span-5 order-1 bg-white w-1/2  order-lg-1">
                    <p class="text-center text-4xl font-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="flex  mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="flex-grow mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-input"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      <div class="flex items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="flex-grow mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-input"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>

                      <div class="flex items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="flex-grow mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-input"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div class="flex items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="flex-grow mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            class="form-input"
                            placeholder="Repeat your password"
                          />
                        </div>
                      </div>

                      <div class="flex justify-center items-center mb-5">
                        <input
                          class="form-checkbox me-2"
                          type="checkbox"
                          id="form2Example3c"
                        />
                        <label class="form-checkbox-label" for="form2Example3">
                          I agree all statements in{" "}
                          <a href="#!" class="text-blue-500">
                            Terms of service
                          </a>
                        </label>
                      </div>

                      <div class="flex justify-center mx-4 mb-3 mb-lg-4">
                        <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                          <a href="./"> Register</a>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="md:col-span-10 lg:col-span-6 xl:col-span-7 flex items-center w-1/2 order-2 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
