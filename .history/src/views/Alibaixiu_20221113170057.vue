<template>
  <div class="container">
    <div class="row">
      <header class="col-md-3 header-title">
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
        <div class="news">
          <ul>
            <li><a href="#">
                <img src="../assets/ship.png" alt="">
                <p>阿里百秀</p>
            </a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
          </ul>
        </div>
        <div class="publish"></div>
      </article>
      <aside class="col-md-2"></aside>
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
              &:nth-child(1) {
                width: 50%;
                height: 266px;
                padding-right: 10px;
                background-color: aquamarine;
                img {
                    width: 266px;
                    height: 266px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>