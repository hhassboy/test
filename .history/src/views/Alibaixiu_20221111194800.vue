<template>
  <div class="container">
    <div class="row">
      <header class="col-md-3 header-title">
        <div class="logo">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div class="nav">
          <ul>
            <li><a href="#">生活馆</a></li>
            <li><a href="#">自然汇</a></li>
            <li><a href="#">科技潮</a></li>
            <li><a href="#">奇趣事</a></li>
            <li><a href="#">美食杰</a></li>
          </ul>
        </div>
      </header>
      <article class="col-md-7"></article>
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
            width: 190px;
            height: 120px;
          }
        }
        .nav {
            background-color: #eee;
            border-bottom: 1px solid #ccc;
            ui li {
                list-style-type: none;
            }
        }
      }
    }
  }
}
</style>