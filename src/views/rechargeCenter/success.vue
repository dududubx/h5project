<template>
  <div class="success" v-if="!showLoading">
    <div class="goods_title">
      <div class="back_title">
        <div class="arrow_text" @click.stop>订单详情</div>
      </div>
      <div class="goods_title-box">
        <div class="goods_title-left">
          <div class="state_img">
            <img :src="imgSrc" />
            {{ orderState(orederData?.order_status) }}
          </div>
          <div class="state_text">
            {{ stateText }}
          </div>
        </div>
        <div class="goods_title-right" :class="isClick ? '' : 'jiaji_fail'">
          <div class="right_box" @click="ClickJiaji">
            <img :src="jiajiImg" />
            <div class="jiaji_text">
              {{ jiajiText }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods_content">
      <div class="content_bc-img"></div>
      <div class="goods_info goods_box">
        <!-- <div class="goods_info-title">订单详情</div> -->
        <div class="goods_info-details">
          <div class="goods_info-img">
            <img :src="orederData?.productImg" />
          </div>
          <div class="goods_info-right">
            <div class="right_name">
              <div class="right_name-text">
                {{ orederData?.productName }}
              </div>
              <div class="right_name-price">
                ￥<span class="price_num">{{
                  isFloat(Number(orederData?.productPrice))
                }}</span>
              </div>
            </div>
            <div class="right_title">
              <div class="yugujia">
                <div class="yugujia_text">预估返</div>
                <div class="yugujia_price">
                  <span>￥</span> {{ isFloat(Number(orederData?.backPrice)) }}
                </div>
              </div>
              <!-- {{ decodeURIComponent(history.state.title as string) }} -->
              <div class="yugujia_order_num">x{{ orederData?.num || 1 }}</div>
            </div>
          </div>
        </div>
        <div class="goods_info-count">
          <div class="count_top">
            <div class="count_title">商品总价</div>
            <div class="count_price">
              ￥<span class="count_price-num">{{
                isFloat(
                  Number(orederData?.productPrice) * Number(orederData?.num)
                )
              }}</span>
            </div>
          </div>
          <div class="count_bottom">
            实付款
            <span class="count_bottom-num"
              >￥<span class="num_blod">{{
                isFloat(Number(orederData?.payMent))
              }}</span></span
            >
          </div>
        </div>
      </div>
      <div
        class="goods_postscript goods_order goods_box"
        v-if="orederData?.productType == 1 && orederData?.order_status != 3"
      >
        <div class="order_num">
          <div class="left_name">提取卡密</div>
          <div class="right_info">
            <div
              class="opear batchCopy-btn"
              v-if="
                orederData?.recharge_card &&
                orederData?.recharge_card.length > 0 &&
                orederData?.order_status == 1
              "
              @click="patchCopy"
            >
              批量复制
            </div>
          </div>
        </div>
        <div class="info-item" v-if="[2, 4].includes(orederData?.order_status)">
          正在提取卡密，请耐心等待!
        </div>

        <div
          v-if="
            orederData?.recharge_card &&
            orederData?.recharge_card.length > 0 &&
            orederData?.order_status == 1
          "
        >
          <div
            class="info-item card-item"
            v-for="(item, index) in orederData?.recharge_card"
            :key="item.id"
          >
            <div class="card-item-box" v-if="item.card_no">
              <div class="card_title">卡号：</div>
              <div
                class="card_text"
                :class="{
                  card_clicked: isClicked == index && clickType == 'no',
                }"
                @click="handleCardClick(item, 'card', 'no', index)"
              >
                {{ item.card_no }}
              </div>
              <div class="card_copy">
                <img
                  src="../../assets/images/copy.svg"
                  @click="newCopyCode(item, 'card')"
                />
              </div>
            </div>
            <div class="card-item-box" v-if="item.card_password">
              <div class="card_title">卡密：</div>
              <div
                class="card_text"
                :class="{
                  card_clicked: isClicked == index && clickType == 'psd',
                }"
                @click="handleCardClick(item, 'card', 'psd', index)"
              >
                {{ item.card_password }}
              </div>
              <!-- <div class="card_copy">
                <img src="../../assets/images/copy.svg" @click="newCopyCode(item.card_password)"/>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="goods_order goods_box">
        <div class="order_num">
          <div class="left_name">订单编号</div>
          <div class="right_info">
            <div class="num_code">{{ orederData?.tid }}</div>
            <div
              class="opear copy-btn"
              @click="newCopyCode(orederData?.tid, 'order')"
            >
              复制
            </div>
          </div>
        </div>
        <div class="order_num">
          <div class="left_name">商品名称</div>
          <div class="right_info">
            {{ orederData?.productName }}
          </div>
        </div>
        <div class="order_num">
          <div class="left_name">商品类型</div>
          <div class="right_info">
            <div class="num_code">
              {{ orederData?.productType == 1 ? "卡密充值" : "自动充值" }}
            </div>
          </div>
        </div>
        <div class="order_num" v-if="orederData?.recharge_account">
          <div class="left_name">充值账号</div>
          <div class="right_info">
            {{ orederData?.recharge_account }}
          </div>
        </div>
        <div class="order_num">
          <div class="left_name">下单时间</div>
          <div class="right_info">{{ orederData?.create_time }}</div>
        </div>
        <div class="order_num" v-if="orederData?.finish_time">
          <div class="left_name">完成时间</div>
          <div class="right_info">{{ orederData?.finish_time }}</div>
        </div>
      </div>
      <!-- <div class="goods_postscript"></div> -->
    </div>
  </div>
  <div class="gif_img success_img" v-if="!showLoading"></div>
  <!-- <imgPopup v-model:showImgPopup="showImgPopup"></imgPopup> -->
  <loadingComp
    :loading="showLoading"
    :loading-text="loadingText"
    v-model:src="src"
  ></loadingComp>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, computed } from "vue";
