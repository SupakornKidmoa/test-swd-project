<template>
  <a-layout>
    <a-layout-header style="background: #e6f7ff">
      <div style="width: 80px; height: 100%; display: flex; padding: 4px 0">
        <img
          src="swd.png"
          style="
            max-height: 100%;
            max-width: 100%;
            margin: auto;
            cursor: pointer;
          "
          @click="$router.push('/')"
        />
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <a-menu-item key="1" @click="() => $router.push('/page1')">
            Table Data
          </a-menu-item>
          <a-menu-item key="2" @click="() => $router.push('/page2')">
            Graph Data
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 24px">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: '0px',
            height: '100%',
          }"
        >
          <nuxt />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss"></style>
