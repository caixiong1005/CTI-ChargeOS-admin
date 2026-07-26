<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import ThemePicker from "@/components/ThemePicker";
import { getExpiresIn } from "@/utils/auth";

export default {
  name: "App",
  components: { ThemePicker },
  metaInfo() {
    return {
      title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
      titleTemplate: title => {
        return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
      }
    }
  },
  created() {
    this.scheduleTokenRefresh();
  },
  beforeDestroy() {
    if (this._refreshTimer) {
      clearTimeout(this._refreshTimer);
      this._refreshTimer = null;
    }
  },
  methods: {
    // 临近过期前自动刷新 Token，避免 JWT 过期后被强制登出（修复此前 RefreshToken 未被调用的死代码）
    scheduleTokenRefresh() {
      const expiresIn = parseInt(getExpiresIn(), 10);
      if (!expiresIn || expiresIn <= 0) return;
      // 在过期前 60 秒刷新；若有效期极短，则至少每 60 秒尝试一次
      const delay = Math.max((expiresIn - 60) * 1000, 60 * 1000);
      this._refreshTimer = setTimeout(() => {
        if (this.$store.getters.token) {
          this.$store
            .dispatch("RefreshToken")
            .catch(() => {})
            .finally(() => this.scheduleTokenRefresh());
        }
      }, delay);
    },
  },
};
</script>
<style scoped>
#app .theme-picker {
  display: none;
}
</style>