import { getUrlParams, throttle, isFloat } from "@/utils/util";
import { apiData } from "@/api";
import { showToast, closeToast } from "vant";
import ClipboardJS from "clipboard";
import loadingComp from "@/components/loading/index.vue";
import ImgPopup from "@/components/imgPopup/index.vue";
import { useRoute } from "vue-router";
import router from "@/router";

const src = ref(
  new URL("../../assets/images/loading.gif", import.meta.url).href
);
const history = window.history;
const cardId = getUrlParams(["card", "code", "order", "key"]);
const route = useRoute();
const orederData = ref();
const showLoading = ref(true);
const showImgPopup = ref(false);
const loadingText = ref("加载中....");
const imgSrc = ref(
  new URL("../../assets/images/naozhong.svg", import.meta.url).href
);
const stateText = ref("商家正在准备充值，请稍后再次查询");
const jiajiImg = ref(
  new URL("../../assets/images/jaji_fail.svg", import.meta.url).href
);
const jiajiText = ref("加急");
const orderState = computed(() => {
  return (val) => {
    let text = "";
    switch (val) {
      case 1:
        text = orederData.value?.productType == 2 ?  "充值成功" : '发货成功';
        imgSrc.value = new URL(
          "../../assets/images/success.svg",
          import.meta.url
        ).href;
        stateText.value = orederData.value?.productType == 2 ? "商家已经充值成功，请查询是否到账" : "商家已经发货成功，请查询是否成功";
        break;
      case 2:
        text = orederData.value?.productType == 2 ? "正在充值" : "正在发货";
        imgSrc.value = new URL(
          "../../assets/images/zhunbei.svg",
          import.meta.url
        ).href;
        stateText.value = orederData.value?.productType == 2 ? "商家正在准备充值，请稍后再次查询" : "商家正在进行充值，请稍后再次查询";
        break;
      case 3:
        text =  orederData.value?.productType == 2 ? "充值失败" : "发货失败";
        imgSrc.value = new URL(
          "../../assets/images/fail.svg",
          import.meta.url
        ).href;
        stateText.value =  orederData.value?.productType == 2 ? "商家已经充值失败，请联系客服咨询" : "商家已经发货失败，请联系客服咨询";
        break;
      case 4:
        text =  orederData.value?.productType == 2 ?  "准备充值" : "准备发货";
        imgSrc.value = new URL(
          "../../assets/images/naozhong.svg",
          import.meta.url
        ).href;
        stateText.value = orederData.value?.productType == 2 ? "商家正在准备充值，请稍后再次查询" : "商家正在准备发货，请稍后再次查询";
        break;
      default:
        text =  orederData.value?.productType == 2 ?  "准备充值" : "准备发货";
        imgSrc.value = new URL(
          "../../assets/images/naozhong.svg",
          import.meta.url
        ).href;
        stateText.value = orederData.value?.productType == 2 ? "商家正在准备充值，请稍后再次查询" : "商家正在准备发货，请稍后再次查询";
        break;
    }
    return text;
  };
});
// const copyCode = () => {
//   const clipboard = new ClipboardJS(".copy-btn", {
//     text() {
//       return '22222';
//     },
//   });
//   clipboard.on("success", () => {
//     console.log('复制成功')
//     showToast({
//       message: "复制成功",
//       duration: 1500,
//     });
//   });
//   clipboard.on("error", () => {
//     console.log('复制失败')
//   });
// };
const isClicked = ref(-1);
const clickType = ref("");

