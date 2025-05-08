<template>
  <div class="popup_box">
    <van-popup v-model:show="show">
      <div class="popup_img">
        <div class="popup_img-top">
          <img src="../../assets/images/start.png" />
        </div>
        <div class="popup_img-center">
          <div class="center_text">
            <div class="left_text">加好友</div>
            <div class="left_text">领点券</div>
          </div>
        </div>
        <div class="popup_img-btn">
          <div class="modal-pic">
            <div class="erweima">
              <img src="../../assets/images/image 149@2x.png" 
               @mousedown="longPress.start" 
               @mouseup="longPress.cancel" 
               @mouseleave="longPress.cancel" 
               @touchstart="longPress.start" 
               @touchend="longPress.cancel"
              />
            </div>
            <div class="tip_text">
              长按保存二维码，进行扫一扫
            </div>
          </div>
        </div>
      </div>
      <div class="popup_close" @click="clickPopup">
        <img src="../../assets/images/Frame_close.png" />
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useLongPress } from "@/utils/longPress";
const show = defineModel("showImgPopup", { required: true, default: true });
const clickPopup = () => {
  show.value = false;
};
const downloadImage = async (url: string) => {
  // const response = await fetch(url);
  // const blob = await response.blob();
  const link = document.createElement('a');
  link.href = url // 使用 URL.createObjectURL
  link.download = url.split('/').pop() || 'download';
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(link.href);
  document.body.removeChild(link);
};

const longPress = useLongPress(() => {
  downloadImage(new URL("../../assets/images/image 149@2x.png", import.meta.url).href); // 这里可以根据需要传入不同的图片URL
}, 500);
</script>

<style scope lang="scss">
.popup_box {
  .van-popup {
    background: transparent;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
.popup_img {
  height: 368px;
  width: 300px;
  // overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &-top {
    position: absolute;
    width: 236px;
    height: 176px;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
  }
  &-left {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 205px;
    left: 38px;
  }
  &-center {
    background-image: url("../../assets/images/Group 1@2x.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 231px;
    height: 50px;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    .center_text {
      display: flex;
      align-items: center;
      padding: 0px 30px;
      padding-bottom: 5px;
      box-sizing: border-box;
      justify-content: space-between;
      height: 100%;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 22px;
      color: #ffffff;
      letter-spacing: 4px;
    }
  }
  .popup_img-btn {
    width: 100%;
    height: 341px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../../assets/images/Rectangle 194@2x.png");
    background-repeat: no-repeat;
    background-size: cover;
    &_text {
      width: 96px;
      height: 18px;
      position: absolute;
      z-index: 2;
    }
    .modal-pic{
      background-image: url("../../assets/images/Rectangle 196@2x.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 240px;
      height: 280px;
      margin-top: 32px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .erweima{
      margin-top: 2.5px;
      width: 235px;
      height: 235px;
      background: #FFFFFF;
      border-radius: 25px 25px 25px 25px;
      box-sizing: border-box;
      padding: 20px;
    }
    .tip_text {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 14px;
      color: #FFFFFF;
    }
  }
}

.popup_close {
  height: 28px;
  width: 28px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
