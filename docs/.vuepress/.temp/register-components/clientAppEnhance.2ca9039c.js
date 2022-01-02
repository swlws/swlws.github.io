import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("generate-id", defineAsyncComponent(() => import("/Users/sunwenlong/Self/Code/02-WebDemo/portal/src/view/generate-id/index.vue")))
}