const handleCardClick = (item, type, cardType, index) => {
  isClicked.value = index;
  clickType.value = cardType;
  newCopyCode(item, type);
  setTimeout(() => {
    isClicked.value = -1;
    clickType.value = "";
  }, 200); // 500毫秒后恢复原样
};
const newCopyCode = (val, type) => {
  const input = document.createElement("textarea"); // 创建一个临时输入框
  if (type == "order") {
    input.value = val; // 设置输入框的值为要复制的文本
  } else {
    let text = "";
    if (val.card_no) {
      text += "卡号：" + val.card_no + "\r\n";
    }
    if (val.card_password) {
      text += "卡密：" + val.card_password;
    }
    input.value = text; // 设置输入框的值为要复制的文本
  }

  requestAnimationFrame(() => {
    document.body.appendChild(input); // 添加到body中
    input.classList.remove("hidden"); // 过渡到可见状态
    input.select();
    try {
      document.execCommand("copy");
      showToast({
        message: "复制成功",
        duration: 500,
      });
    } catch (err) {
      showToast({
        message: "复制失败，请手动复制",
        duration: 500,
      });
    }
    document.body.removeChild(input);
  });
};
const patchCopy = () => {
  const input = document.createElement("textarea"); // 创建一个临时输入框
  const text = orederData.value.recharge_card.reduce((acc, cur, index) => {
    if (cur.card_no) {
      acc +=
        "卡号：" +
        cur.card_no +
        (index == orederData.value.recharge_card.length - 1 &&
        !cur.card_password
          ? ""
          : "\n");
    }
    if (cur.card_password) {
      acc +=
        "卡密：" +
        cur.card_password +
        (index == orederData.value.recharge_card.length - 1 ? "" : "\n");
    }
    return acc;
  }, "");
  input.value = text; // 设置输入框的值为要复制的文本
  requestAnimationFrame(() => {
    document.body.appendChild(input); // 添加到body中
    input.classList.remove("hidden"); // 过渡到可见状态
    input.select();
    try {
      document.execCommand("copy");
      showToast({
        message: "复制成功",
        duration: 500,
      });
    } catch (err) {
      showToast({
        message: "复制失败，请手动复制",
        duration: 500,
      });
    }
    document.body.removeChild(input);
  });
};
let timer = null;
const timers = [];
const goBack = () => {
  closeToast();
  router.push({
    path: "/",
    query: {
      card: localStorage.getItem("cardId") ?? "",
      // userid: localStorage.getItem("userid") || "",
    },
  });
};
const isClick = ref(false);
const ClickJiaji = () => {
  // showToast({
  //   message: "加急中",
  //   duration: 1500,
  // });
  if (!isClick.value && orederData.value.order_urgent == 2) {
    // isClick.value = true;
    // jiajiText.value = "加急中";
    // jiajiImg.value = new URL(
    //   "../../assets/images/jiaji.svg",
    //   import.meta.url
    // ).href;
    const request = () => {
      apiData
        .urgentOrder({ key: route.query.order })
        .then((res: any) => {
          if (res.code == 200) {
            isClick.value = true;
            jiajiText.value = "加急中";
            jiajiImg.value = new URL(
              "../../assets/images/jiaji.svg",
              import.meta.url
            ).href;
            showToast({
              message: res.msg,
              duration: 500,
            });
          } else {
            showToast({
              message: res.msg,
              duration: 500,
            });
          }
        })
        .catch();
    };
    throttle(request);
  }
};
const clearTimer = () => {
  timers.forEach((timerId) => clearInterval(timerId)); // 清空所有定时器
  timers.length = 0; // 清空定时器数组
  for (let i = 0; i < 9999; i++) {
    clearInterval(i);
  }
};
const loadDetails = () => {
  timer = setInterval(() => {
    // orederData.value = {};
    timers.push(timer);
    apiData
      .getOrder({ key: route.query.order })
      .then((res) => {
        if (res.code == 200) {
          setTimeout(() => {
            showLoading.value = false;
          }, 2000);
          orederData.value = res.data;
          if (orederData.value.order_urgent == 1) {
            isClick.value = true;
            jiajiText.value = "加急中";
            jiajiImg.value = new URL(
              "../../assets/images/jiaji.svg",
              import.meta.url
            ).href;
          }
          if (res.data.order_status == 1 || res.data.order_status === 3) {
            clearInterval(timer);
            clearTimer();
            timer = null;
          }
        } else {
          switch (res.code) {
            case -1:
              showToast({
                message: res.msg,
                duration: 500,
              });
              clearTimer();
              goBack();
              break;
            case -2:
              showToast({
                message: res.msg,
                duration: 500,
              });
              // goBack();
              break;
          }
          clearInterval(timer);
        }
      })
      .catch((err) => {
        showLoading.value = true;
        clearTimer();
        clearInterval(timer);
        timer = null;
        goBack();
      });
  }, 3000);
};
onMounted(() => {
  // copyCode();
  // showLoading.value = true;
  if (localStorage.getItem("ordersData")) {
    orederData.value = JSON.parse(localStorage.getItem("ordersData"));
  }
  apiData
    .getOrder({ key: route.query.order })
    .then((res) => {
      if (res.code == 200) {
        setTimeout(() => {
          showLoading.value = false;
          showImgPopup.value = true;
        }, 2000);
        orederData.value = res.data;
        localStorage.setItem("ordersData", JSON.stringify(res.data));
        if (orederData.value.order_urgent == 1) {
          isClick.value = true;
          jiajiText.value = "加急中";
          jiajiImg.value = new URL(
            "../../assets/images/jiaji.svg",
            import.meta.url
          ).href;
        }
        if (res.data.order_status != 1 && res.data.order_status != 3) {
          loadDetails();
        }
      } else {
        switch (res.code) {
          case -1:
            showToast({
              message: res.msg,
              duration: 500,
            });
            goBack();
            break;
          // case -3:
          //   showToast({
          //     message: res.msg,
          //     duration: 1500,
          //   });
          //   goBack();
          //   break;
          case -2:
            showToast({
              message: res.msg,
              duration: 500,
            });
            // goBack();
            break;
        }
      }
    })
    .catch((err) => {
      goBack();
    });
});
onUnmounted(() => {
  clearTimer();
  clearInterval(timer);
});
</script>

<style scoped></style>
