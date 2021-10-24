<script lang="tsx">
import { h, Fragment, defineComponent } from "vue";
const React = { createElement: h, Fragment };
export default defineComponent({
    props: {
        data: {
            type: [Object],
            require: true,
            default: []
        }
    },

    setup() {
        return () => (
            <div class="JIN-sheet-item">1</div>
        )
    }
})
</script>

<style lang="less" scoped>
    .JIN-sheet-item {
        width: calc(80%vw);
    }
</style>