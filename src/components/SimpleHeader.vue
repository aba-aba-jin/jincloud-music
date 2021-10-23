<template>
    <header>
        <img :src="state.menuIcon" alt='' @click="showDrawer" />
        <slot />
        
    </header>
    
</template>

<script>
import { reactive } from 'vue';
import menuIcon from '@assets/menu.png';
export default {

    props: {

    },

    setup() {

        const state = reactive({
            menuIcon
        })
    
        const showDrawer = () => {
            // state.show = true
            // TODO 侧边栏操作
        }

        return {
            state,
            showDrawer
        }
    }
}
</script>

<style scoped lang='less'>

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: @padding;
        img {
            width: 54 / @rem;
            height: 54 / @rem;
        }
    }
</style>