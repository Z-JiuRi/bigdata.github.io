<template>
  <div class="home" :class="$i18n.locale">
    <!-- <div style="max-width: calc(100vw - 96px); margin-bottom: 24px">
      <Carousel loop style="height: 400px" autoplay>
        <CarouselItem
          v-for="project in projects"
          :key="project.id"
          style="
            position: relative;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <div
            :style="{ backgroundImage: `url(${project.thumbnail})` }"
            style="
              position: absolute;
              width: 100%;
              height: 400px;
              background-position: center center;
              background-size: cover;
              filter: blur(3px) brightness(0.4);
            "
          ></div>
          <p
            style="
              color: white;
              z-index: 6;
              font-size: 64px;
              font-weight: 700;
              text-align: center;
            "
          >
            {{ project.name }}
          </p>
        </CarouselItem>
      </Carousel>
    </div> -->
    <h2>{{ $t("teacherAndTA") }}</h2>
    <!-- Information from VisLab.wang -->
    <div class="members__profile-card-gallery">
      <div class="profile-card">
        <div class="photo gatsby-image-wrapper"
          style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;">
          <img aria-hidden="true" src="/images/zengqiong.png" alt=""
            style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: contain; object-position: center center" />
        </div>
        <div class="major-text">Qiong Zeng</div>
        <div class="minor-text">Associate Researcher</div>
        <div class="icon-list">
          <a href="mailto:qiong.zn@sdu.edu.cn"><svg aria-hidden="true" focusable="false" data-prefix="fas"
              data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 " role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
              </path>
            </svg></a><a href="https://qiongzn.github.io" title="Personal site" target="_blank"
            rel="noopener noreferrer"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link"
              class="svg-inline--fa fa-link fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z">
              </path>
            </svg></a>
        </div>
      </div>
      <div class="profile-card">
        <div class="photo gatsby-image-wrapper"
          style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;">
          <img aria-hidden="true" src="/images/luanjunfeng.jpg" alt=""
            style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: contain; object-position: center center" />
        </div>
        <div class="major-text">Junfeng Luan</div>
        <div class="minor-text">Professor</div>
        <div class="icon-list">
          <a href="mailto:testluanjunfeng@gmail.com"><svg aria-hidden="true" focusable="false" data-prefix="fas"
              data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 " role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
              </path>
            </svg></a><a href="https://www.cs.sdu.edu.cn/info/1071/2806.htm" title="Personal site" target="_blank"
            rel="noopener noreferrer"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link"
              class="svg-inline--fa fa-link fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z">
              </path>
            </svg></a>
        </div>
      </div>

      <!--<div class="profile-card">
        <div class="photo gatsby-image-wrapper"
          style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;">
          <img aria-hidden="true" src="/images/pengzhaohui.png" alt=""
            style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: contain; object-position: center center" />
        </div>
        <div class="major-text">Zhaohui Peng</div>
        <div class="minor-text">Professor</div>
        <div class="icon-list">
          <a href="pzh@sdu.edu.cn"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
              class="svg-inline--fa fa-envelope fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
              </path>
            </svg></a><a href="https://www.cs.sdu.edu.cn/info/1070/2802.htm" title="Personal site" target="_blank"
            rel="noopener noreferrer"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link"
              class="svg-inline--fa fa-link fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z">
              </path>
            </svg></a>
        </div>
      </div>
      <div class="profile-card">
        <div
          class="photo gatsby-image-wrapper"
          style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;"
        >
          <img
            aria-hidden="true"
            src="/images/songzhao.png"
            alt=""
            style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: contain; object-position: center center"
          />
        </div>
        <div class="major-text">Zhao Song</div>
        <div class="minor-text">Master Student</div>
        <div class="icon-list">
          <a href="mailto:zsongzhaop@163.com"
            ><svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              class="svg-inline--fa fa-envelope fa-w-16 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
              ></path></svg
          ></a>
        </div>
      </div> -->

      <div class="profile-card">
        <div class="photo gatsby-image-wrapper"
          style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;">
          <img aria-hidden="true" src="/images/zouxudong.png" alt=""
            style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: contain; object-position: center center" />
        </div>
        <div class="major-text">Xudong Zou</div>
        <div class="minor-text">Undergraduate Student</div>
        <div class="icon-list">
          <a href="mailto:2061362927@qq.com"><svg aria-hidden="true" focusable="false" data-prefix="fas"
              data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 " role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
              </path>
            </svg></a>
          <a href="https://github.com/z-jiuri" title="GitHub" target="_blank" rel="noopener noreferrer"><svg
              aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
              class="svg-inline--fa fa-github fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512">
              <path fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </svg></a>
        </div>
      </div>

      <div class="profile-card">
        <div class="photo gatsby-image-wrapper"
          style="position: relative; overflow: hidden; display: inline-block; width: 180px; height: 180px;">
          <img aria-hidden="true" src="/images/aoyuxuan.png" alt=""
            style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: contain; object-position: center center" />
        </div>
        <div class="major-text">Yuxuan Ao</div>
        <div class="minor-text">Undergraduate Student</div>
        <div class="icon-list">
          <a href="mailto:1214076062@qq.com"><svg aria-hidden="true" focusable="false" data-prefix="fas"
              data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 " role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
              </path>
            </svg></a>
          <a href="https://github.com/yuxua24" title="GitHub" target="_blank" rel="noopener noreferrer"><svg
              aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
              class="svg-inline--fa fa-github fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512">
              <path fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </svg></a>
        </div>
      </div>
    </div>
    <h2>{{ $t("courseIntro") }}</h2>
    <p>
      {{ $t("courseIntroContent") }}
    </p>
    <h2>{{ $t("courseDesc") }}</h2>
    <p>{{ $t("courseDescContent") }}</p>
    <h2>{{ $t("aims") }}</h2>
    <p>
      {{ $t("aims1") }}
    </p>
    <p>
      {{ $t("aims2") }}
    </p>
    <p>
      {{ $t("aims3") }}
    </p>
    <h2>{{ $t("request") }}</h2>
    <p>{{ $t("requestContent") }}</p>
    <ol>
      <li>
        {{ $t("requestContent1") }}
      </li>
      <li>
        {{ $t("requestContent2") }}
      </li>
      <li>
        {{ $t("requestContent3") }}
      </li>
      <li>
        {{ $t("requestContent4") }}
      </li>
    </ol>
    <h2>{{ $t("LOT") }}</h2>
    <!-- Exported from https://tableizer.journalistopia.com/ -->
    <table class="tableizer-table">
      <thead>
        <tr class="tableizer-firstrow">
          <th>{{ $t("week") }}</th>
          <th>{{ $t("date") }}</th>
          <th>{{ $t("topic") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>2024/09/05</td>
          <td>Course Introduction and Bigdata Exploratory Analytics</td>
        </tr>
        <tr>
          <td>02</td>
          <td>2024/09/12</td>
          <td>Course Practice Project Introduction and Project Team Test</td>
        </tr>
        <tr>
          <td>03</td>
          <td>2024/09/19</td>
          <td>Project Experience Talk and Introduction to Scientific Research Practice</td>
        </tr>
        <tr>
          <td>04</td>
          <td>221/09/26</td>
          <td>Data Sampling and Dimensionality Reduction</td>
        </tr>
        <tr>
          <td>05</td>
          <td>2024/10/03</td>
          <td>Data Quality Management</td>
        </tr>
        <tr>
          <td>06</td>
          <td>2024/10/10</td>
          <td>Crowdsourcing and Spreadsheets</td>
        </tr>
        <tr>
          <td>07</td>
          <td>2024/10/17</td>
          <td>Methods and Tools for Statistical Analysis</td>
        </tr>
        <tr>
          <td>08</td>
          <td>2024/10/24</td>
          <td>Visualization</td>
        </tr>
        <tr>
          <td>09</td>
          <td>2024/10/31</td>
          <td>Student Paper Presentation 1</td>
        </tr>
        <tr>
          <td>10</td>
          <td>2024/11/07</td>
          <td>Student Paper Presentation 2</td>
        </tr>
        <tr>
          <td>11</td>
          <td>2024/11/14</td>
          <td>Machine Learning Methods</td>
        </tr>
        <tr>
          <td>12</td>
          <td>2024/11/21</td>
          <td>Interaction for Visual Exploration</td>
        </tr>
        <tr>
          <td>13</td>
          <td>2024/11/27</td>
          <td>Ubiquitous Computing</td>
        </tr>
        <tr>
          <td>14</td>
          <td>2024/12/05</td>
          <td>Large-scale System</td>
        </tr>
        <tr>
          <td>15</td>
          <td>2024/12/12</td>
          <td>How to write a paper</td>
        </tr>
        <tr>
          <td>16</td>
          <td>2024/12/19</td>
          <td>Final Project Presentation 1</td>
        </tr>
        <tr>
          <td>17</td>
          <td>2024/12/26</td>
          <td>Final Project Presentation 2</td>
        </tr>
      </tbody>
    </table>
    <h2>{{ $t("grading") }}</h2>
    <ul>
      <li>
        {{ $t("task") }} (15%)
        <ul>
          <li>{{ $t("paperPres") }} (15%): {{ $t("paperPresDesc") }}</li>
        </ul>
      </li>
      <li>
        {{ $t("finalProject") }} (55%)
        <ul>
          <li>
            {{ $t("paperWriting") }} (&#8804; 4 {{ $t("pages") }} + 1
            {{ $t("referencePage") }}, 20%)
          </li>
          <li>{{ $t("presentation") }} ({{ $t("oral") }} + Demo, 20%)</li>
          <li>{{ $t("codeQuality") }} (10%)</li>
          <li>{{ $t("midTerm") }} (5%)</li>
        </ul>
      </li>
      <li>
        {{ $t("attend") }} (25%)
        <ul>
          <li>{{ $t("attendency") }} (5%)</li>
          <li>{{ $t("disscuss") }} (20%): {{ $t("disscussDesc") }}</li>
        </ul>
      </li>
      <li>{{ $t("peer") }} (5%)</li>
      <li>
        {{ $t("bouns") }}
      </li>
    </ul>
    <h2>{{ $t("reference") }}</h2>
    <ol>
      <li v-for="ref in references" :key="ref.id">
        {{ ref.name }}
        <br v-if="ref.translateName && $i18n.locale == 'zh'" />{{
          ref.translateName && $i18n.locale == "zh"
            ? "中文译名: " + ref.translateName
            : ""
        }}
        <br />{{ $t("authors") }}: {{ ref.authors }} <br />{{ $t("pub") }}:
        {{ ref.pubI18n ? $t(ref.pub) : ref.pub }}<br />{{ $t("pubYear") }}:
        {{ ref.pubYear }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "home",
  computed: mapState(["projects", "references"]),
};
</script>

<style scoped>
p {
  font-size: 16px;
  text-indent: 2em;
}

.en p {
  text-indent: 0;
  margin-bottom: 1em;
}

h2 {
  font-size: 26px;
  margin-top: 12px;
}

li {
  font-size: 14px;
  margin-left: 2em;
}

.members__profile-card-gallery {
  --photo-length: 180px;
  --major-text-color: #212121;
  --minor-text-color: #848484;
  display: flex;
  gap: 1.5rem;
  grid-template-columns: repeat(5, calc(var(--photo-length) + 2rem));
  justify-content: center;
  align-items: center;
}

.members__profile-card-gallery .profile-card {
  display: grid;
  grid-auto-flow: row;
  gap: 0.5rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: left;
  width: calc(var(--photo-length) + 2rem);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border: 1px solid #d5d5d5;
  transition: border-color 0.3s ease-in-out;
}

.members__profile-card-gallery .profile-card:hover {
  border: 1px solid var(--major-text-color);
}

.members__profile-card-gallery .profile-card .major-text {
  font-size: 18px;
  font-weight: 500;
  color: var(--major-text-color);
}

.members__profile-card-gallery .profile-card .minor-text {
  font-size: 16px;
  color: var(--minor-text-color);
}

.members__profile-card-gallery .profile-card .icon-list {
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  justify-content: flex-start;
}

.members__profile-card-gallery .profile-card .icon-list a {
  text-decoration: none;
  color: inherit;
  transition: 0.2s ease-in-out;
}

svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa.fa-w-16 {
  width: 1em;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}

table.tableizer-table {
  font-size: 12px;
  border: 1px solid #ccc;
  font-family: Arial, Helvetica, sans-serif;
}

.tableizer-table td {
  padding: 4px;
  margin: 3px;
  border: 1px solid #ccc;
}

.tableizer-table th {
  background-color: #000000;
  color: #fff;
  font-weight: bold;
  text-align: center;
  min-width: 5em;
}
</style>
