<template>
  <div class="container">
    <div class="row">
      <header class="col-md-2 header-title">
        <div class="logo">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div class="nav">
          <ul>
            <li><a href="#" class="glyphicon glyphicon-camera">生活馆</a></li>
            <li><a href="#" class="glyphicon glyphicon-qrcode">自然汇</a></li>
            <li><a href="#" class="glyphicon glyphicon-tag">科技潮</a></li>
            <li><a href="#" class="glyphicon glyphicon-book">奇趣事</a></li>
            <li><a href="#" class="glyphicon glyphicon-bookmark">美食杰</a></li>
          </ul>
        </div>
      </header>
      <article class="col-md-7 article">
        <div class="news clearfix">
          <ul>
            <li>
              <a href="#">
                <img src="../assets/ship.png" alt="" />
                <p>阿里百秀</p>
              </a>
            </li>
            <li>
              <a href="#">
                <a href="">
                  <img src="../assets/ship.png" alt="" />
                  <p>奇了 成都一小区护卫</p>
                </a>
              </a>
            </li>
            <li>
              <a href="#">
                <a href="">
                  <img src="../assets/ship.png" alt="" />
                  <p>奇了 成都一小区护卫长得像马云市民纷纷要求合影</p>
                </a>
              </a>
            </li>
            <li>
              <a href="#">
                <a href="">
                  <img src="../assets/ship.png" alt="" />
                  <p>奇了 成都一小区护卫长得像马云市民纷纷要求合影</p>
                </a>
              </a>
            </li>
            <li>
              <a href="#">
                <a href="">
                  <img src="../assets/ship.png" alt="" />
                  <p>奇了 成都一小区护卫长得像马云市民纷纷要求合影</p>
                </a>
              </a>
            </li>
          </ul>
        </div>
        <div class="publish">
          <div class="row">
            <div class="col-xs-9 publish-text">
              <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
              <p class="text-muted">alibaixiu 发布于 2015-11-23</p>
              <p>
                指甲是经常容易被人们忽略的身体部位，事实上从指甲的健康状况可以看出一个人的身体健康状况，快来看看10个暗藏在指甲里的知识吧！
              </p>
              <p class="text-muted">
                阅读(2417)评论(1)赞(18)标签：健康/感染/指甲/疾病/皮肤/营养/趣味生活
              </p>
            </div>
            <div class="col-xs-3 publish-img">
              <img src="../assets/ship.png" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-9 publish-text">
              <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
              <p class="text-muted">alibaixiu 发布于 2015-11-23</p>
              <p>
                指甲是经常容易被人们忽略的身体部位，事实上从指甲的健康状况可以看出一个人的身体健康状况，快来看看10个暗藏在指甲里的知识吧！
              </p>
              <p class="text-muted">
                阅读(2417)评论(1)赞(18)标签：健康/感染/指甲/疾病/皮肤/营养/趣味生活
              </p>
            </div>
            <div class="col-xs-3 publish-img">
              <img src="../assets/ship.png" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-9 publish-text">
              <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
              <p class="text-muted">alibaixiu 发布于 2015-11-23</p>
              <p>
                指甲是经常容易被人们忽略的身体部位，事实上从指甲的健康状况可以看出一个人的身体健康状况，快来看看10个暗藏在指甲里的知识吧！
              </p>
              <p class="text-muted">
                阅读(2417)评论(1)赞(18)标签：健康/感染/指甲/疾病/皮肤/营养/趣味生活
              </p>
            </div>
            <div class="col-xs-3 publish-img">
              <img src="../assets/ship.png" alt="" />
            </div>
          </div>
        </div>
      </article>
      <aside class="col-md-3 aside">
        <a href="#">
          <img src="../assets/ship.png" alt="">
        </a>
        <a href="#">
          <span >热搜</span>
          <h3 class="text-primary">欢迎加入中国博客联盟</h3>
          <p class="text-muted">这里收录国内各个领域的优秀博客，是一个全人工编辑的开放式博客联盟交流和展示平台....</p>
        </a>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "alibaixiu",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1280px) {
  .container {
    width: 1280px;
    .row {
      .header-title {
        padding-left: 0;
        .logo {
          > img {
            width: 100%;
            height: 120px;
          }
        }
        .nav {
          background-color: #eee;
          border-bottom: 1px solid #ccc;
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
          a {
            display: block;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            text-decoration: none;
            &:hover {
              background-color: #fff;
            }
            &::before {
              vertical-align: middle;
              padding-right: 5px;
            }
          }
        }
      }
      .article {
        .news {
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            li {
              float: left;
              width: 25%;
              height: 128px;
              padding-right: 10px;
              margin-bottom: 10px;
              // padding-bottom: 10px;
              > a {
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
                img {
                  width: 100%;
                  height: 100%;
                }
                p {
                  position: absolute;
                  width: 100%;
                  height: 52px;
                  text-align: left;
                  line-height: 20px;
                  margin-bottom: 0;
                  padding: 5px 10px;
                  font-size: 12px;
                  color: #fff;
                  bottom: 0;
                  left: 0;
                  background: rgba(0, 0, 0, 0.5);
                }
              }
              &:nth-child(1) {
                width: 50%;
                height: 266px;
                padding-bottom: 0;
                // background-color: aquamarine;
                > a {
                  width: 100%;
                  height: 100%;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                  p {
                    position: absolute;
                    width: 100%;
                    height: 41px;
                    line-height: 41px;
                    margin-bottom: 0;
                    padding: 0 10px;
                    font-size: 12px;
                    color: #fff;
                    bottom: 0;
                    left: 0;
                    background: rgba(0, 0, 0, 0.5);
                  }
                }
              }
            }
          }
        }
      }
      .publish {
        border-top: 1px solid #ccc;
        .row {
          padding: 10px 0;
          border-bottom: 1px solid #ccc;
          .publish-text {
            > h3 {
              text-align: left;
            }
            > p {
              text-align: left;
            }
          }
          .publish-img {
            margin-top: 10px;
            > img {
              width: 100%;
              height: 150px;
            }
          }
        }
      }
      .aside {
        >a {
          display: block;
          margin-bottom: 10px;
          width: 100%;
          height: 180px;
          border: 1px solid #ccc;
          // background: #aaa;
          &:nth-child(2) {
            padding: 0 10px;
            >span {
              // display: block;
              // display: inline-block;
              margin: auto;
              width: 50px;
              height: 20px;
              background-color: aqua;
              border-radius: 0;
            }
            >p,h3 {
              text-align: left;
            }
          }
          >img {
            width: 100%;
          }
        }
        
      }
    }
  }
}
</style>